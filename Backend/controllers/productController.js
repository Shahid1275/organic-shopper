import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/ProductModel.js";
import fs from "fs"; 

const addProduct = async (req, res) => {
  try {
    const requiredFields = ['name', 'category', 'subCategory', 'price', 'description', 'stockStatus', 'ingredients', 'benefits'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ 
          success: false, 
          message: `${field} is required` 
        });
      }
    }

    // Parse JSON fields
    let parsedPrice, parsedIngredients, parsedBenefits;
    try {
      parsedPrice = JSON.parse(req.body.price);
      parsedIngredients = JSON.parse(req.body.ingredients);
      parsedBenefits = JSON.parse(req.body.benefits);
    } catch (parseError) {

      return res.status(400).json({ 
        success: false, 
        message: "Invalid JSON format in one of the fields",
        error: parseError.message
      });
    }

    // Validate parsed fields
    if (!Array.isArray(parsedIngredients) || !Array.isArray(parsedBenefits)) {
      return res.status(400).json({ 
        success: false, 
        message: "Ingredients and benefits must be arrays" 
      });
    }

    // Process price data
    const priceObj = {};
    for (const size in parsedPrice) {
      if (parsedPrice[size] && parsedPrice[size] !== "") {
        const priceValue = Number(parsedPrice[size]);
        if (!isNaN(priceValue)) {
          priceObj[size] = {
            value: priceValue,
            display: `$${priceValue.toFixed(2)}`
          };
        }
      }
    }

    if (Object.keys(priceObj).length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "At least one valid price must be provided" 
      });
    }

    // Handle image uploads with multer
    const imageFields = ["image1", "image2", "image3", "image4"];
    const imageUrls = [];

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "At least one image is required" 
      });
    }

    for (const field of imageFields) {
      if (req.files[field]) {
        const file = req.files[field][0]; // multer stores files as arrays under each fieldname
        try {
          if (!fs.existsSync(file.path)) {
            console.error(`File not found at path: ${file.path}`);
            throw new Error(`File not found at path: ${file.path}`);
          }
          const result = await cloudinary.uploader.upload(file.path, {
            folder: "ecommerce_products",
          });
          imageUrls.push(result.secure_url);
        fs.unlink(file.path, (err) => {
            if (err) console.error(`Failed to delete file ${file.path}:`, err);
          });
        } catch (uploadError) {
          console.error(`Cloudinary upload error for ${field}:`, uploadError);
          req.files[field].forEach(f => {
            fs.unlink(f.path, (err) => {
              if (err) console.error(`Failed to delete file ${f.path}:`, err);
            });
          });
          return res.status(500).json({ 
            success: false, 
            message: `Failed to upload ${field}`,
            error: uploadError.message
          });
        }
      }
    }

    if (imageUrls.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "At least one image is required" 
      });
    }

    // Create new product
    const productData = {
      name: req.body.name,
      category: req.body.category,
      subCategory: req.body.subCategory,
      price: priceObj,
      description: req.body.description,
      stockStatus: req.body.stockStatus,
      bestseller: req.body.bestseller === "true",
      ingredients: parsedIngredients,
      benefits: parsedBenefits,
      image: imageUrls,
      date: Date.now(),
    };
    console.log("Product data to save:", productData);
    const newProduct = await productModel.create(productData);

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error.stack);
    if (req.files) {
      Object.values(req.files).forEach(files => {
        files.forEach(f => {
          fs.unlink(f.path, (err) => {
            if (err) console.error(`Failed to delete file ${f.path}:`, err);
          });
        });
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// List all products
const listProducts = async (req, res) => {
  try {
    // Fetch all products without pagination
    const products = await productModel.find().lean();

    // Log raw products data for debugging
    console.log('Raw products from MongoDB at', new Date().toISOString(), ':', products.map(p => ({
      _id: p._id,
      name: p.name,
      price: p.price
    })));

    // Transform products
    const transformedProducts = products.map(product => {
      const productObj = { ...product };

      // Log original price
      console.log(`Original price for product ${productObj._id} at`, new Date().toISOString(), ':', productObj.price);

      // Ensure price is a valid object
      let priceObj = productObj.price;
      if (!priceObj || typeof priceObj !== 'object' || Array.isArray(priceObj)) {
        console.warn(`Invalid or empty price field for product ${productObj._id} at`, new Date().toISOString(), ':', priceObj);
        priceObj = { S: { value: 0, display: "$0.00" } };
      }

      // Set sizes from price object keys
      productObj.sizes = Object.keys(priceObj).filter(size => priceObj[size] && priceObj[size].value !== undefined);
      
      // Ensure each size has a display field
      productObj.sizes.forEach(size => {
        if (!priceObj[size].display) {
          console.warn(`Missing display field for size ${size} in product ${productObj._id}:`, priceObj[size]);
          const value = priceObj[size].value || 0;
          priceObj[size].display = `$${value.toFixed(2)}`;
        }
      });

      // If no valid sizes, set a default
      if (productObj.sizes.length === 0) {
        console.warn(`No valid sizes for product ${productObj._id}, setting default`);
        priceObj = { S: { value: 0, display: "$0.00" } };
        productObj.sizes = ['S'];
      }

      productObj.price = priceObj;

      // Log final product data
      console.log(`Final product data for ${productObj._id} at`, new Date().toISOString(), ':', {
        price: productObj.price,
        sizes: productObj.sizes
      });

      return productObj;
    });

    res.status(200).json({
      success: true,
      products: transformedProducts
    });
  } catch (error) {
    console.error("Error listing products at", new Date().toISOString(), ":", error.stack);
    res.status(500).json({
      success: false,
      error: "Failed to list products",
      details: error.message,
    });
  }
};
// Remove product
const removeProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ success: false, error: "productId is required" });
    }
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    // Safely handle image deletion from Cloudinary
    if (Array.isArray(product.image) && product.image.length > 0) {
      await Promise.all(
        product.image.map(async (imageUrl) => {
          try {
            if (typeof imageUrl === "string") {
              const publicId = imageUrl.split('/').pop().split('.')[0];
              await cloudinary.uploader.destroy(publicId);
            } else {
              console.warn(`Invalid image URL for product ${productId}:`, imageUrl);
            }
          } catch (cloudinaryError) {
            console.error(`Failed to delete image from Cloudinary for product ${productId}:`, cloudinaryError);
          }
        })
      );
    } else {
      console.warn(`No valid images to delete for product ${productId}`);
    }

    await productModel.findByIdAndDelete(productId);
    res.status(200).json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error removing product:", error.stack); // Include stack trace
    res.status(500).json({
      success: false,
      error: "Failed to remove product",
      details: error.message,
    });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ success: false, error: "productId is required" });
    }
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    const productObj = product.toObject();
    const priceObj = {};
    // Safely handle undefined or null price
    if (productObj.price && typeof productObj.price === "object" && !Array.isArray(productObj.price)) {
      for (const [size, priceData] of Object.entries(productObj.price)) {
        priceObj[size] = {
          value: priceData.value,
          display: priceData.display,
        };
      }
    } else {
      console.warn(`Invalid price field for product ${productObj._id}:`, productObj.price);
      priceObj.S = { value: 0, display: "$0.00" }; // Default fallback
    }
    productObj.price = priceObj;
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      product: productObj,
    });
  } catch (error) {
    console.error("Error fetching product:", error.stack); // Include stack trace
    res.status(500).json({
      success: false,
      error: "Failed to fetch product",
      details: error.message,
    });
  }
};

 const getProductList = async (req, res) => {
  try {
    // Remove pagination for public endpoint
    const products = await productModel.find().lean();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
export {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
  getProductList
};
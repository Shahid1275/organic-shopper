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
    const { page = 1, limit = 10, category, subCategory } = req.query; // Add query parameters
    const skip = (page - 1) * limit;

    // Build query object
    const query = {};
    if (category) query.category = category;
    if (subCategory) query.subCategory = subCategory;

    // Fetch products with pagination and filtering
    const products = await productModel.find(query)
      .skip(skip)
      .limit(Number(limit));

    // Transform products with safe price handling
    const transformedProducts = products.map(product => {
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
        // Set a default price object or skip transformation if desired
        priceObj.S = { value: 0, display: "$0.00" }; // Default fallback
      }
      productObj.price = priceObj;
      return productObj;
    });

    // Add pagination metadata
    const totalProducts = await productModel.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      products: transformedProducts,
      pagination: {
        currentPage: Number(page),
        totalPages,
        totalItems: totalProducts,
        itemsPerPage: Number(limit),
      },
    });
  } catch (error) {
    console.error("Error listing products:", error.stack); // Include stack trace
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

export {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct
};
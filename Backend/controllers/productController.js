import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/ProductModel.js";

const addProduct = async (req, res) => {
  try {
    // Extract all required fields from req.body
    const {
      name,
      price,
      stockStatus,
      description,
      category,
      subCategory,
      sizes,
      ingredients,
      benefits,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // Validate required fields
    if (!name || !price || !stockStatus || !description || !category || !subCategory || !sizes) {
      return res.status(400).json({ error: "All fields (name, price, stockStatus, description, category, subCategory, sizes) are required" });
    }
    if (!ingredients || !benefits) {
      return res.status(400).json({ error: "Ingredients and benefits are required" });
    }
    if (images.length === 0) {
      return res.status(400).json({ error: "At least one image is required" });
    }

    // Parse and validate price
    let priceMap;
    try {
      const priceObj = typeof price === "string" ? JSON.parse(price) : price;
      const validatedPrice = {};
      for (const [key, value] of Object.entries(priceObj)) {
        if (["S", "M", "L", "XL"].includes(key)) {
          if (typeof value === "number") {
            validatedPrice[key] = {
              value: value,
              display: value.toFixed(2),
            };
          } else if (typeof value === "object" && value.value && value.display) {
            validatedPrice[key] = {
              value: value.value,
              display: value.display,
            };
          } else {
            throw new Error(`Invalid price format for size ${key}`);
          }
        } else {
          throw new Error(`Invalid size key: ${key}. Must be one of S, M, L, XL`);
        }
      }
      priceMap = validatedPrice;
    } catch (e) {
      return res.status(400).json({
        error: `Invalid price format: ${e.message}. Must be an object like { "S": {"value": 12, "display": "12.00"}, "M": {"value": 19, "display": "19.00"} } or { "S": 12, "M": 19 }`,
      });
    }

    // Parse arrays if they are strings
    const parsedIngredients = Array.isArray(ingredients) ? ingredients : JSON.parse(ingredients);
    const parsedBenefits = Array.isArray(benefits) ? benefits : JSON.parse(benefits);
    const parsedSizes = Array.isArray(sizes) ? sizes : JSON.parse(sizes);

    // Validate sizes
    if (!parsedSizes.every(size => ["S", "M", "L", "XL"].includes(size))) {
      return res.status(400).json({ error: "Sizes must be an array of valid sizes (S, M, L, XL)" });
    }

    // Validate category and subCategory
    const validCategories = ["Shampoo", "Soap", "Oil", "Cream"];
    const validSubCategories = ["Haircare", "Skincare", "Moisturizer", "Face Care"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: `Category must be one of: ${validCategories.join(", ")}` });
    }
    if (!validSubCategories.includes(subCategory)) {
      return res.status(400).json({ error: `SubCategory must be one of: ${validSubCategories.join(", ")}` });
    }

    // Validate stockStatus
    const validStockStatuses = ["In Stock", "Out of Stock", "Low Stock"];
    if (!validStockStatuses.includes(stockStatus)) {
      return res.status(400).json({ error: `StockStatus must be one of: ${validStockStatuses.join(", ")}` });
    }

    const date = Date.now();

    // Create new product
    const newProduct = new productModel({
      name,
      description,
      ingredients: parsedIngredients,
      benefits: parsedBenefits,
      stockStatus,
      price: priceMap,
      image: imagesUrl,
      category,
      subCategory,
      sizes: parsedSizes,
      date,
      bestseller: bestseller === "true" ? true : bestseller === "false" ? false : Boolean(bestseller),
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product", details: error.message });
  }
};

// List all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    // Transform price field to match the expected format
    const transformedProducts = products.map(product => {
      const productObj = product.toObject();
      const priceObj = {};
      for (const [size, priceData] of Object.entries(productObj.price)) {
        priceObj[size] = {
          value: priceData.value,
          display: priceData.display,
        };
      }
      productObj.price = priceObj;
      return productObj;
    });
    res.status(200).json({ products: transformedProducts });
  } catch (error) {
    console.error("Error listing products:", error);
    res.status(500).json({ error: "Failed to list products", details: error.message });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ error: "productId is required" });
    }
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete associated images from Cloudinary
    if (product.image && product.image.length > 0) {
      await Promise.all(
        product.image.map(async (imageUrl) => {
          const publicId = imageUrl.split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(publicId);
        })
      );
    }

    await productModel.findByIdAndDelete(productId);
    res.status(200).json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ error: "Failed to remove product", details: error.message });
  }
};

// Single product controller
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ error: "productId is required" });
    }
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    // Transform price field to match the expected format
    const productObj = product.toObject();
    const priceObj = {};
    for (const [size, priceData] of Object.entries(productObj.price)) {
      priceObj[size] = {
        value: priceData.value,
        display: priceData.display,
      };
    }
    productObj.price = priceObj;
    res.status(200).json({ success: true, message: "Product fetched successfully", product: productObj });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
  }
};

export {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct
};
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

    if (!name || !price || !stockStatus || !description || !category || !subCategory || !sizes) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!ingredients || !benefits) {
      return res.status(400).json({ error: "Ingredients and benefits are required" });
    }

    let priceMap;
    try {
      const priceObj = JSON.parse(price); // Parse the price string
      // Validate and transform price object
      const validatedPrice = {};
      for (const [key, value] of Object.entries(priceObj)) {
        if (typeof value === "number") {
          // Convert number to { value, display } object
          validatedPrice[key] = {
            value: value,
            display: `$${value.toFixed(2)}`, // Format as currency string
          };
        } else if (typeof value === "object" && value.value && value.display) {
          // Already in correct format
          validatedPrice[key] = value;
        } else {
          throw new Error(`Invalid price format for size ${key}`);
        }
      }
      priceMap = new Map(Object.entries(validatedPrice));
    } catch (e) {
      return res.status(400).json({
        error: `Invalid price format: ${e.message}. Must be an object like { "S": {"value": 23, "display": "$23.00"}, "L": {"value": 50, "display": "$50.00"} } or { "S": 23, "L": 50 }`,
      });
    }

    if (images.length === 0) {
      return res.status(400).json({ error: "At least one image is required" });
    }

    const date = Date.now();
    const reviews = [];

    // Create new product
    const newProduct = new productModel({
      name,
      description,
      ingredients: Array.isArray(ingredients) ? ingredients : JSON.parse(ingredients),
      benefits: Array.isArray(benefits) ? benefits : JSON.parse(benefits),
      stockStatus,
      price: priceMap,
      image: imagesUrl,
      category,
      subCategory,
      sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes),
      date,
      bestseller: bestseller === "true" ? true : bestseller === false,
      reviews,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product", details: error.message });
  }
};
   
 
//list all products
const listProducts = async (req,res) =>{
    try {
        const products = await productModel.find({});
        res.status(200).json({products});
    } catch (error) {
        console.error("Error listing products:", error);
        res.status(500).json({ error: "Failed to list products", details: error.message });
    }
}
//remove products 
const removeProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ error: "productId is required" });
    }
    const product = await productModel.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    console.log("Deleted product:", product);
    res.status(200).json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ error: "Failed to remove product", details: error.message });
  }
};
// single product controller 
const singleProduct = async (req,res) =>{
   try {
     const {productId} = req.body;
    const product = await productModel.findById(productId);
    res.status(200).json({success:true, message:"Product fetched successfully", product});
   } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
   }
}

export {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
}
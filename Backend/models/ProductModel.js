import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [20, 'Product name cannot exceed 20 characters'],
      },
      description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true,
        maxlength: [600, 'Description cannot exceed 600 characters'],
      },
      ingredients: [{
        type: String,
        trim: true,
      }],
      benefits: [{
        type: String,
        trim: true,
      }],
      price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative'],
      },
      images: [{
        type: String,
        trim: true,
        validate: {
          validator: (value) => /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/.test(value),
          message: 'Invalid image URL',
        },
      }],
      stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative'],
        default: 0,
      },
      category: {
        type: String,
        enum: {
          values: ['Shampoo', 'Soaps'],
          message: 'Invalid category. Choose Shampoo or Soaps',
        },
        required: [true, 'Category is required'],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    });

    const productModel = mongoose.model('Product', productSchema);
    export default productModel
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Track the user who posted the review
  name: { type: String, required: true }, // Reviewer's name
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
  comment: { type: String, required: true }, // Review comment
  date: { type: Number, required: true, default: Date.now }, // Timestamp of the review
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  benefits: {
    type: [String],
    required: true,
  },
  stockStatus: {
    type: String,
    required: true,
  },
  price: {
    type: Map,
    of: {
      value: { type: Number, required: true }, // Numeric value for calculations
      display: { type: String, required: true }, // Formatted string with currency
    },
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
  date: {
    type: Number,
    required: true,
    default: Date.now, // Default to current timestamp if not provided
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
  reviews: {
    type: [reviewSchema], // Use the reviewSchema as a subdocument
    default: [], // Allow empty reviews array by default
    required: false, // Not required at creation
  },
});

const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);

export default productModel;
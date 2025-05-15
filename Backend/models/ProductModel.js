import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: { type: String, required: true },
  name: { type: String, required: false },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  date: { type: Number, required: true, default: Date.now },
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
      value: { type: Number, required: true },
      display: { type: String, required: true },
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
  date: {
    type: Number,
    required: true,
    default: Date.now,
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
  reviews: {
    type: [reviewSchema],
    default: [],
    required: false,
  },
});

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
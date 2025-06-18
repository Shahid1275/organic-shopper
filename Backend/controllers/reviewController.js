import productModel from "../models/ProductModel.js";

export const addReview = async (req, res) => {
  const { userId, productId, name, rating, comment } = req.body;

  try {
    // Validate input
    if (!userId || !productId || !name || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Convert rating to number and validate
    const numericRating = Number(rating);
    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
    }

    // Add review to the product's reviews array
    const result = await productModel.updateOne(
      { _id: productId },
      {
        $push: {
          reviews: {
            userId,
            name,
            rating: numericRating,
            comment,
            date: Date.now(),
          },
        },
      },
      { runValidators: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Failed to add review', error: error.message });
  }
};

export const editReview = async (req, res) => {
  try {
    const { productId, reviewId, userId, name, rating, comment } = req.body;

    // Validate input
    if (!productId || !reviewId || !userId || !name || !rating || !comment) {
      return res.status(400).json({ error: "All fields (productId, reviewId, userId, name, rating, comment) are required" });
    }

    // Convert rating to number and validate
    const numericRating = Number(rating);
    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    // Update the specific review in the product's reviews array
    const result = await productModel.updateOne(
      { _id: productId, "reviews._id": reviewId, "reviews.userId": userId },
      {
        $set: {
          "reviews.$.name": name,
          "reviews.$.rating": numericRating,
          "reviews.$.comment": comment,
          "reviews.$.date": Date.now(),
        },
      },
      { runValidators: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Product, review, or unauthorized user not found" });
    }

    res.status(200).json({ success: true, message: "Review updated successfully" });
  } catch (error) {
    console.error("Error editing review:", error);
    res.status(500).json({ error: "Failed to edit review", details: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { productId, reviewId, userId } = req.body;

    // Validate input
    if (!productId || !reviewId || !userId) {
      return res.status(400).json({ error: "All fields (productId, reviewId, userId) are required" });
    }

    // Remove the specific review from the product's reviews array
    const result = await productModel.updateOne(
      { _id: productId, "reviews._id": reviewId, "reviews.userId": userId },
      {
        $pull: {
          reviews: { _id: reviewId },
        },
      },
      { runValidators: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Product, review, or unauthorized user not found" });
    }

    res.status(200).json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ error: "Failed to delete review", details: error.message });
  }
};
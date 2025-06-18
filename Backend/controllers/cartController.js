// import userModel from "../models/userModel.js";

// // Add products to user cart
// const addToCart = async (req, res) => {
//   try {
//     const { itemId, userId, size } = req.body;

//     if (!itemId || !userId || !size) {
//       return res
//         .status(400)
//         .json({ message: "Missing required fields: itemId, userId, or size" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     let cartData = userData.cartData || {};
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }
//     if (cartData[itemId][size]) {
//       cartData[itemId][size] += 1;
//     } else {
//       cartData[itemId][size] = 1;
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.status(200).json({ message: "Item added to cart" });
//   } catch (error) {
//     console.error("Error in addToCart:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Update user cart
// const updateCart = async (req, res) => {
//   try {
//     const { itemId, userId, size, quantity } = req.body;

//     if (!itemId || !userId || !size || quantity === undefined) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     let cartData = userData.cartData || {};
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }
//     cartData[itemId][size] = quantity;

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.status(200).json({ message: "Cart updated" });
//   } catch (error) {
//     console.error("Error in updateCart:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Get user cart data
// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     if (!userId) {
//       return res.status(400).json({ message: "Missing userId" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const cartData = userData.cartData || {};
//     res.status(200).json({ success: true, cartData });
//   } catch (error) {
//     console.error("Error in getUserCart:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export { getUserCart, updateCart, addToCart };
import userModel from "../models/userModel.js";

// Add products to user cart
const addToCart = async (req, res) => {
  try {
    const { itemId, userId, size } = req.body;

    if (!itemId || !userId || !size) {
      return res
        .status(400)
        .json({ message: "Missing required fields: itemId, userId, or size" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {};
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update user cart
const updateCart = async (req, res) => {
  try {
    const { itemId, userId, size, quantity } = req.body;

    if (!itemId || !userId || !size || quantity === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {};
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (quantity <= 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ message: "Cart updated" });
  } catch (error) {
    console.error("Error in updateCart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { itemId, userId, size } = req.body;

    if (!itemId || !userId || !size) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {};
    if (cartData[itemId] && cartData[itemId][size]) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error in removeFromCart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Clear user cart
const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    userData.cartData = {};
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error in clearCart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartData = userData.cartData || {};
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.error("Error in getUserCart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getUserCart, updateCart, addToCart, removeFromCart, clearCart };

// this is the controller for the order page
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
import { v4 as uuidv4 } from 'uuid';

// Place order controller that uses frontend-calculated amounts
const placeOrder = async (req, res) => {
  try {
    const { 
      fullName,
      lastName,
      email,
      streetAddress,
      city,
      state,
      zipCode,
      country,
      phone,
      paymentMethod = 'cod',
      cartTotal,        // From frontend Redux calculation
      deliveryFee,      // From frontend Redux calculation
      grandTotal        // From frontend Redux calculation
    } = req.body;

    const userId = req.body.userId;

    // Validate required fields
    if (!userId || !fullName || !streetAddress || !city || !state || !zipCode || 
        !country || !phone || cartTotal === undefined || deliveryFee === undefined || 
        grandTotal === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required information"
      });
    }

    // Get user's cart data
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const cartItems = user.cartData || {};
    
    // Validate cart is not empty
    if (Object.keys(cartItems).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty"
      });
    }

    // Prepare order items from cart
    const items = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        items.push({
          itemId,
          size,
          quantity: cartItems[itemId][size]
          // Note: We're not storing price here since we're using frontend-calculated totals
        });
      }
    }

    // Create address object
    const address = {
      fullName,
      lastName,
      email,
      streetAddress,
      city,
      state,
      zipCode,
      country,
      phone
    };

    // Create new order using frontend-calculated amounts
    const newOrder = new orderModel({
      userId,
      items,
      amount: grandTotal,       // Using the frontend-calculated grand total
      cartSubtotal: cartTotal,   // Storing subtotal for reference
      deliveryFee,               // Storing delivery fee separately
      address,
      status: "Order placed",
      paymentMethod,
      payment: paymentMethod === 'cod' ? false : true,
      date: Date.now(),
      orderId: uuidv4()
    });

    await newOrder.save();

    // Clear user's cart after successful order
    user.cartData = {};
    await user.save();

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: {
        id: newOrder.orderId,
        amount: grandTotal,
        items: items.length,
        status: newOrder.status
      }
    });

  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message
    });
  }
};

// Place order with Stripe payment
const placeOrderStripe = async (req, res) => {
  try {
    // Similar to placeOrder but with Stripe payment processing
    // Implementation would go here
    return res.status(200).json({
      success: true,
      message: "Stripe payment processed successfully"
    });
  } catch (error) {
    console.error("Error processing Stripe payment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to process payment",
      error: error.message
    });
  }
};

// Get all orders for admin
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ date: -1 });
    return res.status(200).json({
      success: true,
      orders
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message
    });
  }
};

// Get orders for specific user
const userOrders = async (req, res) => {
  try {
    const userId = req.body.userId;
    const orders = await orderModel.find({ userId }).sort({ date: -1 });
    return res.status(200).json({
      success: true,
      orders
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user orders",
      error: error.message
    });
  }
};

// Update order status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    
    if (!orderId || !status) {
      return res.status(400).json({
        success: false,
        message: "Order ID and status are required"
      });
    }

    const updatedOrder = await orderModel.findOneAndUpdate(
      { orderId },
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order status updated",
      order: updatedOrder
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update order status",
      error: error.message
    });
  }
};

export { placeOrder, placeOrderStripe, updateStatus, userOrders, allOrders };
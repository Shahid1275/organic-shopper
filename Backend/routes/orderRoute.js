import express from "express";
import adminAuth from "../middlewares/adminAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderStripe,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import { auth } from "../middlewares/auth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.put("/status", adminAuth, updateStatus); // Changed to PUT for status update

// Payment features
orderRouter.post("/place", auth, placeOrder);
orderRouter.post("/stripe", auth, placeOrderStripe);

// User features
orderRouter.post("/userorders", auth, userOrders);

export default orderRouter;
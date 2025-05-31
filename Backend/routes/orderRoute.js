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

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("status", adminAuth, updateStatus);

//payment features
orderRouter.post("/place", auth, placeOrder);
orderRouter.post("/stripe", auth, placeOrderStripe);

//user features
orderRouter.post("/userorders", auth, userOrders);

export default orderRouter;

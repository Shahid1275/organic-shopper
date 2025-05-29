import express from "express";
import {
  getUserCart,
  updateCart,
  addToCart,
  removeFromCart,
  clearCart,
} from "../controllers/cartController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", auth, addToCart);
router.post("/update", auth, updateCart);
router.post("/remove", auth, removeFromCart);
router.post("/clear", auth, clearCart);
router.post("/get", auth, getUserCart);

export default router;

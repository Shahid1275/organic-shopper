import express from "express";
import { addProduct,removeProduct,listProducts,singleProduct, getProductList } from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
const productRouter = express.Router();
import adminAuth from "../middlewares/adminAuth.js";


productRouter.post("/add",adminAuth, upload.fields([{ name: "image1", maxCount: 1 },{ name: "image2", maxCount: 1 },{ name: "image3", maxCount: 1 },{ name: "image4", maxCount: 1 }]), addProduct);
productRouter.get("/admin/list", adminAuth,listProducts);
productRouter.get("/list",getProductList);
productRouter.post("/single", adminAuth,singleProduct);
productRouter.post("/remove", adminAuth, removeProduct);
export default productRouter;
import express from "express";
import productController from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Product
router.post("/", productController.createProduct);

// Get All Products
router.get("/allProducts", productController.getAllProduct);

// Get Specific Product
router.get("/", productController.getProductById);

// Update Product
router.put("/", protect, productController.updateProduct);

// Delete Product
router.delete("/", protect, productController.deleteProduct);

export default router;
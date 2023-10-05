import express from "express";
import productController from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
import cacheMiddleware from "../middleware/cacheMiddleware.js"

const router = express.Router();

// Create Product
router.post("/", productController.createProduct);

// Get All Products
router.get("/allProducts", cacheMiddleware(60), productController.getAllProduct);

// Get Specific Product
router.get("/", cacheMiddleware(60), productController.getProductById);

// Update Product
router.put("/", protect, productController.updateProduct);

// Delete Product
router.delete("/", protect, productController.deleteProduct);

export default router;
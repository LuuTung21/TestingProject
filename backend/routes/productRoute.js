import express from "express";
import productController from "../controllers/productController.js";
import asyncHandler from "express-async-handler"

const router = express.Router();

// Create Product
router.post("/", productController.createProduct);

// Get All Products
router.get("/allProducts", productController.getAllProduct);

// Get Specific Product
router.get("/", productController.getProductById);

// Update Product
router.put("/", productController.updateProduct);

// Delete Product
router.delete("/", productController.deleteProduct);

export default router;
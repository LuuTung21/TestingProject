import express from "express";
import {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// Create Product
router.post("/", createProduct);

// Get All Products
router.get("/allProducts", getAllProduct);

// Get Specific Product
router.get("/", getProductById);

// Update Product
router.put("/", updateProduct);

// Delete Product
router.delete("/", deleteProduct);

export default router;
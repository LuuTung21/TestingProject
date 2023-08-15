import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

// @Desc Create product
// Route POST /api/products
// @access public
router.post("/", productController.createProduct);

// @Desc Get all products
// Route GET /api/products
// @access public
router.get("/", productController.getAllProducts);

// @Desc Get a specific product
// Route GET /api/products/:id
// @access public
router.get("/:id", productController.getProductById);

// @Desc Update a product
// Route PUT /api/products/:id
// @access private
router.put("/:id", productController.updateProduct);

// @Desc Delete a product
// Route DELETE /api/products/:id
// @access private
router.delete("/:id", productController.deleteProductById);

export default router;
import productRepository from "../repositories/productRepository.js";
import asyncHandler from "express-async-handler";

// @Desc Create product
// Route POST /api/products
// @access public
class productController {
    createProduct = asyncHandler(async (req, res) => {
        try {
            const product = await productRepository.createProduct(req.body);
            res.status(201).json(product);
        } catch (err) {
            throw new Error(err.message);
        }
    });

    // @Desc Get all products
    // Route GET /api/products/allProducts
    // @access public
    getAllProduct = asyncHandler(async (req, res) => {
        try {
            const products = await productRepository.getAllProduct();
            res.json(products);
        } catch (err) {
            throw new Error("Unable to fetch products");
        }
    });

    // @Desc Get a specific product
    // Route GET /api/products/:id
    // @access public
    getProductById = asyncHandler(async (req, res) => {
        try {
            const product = await productRepository.getProductById(req.query.id);
            res.status(200).json(product);
        } catch (err) {
            throw new Error(err.message);
        }

    });

    // @Desc Update a product
    // Route PUT /api/products/:id
    // @access private
    updateProduct = asyncHandler(async (req, res) => {
        try {
            const updatedProduct = await productRepository.updatedProduct(req.query.id, req.body);
            if (!updatedProduct) {
                res.status(401).json({ error: "Product not found" });
            };
            res.json(updatedProduct);
        } catch (err) {
            throw new Error(err.message);
        }
    });

    // @Desc Delete a product
    // Route DELETE /api/products/:id
    // @access private
    deleteProduct = asyncHandler(async (req, res) => {
        try {
            const product = await productRepository.deleteProduct(req.query.id);
            if (!product) {
                throw new Error("Product not found")
            };
            res.status(204).json({ message: "Successfully deleted the product" });
        } catch (err) {
            throw new Error(err.message);
        }
    });
}


export default new productController();
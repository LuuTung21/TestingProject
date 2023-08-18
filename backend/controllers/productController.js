import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @Desc Create product
// Route POST /api/products
// @access public
const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: "Unable to create the product" })
    }
})

// @Desc Get all products
// Route GET /api/products/allProducts
// @access public
const getAllProduct = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "unable to fetch products" });
    }
})

// @Desc Get a specific product
// Route GET /api/products/:id
// @access public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.query.id);
    if (product) {
        res.json(product);
    } else {
        res.status(401).json({ error: "Could not find the product" })
    }
})

// @Desc Update a product
// Route PUT /api/products/:id
// @access private
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.query.id, req.body);
        if (!updatedProduct) {
            res.status(401).json({ error: "Product not found" });
        };
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Unable to update the product" });
    }
})

// @Desc Delete a product
// Route DELETE /api/products/:id
// @access private
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.query.id);
        if (!product) {
            res.status(401).json({ error: "Product not found" });
        };
        res.status(204).json({ message: "Successfully deleted the product" });
    } catch (error) {
        res.status(500).json({ error: "Unable to delete the product" });
    }
});


export {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
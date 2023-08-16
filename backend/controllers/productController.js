import asyncHandler from "express-async-handler";
import productRepository from "../repositories/productRepository.js";

class productController {
    async createProduct(req, res) {
        try {
            const product = await productRepository.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).jjson({ error: "Unable to create the product" })
        }
    };
    async getAllProduct(req, res) {
        try {
            const products = await productRepository.getAllProduct();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: "unable to fetch products" });
        }
    };
    async getProductById(req, res) {
        try {
            const product = await productRepository.getProductById(req.params.id);
            if (!product) {
                return res.status(404).json({ error: "Productt not found" });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: "Unable to fetch the product" });
        }
    };
    async updateProduct(req, res) {
        try {
            const updatedProduct = await productRepository.updateProduct(req.params.id, req.body);
            if (!updatedProduct) {
                res.status(401).json({ error: "Product not found" });
            };
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({ error: "Unable to update the product" });
        }
    };
    async deleteProduct(req, res) {
        try {
            const product = await productRepository.deleteProduct(req.params.id);
            if (!product) {
                res.status(401).json({ error: "Product not found" });
            };
            res.status(204).json({ message: "Successfully deleted the product" });
        } catch (error) {
            res.status(500).json({ error: "Unable to delete the product" });
        }
    };
}
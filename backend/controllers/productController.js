import Product from "../models/productModel.js";
import productRepository from "../repositories/productRepository.js";

// @Desc Create product
// Route POST /api/products
// @access public
class productController {
    async createProduct(req, res) {
        try {
            const product = await productRepository.createProduct(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json({ error: err.message ? err.message : "Unable to create the product" })
        }
    };

    // @Desc Get all products
    // Route GET /api/products/allProducts
    // @access public
    async getAllProduct(req, res) {
        try {
            const products = await productRepository.getAllProduct();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: "unable to fetch products" });
        }
    };

    // @Desc Get a specific product
    // Route GET /api/products/:id
    // @access public
    async getProductById(req, res) {
        const product = await Product.getProductById(req.query.id);
        if (product) {
            res.json(product);
        } else {
            res.status(401).json({ error: "Could not find the product" })
        }
    };

    // @Desc Update a product
    // Route PUT /api/products/:id
    // @access private
    async updateProduct(req, res) {
        try {
            const updatedProduct = await Product.updatedProduct(req.query.id, req.body);
            if (!updatedProduct) {
                res.status(401).json({ error: "Product not found" });
            };
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({ error: "Unable to update the product" });
        }
    };

    // @Desc Delete a product
    // Route DELETE /api/products/:id
    // @access private
    async deleteProduct(req, res) {
        try {
            const product = await Product.deleteProduct(req.query.id);
            if (!product) {
                res.status(401).json({ error: "Product not found" });
            };
            res.status(204).json({ message: "Successfully deleted the product" });
        } catch (error) {
            res.status(500).json({ error: "Unable to delete the product" });
        }
    };
}


export default new productController();
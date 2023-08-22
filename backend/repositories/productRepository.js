import Product from "../models/productModel.js";

class ProductRepository {

    async createProduct(data) {
        const { name, description, price } = data;
        if (!name || !description || !price) {
            throw new Error("Invalid Information");
        }
        const existProduct = await Product.findOne({ name: data.name });
        if (existProduct) {
            throw new Error("Product already exists");
        }
        const newProduct = await Product.create({ name, description, price });
        if (!newProduct) {
            throw new Error("Unable to create product");
        } else {
            return newProduct;
        }
    };

    async getAllProduct() {
        return await Product.find({});
    };

    async getProductById(id) {
        if (!id) {
            throw new Error("Invalid Information");
        };
        const foundProduct = await Product.findById(id);
        if (!foundProduct) {
            throw new Error("Product not found")
        } else {
            return foundProduct;
        }
    };

    async updateProduct(id, data) {
        const { name, description, price } = data;
        if (!id || !name || !description || !price) {
            throw new Error("Invalid Information");
        };

        const updateProduct = await Product.findByIdAndUpdate(id, data, { new: true });

        if (!updateProduct) {
            throw new Error("Unable to update the product");
        } else {
            return updateProduct;
        }
    };

    async deleteProduct(id) {
        if (!id) {
            throw new Error("Invalid Information");
        }
        return await Product.findByIdAndDelete(id);
    };
};

export default new ProductRepository();
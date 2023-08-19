import Product from "../models/productModel.js";

class ProductRepository {
    async createProduct(data) {
        const existProduct = Product.findOne({ name: data.name });
        if (existProduct) {
            throw new Error("Product already exists")
        }
        return await Product.create(data);
    };
    async getAllProduct() {
        return await Product.find({});
    };
    async getProductById(id) {
        return await Product.findById(id);
    };
    async updateProduct(id, data) {
        return await Product.findByIdAndUpdate(id, data, { new: true });
    };
    async deleteProduct(id) {
        return await Product.findByIdAndDelete(id);
    };
};

export default new ProductRepository();
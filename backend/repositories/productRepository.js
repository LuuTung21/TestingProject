import Product from "../models/productModel.js";

class ProductRepository {
    async createProduct(data) {
        return await Product.create(data);
    };
    async getAllProduct() {
        return await Product.find({});
    };
    async getProductById(id) {
        return await Product.findById(id);
    };
    async updateProduct(id, data) {
        return await Product.findByIdAndUpdate(id, data);
    };
    async deleteProduct(id) {
        return await Product.findByIdAndDelete(id);
    };
};

export default new ProductRepository();
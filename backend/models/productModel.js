import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
});

const myDB = mongoose.connection.useDb("products")

const Product = myDB.model("Product", productSchema);

export default Product;
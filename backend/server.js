import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoute.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/products", productRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
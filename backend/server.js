import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";

const port = process.env.PORT || 5000;

// connectDB(process.env.PRODUCT_MONGO_URL);
connectDB(process.env.USER_MONGO_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
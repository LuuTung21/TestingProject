import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const port = process.env.PORT || 5000;

// Connect to the first database (PRODUCT_MONGO_URL)
const connectionForProductDB = connectDB(process.env.PRODUCT_MONGO_URL);

// Connect to the second database (USER_MONGO_URL)
const connectionForUserDB = connectDB(process.env.USER_MONGO_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes(connectionForUserDB));

app.use(notFound);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
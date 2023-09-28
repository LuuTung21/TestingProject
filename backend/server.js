import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import rateLimit from "express-rate-limit";

const port = process.env.PORT || 5000;

const dbUrl = process.env.DATABASE_URL;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10
})

connectDB(dbUrl)

const app = express();

app.use(limiter)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        try {
            const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decodedInfo.userId).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    };
});

export { protect };
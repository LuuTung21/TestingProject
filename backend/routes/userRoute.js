import express from "express"
import userController from "../controllers/userController.js";

const router = express.Router();

// Authenticate User
router.post("/auth", userController.authUser);

// Register User
router.post("/", userController.registerUser);

// Logout User
router.post("/logout", userController.logoutUser);

// Get user's profile & Update user's profile
router
    .route("/profile")
    .get(userController.getUserProfile)
    .put(userController.updateUserProfile);

export default router;
import express from "express"
import userController from "../controllers/userController.js";

const router = express.Router();

// Authenticate User
router.post("/auth", userController.authUser);

// Register User
router.post("/", registerUser);

// Logout User
router.post("/logout", logoutUser);

// Get user's profile & Update user's profile
router
    .route("/profile")
    .get(getUserProfile)
    .put(updateUserProfile);

export default router;
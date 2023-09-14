import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

export default function userRoute(connectionForUserDB) {
    // Initialize the user controller with the connection
    const userControllerInstance = new userController(connectionForUserDB);

    // Authenticate User
    router.post("/auth", (req, res) => userControllerInstance.authUser(req, res));

    // Register User
    router.post("/", (req, res) => userControllerInstance.registerUser(req, res));

    // Logout User
    router.post("/logout", (req, res) => userControllerInstance.logoutUser(req, res));

    // Get user's profile & Update user's profile
    router
        .route("/profile")
        .get((req, res) => userControllerInstance.getUserProfile(req, res))
        .put((req, res) => userControllerInstance.updateUserProfile(req, res));

    return router;
}

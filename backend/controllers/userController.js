import User from "../models/userModel.js";
import userRepository from "../repositories/userRepository.js";
import asyncHandler from "express-async-handler";

class userController {

    // @desc Authenticate User
    // POST /api/users/auth
    // access public
    authUser = asyncHandler(async (req, res) => {
        try {
            const user = await userRepository.authUser(res, req.body);
            res.status(201).json(user);
        } catch (err) {
            if (!err.message) {
                err.message = "Unable to log in";
            };
            res.status(500);
            throw new Error("Invalid email or password")
        };
    });

    // @desc Register User
    // POST /api/users
    // access public
    registerUser = asyncHandler(async (req, res) => {
        try {
            const newUser = await userRepository.registerUser(res, req.body);
            res.status(201).json(newUser);
        } catch (err) {
            throw new Error(err.message);
        }
    });

    // @desc Logout User
    // POST /api/users/logout
    // access private
    logoutUser = asyncHandler(async (req, res) => {
        try {
            await userRepository.logoutUser(res);
            res.status(200).json({ message: "User Logged Out" });
        } catch (error) {
            throw new Error("Unable to log out");
        };
    });

    // @desc Get User Profile
    // GET /api/users/profile
    // access private
    getUserProfile = asyncHandler(async (req, res) => {
        try {
            const user = await User.findById(req.query.id);
            res.status(200).json(user)
        } catch (err) {
            throw new Error(err.message)
        }
    })

    // @desc Update User
    // PUT /api/users/profile
    // access private
    updateUserProfile = asyncHandler(async (req, res) => {
        try {
            const updateUser = await userRepository.updateUserProfile(req.query.id, req.body);
            res.status(201).json(updateUser);
        } catch (err) {
            throw new Error(err.message)
        }
    });
};

export default new userController();
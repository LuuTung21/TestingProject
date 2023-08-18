import User from "../models/userModel.js";
import userRepository from "../repositories/userRepository.js";

class userController {
    async authUser(req, res) {
        try {
            const result = userRepository.authUser(req.body);
            return result;
        } catch (error) {
            return res.status(500).json({ error: "Unable to log in" });
        };
    };
    async registerUser(req, res) {
        try {
            const { name, email, password } = req.body;
            const userExit = User.findOne({ email });

            if (userExit) {
                return res.status(400).json({ error: "User already exists" });
            }

            const newUser = await User.create({ name, email, password });

            if (newUser) {
                return res.status(201).json(newUser);
            } else {
                return res.status(401).json({ error: "Invalid information" });
            };
        } catch (error) {
            return res.status(500).json({ error: "Unable to register" })
        }

    };
    async logoutUser(req, res) {
        try {
            res.cookie("jwt", "", {
                httpOnly: true,
                expires: new Date(0)
            });
            return res.status(200).json({ message: "User Logged Out" });
        } catch (error) {
            return res.status(500).json({ error: "Unable to log out" });
        }
    };
    async getUserProfile(req, res) {
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            } else {
                return res.json(user);
            }
        } catch (error) {
            return res.status(500).json({ error: "Unable to find User" })
        }
    }
    async updateUserProfile(id, data) {
        try {
            const { name, email, password } = data
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            } else {
                user.name = name || user.name;
                user.email = email || user.email;

                if (password) {
                    user.password = password;
                };

                return res.json(user);
            }
        } catch (error) {
            return res.status(500).json({ error: "Unable to update user" })
        }
    };
};
import User from "../models/userModel.js";
import userRepository from "../repositories/userRepository.js";

class userController {

    // @desc Authenticate User
    // POST /api/users/auth
    // access public
    async authUser(req, res) {
        try {
            const user = await userRepository.authUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        };
    };

    // @desc Register User
    // POST /api/users
    // access public
    async registerUser(req, res) {
        try {
            const newUser = await userRepository.registerUser(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    };

    // @desc Logout User
    // POST /api/users/logout
    // access private
    async logoutUser(req, res) {
        try {
            await userRepository.logoutUser(res);
            res.status(200).json({ message: "User Logged Out" });
        } catch (error) {
            res.status(500).json({ error: "Unable to log out" });
        }
    };

    // @desc Get User Profile
    // GET /api/users/profile
    // access private
    async getUserProfile(req, res) {
        try {
            const user = await User.findById(req.query.id);
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    // @desc Update User
    // PUT /api/users/profile
    // access private
    async updateUserProfile(req, res) {
        try {
            const updateUser = await userRepository.updateUserProfile(req.query.id, req.body);
            res.status(201).json(updateUser);
        } catch (err) {
            res.status(500).json({ error: err.meesage })
        }
    };
};

export default new userController();
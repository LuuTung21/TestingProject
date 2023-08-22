import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

class userRepository {

    async authUser(res, data) {
        const { email, password } = data;
        const user = await User.findOne({ email });
        if (user && await user.matchPassword(password)) {
            generateToken(res, user._id);
            return user;
        } else {
            throw new Error();
        };
    };

    async registerUser(res, data) {
        const { name, email, password } = data;

        if (!name || !email || !password) {
            throw new Error("Invalid information");
        };

        const userExit = await User.findOne({ email });

        if (userExit) {
            throw new Error("User already exists")
        };

        const newUser = await User.create({ name, email, password });

        if (newUser) {
            generateToken(res, newUser._id);
            return newUser;
        } else {
            throw new Error("Unable to register")
        };
    };

    async logoutUser(res) {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        });
    };

    async getUserProfile(id) {

        if (!id) {
            throw new Error("Invalid Information");
        };

        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found");
        } else {
            return user;
        };
    };

    async updateUserProfile(id, data) {
        const { name, email, password } = data;

        if (!id || !name || !email || !password) {
            throw new Error("Invalid Information");
        };

        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found");
        }

        const updateUser = User.findByIdAndUpdate(id, { name, email, password });
        if (!updateUser) {
            throw new Error("Unable to update user");
        } else {
            return updateUser;
        }
    };
};

export default new userRepository();
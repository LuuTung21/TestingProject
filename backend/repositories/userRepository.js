import User from "../models/userModel.js";

class userRepository {

    async authUser(data) {
        const { email, password } = data;
        const user = await User.findOne({ email });
        if (user && await user.matchPassword(password)) {
            return user;
        } else {
            throw new Error("Invalid email or password");
        };
    };

    async registerUser(data) {
        const { name, email, password } = data;
        const userExit = await User.findOne({ email });

        if (userExit) {
            throw new Error("User already exists")
        }

        const newUser = await User.create({ name, email, password });

        if (newUser) {
            return newUser;
        } else {
            throw new Error("Invalid information")
        };
    };

    async logoutUser(res) {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        });
    };

    async getUserProfile(id) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found")
        } else {
            return user
        }
    }

    async updateUserProfile(id, data) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found");
        } else {
            const updateUser = User.findByIdAndUpdate(id, data)
            return updateUser;
        }
    };
};

export default new userRepository();
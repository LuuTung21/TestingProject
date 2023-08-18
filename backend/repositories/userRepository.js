import User from "../models/userModel.js";

class userRepository {

    async authUser(data) {
        const { email, password } = data;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" })
        } else {
            return res.status(201).json(user);
        };
    };

    async registerUser(data) {
        const { name, email, password } = data;
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
    };

    async logoutUser(res) {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        return res.status(200).json({ message: "User Logged Out" });
    };

    async getUserProfile(id) {

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        } else {
            return res.json(user);
        }
    }

    async updateUserProfile(id, data) {
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
    };
};

export default new userRepository;
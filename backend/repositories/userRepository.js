import User from "../models/userModel.js";

class userRepository {
    async createUser(data) {
        return await User.create(data);
    };
    async getUserById(id) {
        return await User.findById(id);
    };
    async updateUser(id, data) {
        return await User.findByIdAndUpdate(id, data);
    };
    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    };
};

export default new userRepository;
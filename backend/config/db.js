import mongoose from "mongoose";

const connectDB = async (dbURL) => {
    try {
        const connect = mongoose.createConnection(dbURL);
        console.log(`MongoDB Connected ${connect.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;
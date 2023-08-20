import mongoose from "mongoose";

const connectDB = async (dbURL) => {
    try {
        const connect = await mongoose.connect(dbURL);
        console.log(`MongoDB Connected ${connect.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;
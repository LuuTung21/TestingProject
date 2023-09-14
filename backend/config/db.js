import mongoose from "mongoose";

const connectDB = async (dbURL) => {
    try {
        const connect = await mongoose.createConnection(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected ${connect.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;

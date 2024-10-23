import mongoose from "mongoose";

const connectDB =async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected: ${connection.connection.host}`)
    } catch (error) {
        console.error(`Eror: ${error}`)
    }
};

export default connectDB;
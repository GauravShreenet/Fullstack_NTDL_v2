import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        //const dbUrl = "mongodb://127.0.0.1:27017/ntdl_dbv2"

        const con = await mongoose.connect(process.env.MONGO_URL);
        con.connections && console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}
import mongoose from "mongoose"

export async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://royhrituraj325_db_user:12345@cluster0.b83whfl.mongodb.net/mvc_db?appName=Cluster0');
        // No need for redundant log here, index.js handles it.
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}

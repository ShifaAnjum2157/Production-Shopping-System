import mongoose from 'mongoose';
import dotenv from 'dotenv'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to momngo db ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in mongo db ${error}`)
    }
}
export default connectDB;
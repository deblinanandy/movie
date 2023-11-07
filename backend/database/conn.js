import mongoose from "mongoose";


const Database = async () => {
    try {
        await mongoose.connect('mongodb+srv://test:test@cluster0.bqb3hr6.mongodb.net/testing', {
           
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default Database;

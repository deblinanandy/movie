import Usermodel from "../model/Usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Import jwt module
import ENV from '../config.js';

const logingController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Usermodel.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false, // Change to false since it's an error
                message: 'User not found'
            });
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(200).send({
                success: false,
                message: 'Invalid password'
            });
        }
        // Generate a JWT token
        const token = jwt.sign({
            userId: user._id, 
            username: user.username
        }, ENV.JWT_SECRET, { expiresIn: "24h" });
        
        res.status(200).send({
            success: true,
            message: 'User login successful', 
            username: user.username,
            token
        });
    } catch (error) {
        return res.status(400).send({
            message: "Error: " + error.message
        });
    }
};

export default logingController;

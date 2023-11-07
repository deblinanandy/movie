import Usermodel from "../model/Usermodel.js";
import ENV from '../config.js';

const verifyUser = async (req, res, next) => {
    try {
        const { name } = req.method === "GET" ? req.query : req.body; // Fixed the comparison operator and removed unnecessary imports

        // Check if user already exists
        const existingUser = await Usermodel.findOne({ name });
        if (!existingUser) {
            return res.status(404).send({ // Changed status to 404 for "Not Found"
                success: false, // Changed to false since the user is not found
                message: 'User not found'
            });
        }

        // If the user exists, you can do any additional processing here if needed.

        // Call the next middleware or route handler
        next();
    } catch (error) {
        return res.status(400).send({
            success: false, // Changed to false since there was an error
            message: "Error: " + error.message
        });
    }
};

export default verifyUser;

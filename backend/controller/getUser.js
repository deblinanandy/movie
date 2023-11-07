import Usermodel from "../model/Usermodel.js";
import jwt from 'jsonwebtoken'; // Import jwt module
import ENV from '../config.js';

const getUser = async (req, res) => {
    try {
        const { name } = req.params;
        if (!name) return res.status(400).send({ error: 'Invalid username' });
        
        const user = await Usermodel.findOne({ name }); // Use await to retrieve the user
        
        if (!user) return res.status(404).send({ error: 'User not found' });

        // Remove the password field from the user object
        const { password, ...rest } = Object.assign({}, user.toJSON());

        return res.status(200).send(rest);
    } catch (error) {
        return res.status(400).send({
            message: "Error: " + error.message
        });
    }
};

export default getUser;

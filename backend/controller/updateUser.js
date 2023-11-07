import Usermodel from "../model/Usermodel.js";

const updateUser = async (req, res) => {
    try {
        const {userId}= req.user; // Use req.params to get the user ID from route parameters.
        if (id) {
            const body = req.body;
            const result = await Usermodel.updateOne({ _id: userId}, body); // Use await to handle the asynchronous update operation.
            if (result) {
                return res.status(200).send({
                    success: true,
                    message: 'User updated successfully'
                });
            } else {
                return res.status(404).send({
                    success: false,
                    message: 'User not found'
                });
            }
        } else {
            return res.status(400).send({
                success: false,
                message: 'Invalid user ID'
            });
        }
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: "Error: " + error.message
        });
    }
};

export default updateUser;

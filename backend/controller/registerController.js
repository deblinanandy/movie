import Usermodel from '../model/Usermodel.js';
import bcrypt from 'bcrypt';

const registerController = async (req, res) => { // Added (req, res) parameters

  try {
    const { name, password, email } = req.body;
    const existingUser = await Usermodel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'Email is already existing'
      });
    }

    const salt =  bcrypt.genSaltSync(10); // Use await here
    const hashPassword =  bcrypt.hashSync(password, salt); // Use await here

    const userData = {
      name: name,
      password: hashPassword,
      email: email,
    };

    console.log(userData);
    
    await Usermodel.create(userData);

    return res.status(200).send({
      success: true,
      message: 'User account created successfully' // Corrected the typo
    });
  } catch (error) {
    return res.status(400).send({
      message: "Error: " + error.message // Added the actual error message
    });
  }
}

export default registerController;

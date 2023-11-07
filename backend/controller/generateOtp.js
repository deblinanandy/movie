import otpGenerator from 'otp-generator';
import Usermodel from "../model/Usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Import jwt module
import ENV from '../config.js';
const generateOtp= async (req, res, next) => {
    try {
        req.app.locals.OTP = await otpGenerator.generate(6)
        res.status(201).send({code:req.app.locals.OTP})
    }
    catch (error) {
        return res.status(400).send({
            message: "Error: " + error.message
        });
    }
}
export default generateOtp;
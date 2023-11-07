import jwt from 'jsonwebtoken';
import ENV from '../config.js'
export default function Auth(req, res, next) {
    try {
        const token = req.headers.authorization.split("")[1];
      const decodedToken=   jwt.verify(token, ENV.JWT_SECRET);
        req.user = decodedToken;
        
      next()
    } catch (error) {
        // Handle any errors that occur during processing.
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
export function localVariales(req, res, next) { 
    req.app, locals = {
        OTP: null,
        restSession: false
    }
    next();
}
import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Plase enter your name "],
        unique: [true, "Username already exists"]
    },
    password: {
        type: String,
        require: [true, "Plase enter your password"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "Plase enter your email"],
        unique: true,
    },
   
       bookings: [{ type: mongoose.Types.ObjectId,ref: "Bookings" }], 
},
{ timestamps: true },

{versionKey:false}
);

export default  mongoose.model("user", UserSchema);
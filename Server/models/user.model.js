import mongoose, { mongo } from "mongoose";
import { genderENUM, fitnessgoalENUM } from "./customDataType.js"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        trim: true
    },
    mobile_number: {
        type: String,
        trim: true
    },
    email: {
        type: String,
    },
    role: {
        type: String,
        default: "User"
    },
    age: {
        type: Number
    },
    password: {
        type: String
    },
    gender: {
        type: String,
        enum: genderENUM
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    fitnessgoal: {
        type: String,
        enum: fitnessgoalENUM
    }
})


const User = mongoose.model("User", userSchema);

export default User;
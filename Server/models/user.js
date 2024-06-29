import mongoose, { mongo } from "mongoose";
import { genderENUM } from "./customDataType.js"

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
    age: {
        type: Number
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
    }
})


const User = mongoose.model("User", userSchema);

export default User;
import { User } from "../../models/index.js";
import ApiResponse from "../../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    const apiResponse = new ApiResponse(res);

    try {
        const { name, dob, mobile_number, email, age, gender, weight, height, fitnessgoal, password } = req.body;

        if (!name || !dob || !age || !gender || !weight || !height || !password) {
            return apiResponse.error("Validation Failed!", 403);
        }

        const UserInstance = await User.findOne({ email: email });

        if (UserInstance) {
            return apiResponse.error("User already exists!", 400);
        }

        const payload = {
            name: name,
            email: email,
            mobile_number: mobile_number
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET);

        const cookie = {
            name: "user_token",
            value: token
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            dob,
            mobile_number,
            email,
            age,
            password: encryptedPassword,
            gender,
            weight,
            height,
            fitnessgoal
        });

        return apiResponse.successWithToken("User signup successfully!", true, 200, token, [cookie]);
    } catch (error) {
        console.log(error);
        return apiResponse.error("An error occurred during signup.", 500);
    }
};

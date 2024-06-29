import { User } from "../../models/index.js"
import ApiResponse from "../../utils/apiResponse.js";

export const signup = async (req, res) => {

    try {

        const { name, dob, mobile_number, email, age, gender, weight, height } = req.body;

        if (!name || !dob || !age || !gender || !weight || !height) {
            return res.status(403).json({
                success: false,
                message: "Validation Failed!"
            })
        }

        const UserInstance = await User.findOne({ email: email });

        if (!UserInstance) {
            return ApiResponse.success("User already exist!", 400);
        }

        await User.create({
            name,
            dob,
            mobile_number,
            email,
            age,
            gender,
            weight,
            height
        })

        return ApiResponse.success("User Signup Successfully!", true, 200);


    } catch (error) {
        console.log(error);
    }


}   
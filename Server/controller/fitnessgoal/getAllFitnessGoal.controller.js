import { FitnessGoal } from "../../models/index.js";
import ApiResponse from "../../utils/apiResponse.js";

export const GetAllFitnessGoal = async (req, res) => {

    const apiResponse = new ApiResponse(res);

    try {

        const Data = await FitnessGoal.find();

        return apiResponse.success(`Fitness goal data fetched successfully!`, true, 200, Data);


    } catch (error) {
        console.log(error.stack);
        return apiResponse.error("Internal Server Error", 500);
    }

}
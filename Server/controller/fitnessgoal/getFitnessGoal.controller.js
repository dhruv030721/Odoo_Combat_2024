import { FitnessGoal } from "../../models/index.js";
import ApiResponse from "../../utils/apiResponse.js";

export const GetFitnessGoal = async (req, res) => {

    const apiResponse = new ApiResponse(res);

    try {

        const { fitness_goal } = req.params;

        console.log(fitness_goal);

        const Data = await FitnessGoal.findOne({ fitness_goal: fitness_goal });

        return apiResponse.success(`Fitness goal data fetched successfully!`, true, 200, Data);


    } catch (error) {
        console.log(error.stack);
        return apiResponse.error("Internal Server Error", 500);
    }


}
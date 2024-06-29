import { FitnessGoal } from "../../models/index.js";
import ApiResponse from "../../utils/apiResponse.js";

export const AddFitnessGoal = async (req, res) => {

    const apiResponse = new ApiResponse(res);

    try {

        const { name, category, resources } = req.body;


        if (!name || !category || !resources) {
            return apiResponse.error("Validation Failed", 403);
        }


        const fitnessGoal = await FitnessGoal.findOne({ category: category });

        if (fitnessGoal) {
            return apiResponse.error(`${category} already exist in ${name}`, 407);
        }

        await FitnessGoal.create({
            fitness_goal: name,
            category: category,
            resources: resources
        })

        return apiResponse.success(`${category} added successfully!`, true, 200);


    } catch (error) {
        console.log(error.stack);
        return apiResponse.error("Internal Server Error", 500);
    }


}
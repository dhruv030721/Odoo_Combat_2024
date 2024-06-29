import { Workout } from "../../models/index.js";
import ApiResponse from "../../utils/apiResponse.js";

export const AddWorkout = async (req, res) => {

    const apiResponse = new ApiResponse(res);

    try {

        const { category, workout } = req.body;

        const workoutinstance = await Workout.findOne({ category: category });

        if (workoutinstance) {
            return apiResponse.error(`Workout already added!`, 407);
        }

        await Workout.create({ category: category, workout: workout });

        return apiResponse.success(`Workout added successfully!`, true, 200);


    } catch (error) {
        console.log(error.stack);
        return apiResponse.error("Internal Server Error", 500);
    }


}
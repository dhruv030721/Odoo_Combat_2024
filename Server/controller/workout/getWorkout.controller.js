import { Workout } from "../../models/index.js";
import ApiResponse from "../../utils/apiResponse.js";

export const GetWorkout = async (req, res) => {

    const apiResponse = new ApiResponse(res);

    try {

        const { category } = req.params;

        console.log(category);

        const workoutinstance = await Workout.findOne({ category: category });

        console.log(workoutinstance)

        return apiResponse.success(`Workout added successfully!`, true, 200, workoutinstance);


    } catch (error) {
        console.log(error.stack);
        return apiResponse.error("Internal Server Error", 500);
    }


}
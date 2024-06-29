import { apiConnector } from "../apiConnector";
import { WorkoutAPI } from "../apis.js";

class Workout {
    async get_workout(category) {

        const response = await apiConnector("GET", WorkoutAPI.GET_WORKOUT + category);

        return response;

    }
}


const workout = new Workout();

export default workout;
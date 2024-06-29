import { apiConnector } from "../apiConnector";
import { Fitness } from "../apis.js"


class FitnessGoal {

    async get_fitness(fitness_goal) {
        const response = await apiConnector("GET", Fitness.GET_FITNESS + fitness_goal);
        return response;
    }


}

const fitnessGoal = new FitnessGoal();

export default fitnessGoal;
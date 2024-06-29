import { apiConnector } from "../apiConnector";
import { Fitness } from "../apis.js"


class FitnessGoal {

    async get_fitness(fitness_goal) {
        const response = await apiConnector("GET", Fitness.GET_FITNESS + fitness_goal);
        return response;
    }

    async get_all_fitness() {
        const response = await apiConnector("GET", Fitness.GET_ALL_FITNESS);

        return response;
    }
}

const fitnessGoal = new FitnessGoal();

export default fitnessGoal;
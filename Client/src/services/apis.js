const BASE_URL = "https://level-up-your-fitness.onrender.com/api/v1";

export const Auth = {
    LOGIN_API: BASE_URL + '/login',
    REGISTER_API: BASE_URL + '/signup'
}

export const Fitness = {
    GET_FITNESS: BASE_URL + '/fitnessgoal/get_fitness/',
    GET_ALL_FITNESS: BASE_URL + "/fitnessgoal/get_all_fitness"
}


export const WorkoutAPI  = {
    GET_WORKOUT : BASE_URL + '/workout/get_workout/'
}

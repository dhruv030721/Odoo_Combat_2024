import express from "express";
import { login, signup } from "../controller/authentication/index.js";
import { AddFitnessGoal, GetFitnessGoal, GetAllFitnessGoal } from "../controller/fitnessgoal/index.js";
import { AddWorkout, GetWorkout } from "../controller/workout/index.js"

const fitnessRouter = express.Router();

fitnessRouter.post('/login', login);
fitnessRouter.post('/signup', signup);


// Fitness Routes
fitnessRouter.post('/fitnessgoal/add_fitnessgoal', AddFitnessGoal);
fitnessRouter.get('/fitnessgoal/get_fitness/:fitness_goal', GetFitnessGoal)
fitnessRouter.get('/fitnessgoal/get_all_fitness', GetAllFitnessGoal)



// Workout Routes
fitnessRouter.post('/workout/add_workout', AddWorkout);
fitnessRouter.get('/workout/get_workout/:category', GetWorkout);


export default fitnessRouter;
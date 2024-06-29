import express from "express";
import { login, signup } from "../controller/authentication/index.js";
import { AddFitnessGoal, GetFitnessGoal } from "../controller/fitnessgoal/index.js";

const fitnessRouter = express.Router();

fitnessRouter.post('/login', login);
fitnessRouter.post('/signup', signup);


// Fitness Routes
fitnessRouter.post('/fitnessgoal/add_fitnessgoal', AddFitnessGoal);
fitnessRouter.get('/fitnessgoal/get_fitness/:fitness_goal', GetFitnessGoal)



export default fitnessRouter;
import express from "express";
import { login, signup } from "../controller/authentication/index.js"

const fitnessRouter = express.Router();

fitnessRouter.post('/login', login);
fitnessRouter.post('/signup', signup);




export default fitnessRouter;
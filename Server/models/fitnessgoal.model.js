import mongoose from 'mongoose';
import { fitnessgoalENUM } from "./customDataType.js"

const fitnessgoalSchema = mongoose.Schema({
    fitness_goal: {
        type: String,
        enum: fitnessgoalENUM
    },
    category: {
        type: String
    },
    image: {
        type: String,
    },
    descriptin: {
        type: String
    },
    resources: [
        {
            type: String
        }
    ]
})


const FitnessGoal = mongoose.model("FitnessGoal", fitnessgoalSchema);

export default FitnessGoal;
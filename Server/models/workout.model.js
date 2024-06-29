import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
    category: {
        type: String,
    },
    workout: [
        {
            exercise: [
                {
                    name: {
                        type: String
                    },
                    image: {
                        type: String
                    }
                }
            ],
            body_part: {
                type: String,
                default: null
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
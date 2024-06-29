import { useParams } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import Loading from "../Component/loading.jsx";
import workout from "../../services/operations/workout.js";
import { set_workout } from "../../slices/fitness.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { MdFitnessCenter } from "react-icons/md";

const FitnessGoalDetails = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const workoutData = useSelector((state) => state.fitness.workout);
    const fitnessGoalData = useSelector((state) => state.fitness.allFitnessGoalData);
    const filteredFitnessData = fitnessGoalData.filter(data => data.category === category);
    const id = useId();

    useEffect(() => {
        const fetchWorkoutData = async () => {
            try {
                console.log(category)
                const response = await workout.get_workout(category);
                dispatch(set_workout(response.data.data));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching workout data:", error);
                setLoading(false);
            }
        };

        fetchWorkoutData();
    }, [category, dispatch]);

    if (loading) {
        return <Loading message={"Loading..."} />;
    }

    return (
        <div className="px-10">
            <div className="text-orange-800 flex gap-x-5 items-center text-2xl">
                <MdFitnessCenter />
                <h1 className="font-bold">{filteredFitnessData[0].category}</h1>
            </div>
            <div className="w-full flex gap-x-10 mt-5">
                <img src={filteredFitnessData[0].image} className="w-1/2 h-full border border-orange-900 p-1" alt="" />
                <p>{filteredFitnessData[0].description}</p>
            </div>
            {workoutData && workoutData.workout && workoutData.workout.length > 0 && (
                <>
                    <h1 className="text-orange-900 font-bold mt-5 text-xl">Workout Plan :</h1>
                    <div className="flex flex-col gap-y-5">
                        {workoutData.workout.map((data, index) => (
                            <div key={index} className="mt-5">
                                <h2 className="text-2xl font-semibold text-orange-900 mb-5">{data.body_part} :</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                    {data.exercise.map((work) => (
                                        <div key={id} className="border border-gray-300 p-3 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-2">{work.name}</h3>
                                            <div className="w-full h-48 sm:h-56 md:h-72 overflow-hidden rounded-lg">
                                                <img src={work.image} alt={work.name} className="object-cover w-full h-full" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default FitnessGoalDetails;

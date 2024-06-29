import { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fitnessGoal from "../../services/operations/fitness.js";
import { set_allfitnessData } from "../../slices/fitness.slice.js";
import Loading from "../Component/loading.jsx";
import { FaArrowRight } from "react-icons/fa";

const FitnessCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allfitnessgoalData = useSelector((state) => state.fitness.allFitnessGoalData);
    const id = useId();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fitnessGoal.get_all_fitness();
            dispatch(set_allfitnessData(response.data.data));
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })();
    }, [dispatch]);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + "...";
    };

    const handleExploreClick = (id) => {
        navigate(`/fitness-goal/${id}`);
    };

    if (loading) {
        return <Loading message={"Loading..."} />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                allfitnessgoalData.map(data => (
                    <div key={`${id}-${data.id}`} className="border border-orange-800 p-1 shadow-md">
                        <img src={data.image} className="w-full h-72 object-cover" alt={data.category} />
                        <div className="mt-5 p-3 text-sm">
                            <h1 className="text-orange-900 font-bold  mb-2">Category: {data.category}</h1>
                            <p className="text-orange-900 font-bold ">Description:</p>
                            <p>{truncateText(data.description, 250)}</p>
                            <button 
                                className="px-6 mt-5 py-3 border border-orange-900 text-orange-900 font-bold"
                                onClick={() => handleExploreClick(data.category)}
                            >
                                <div className="flex items-center gap-x-3">
                                    <h1>Explore</h1>
                                    <FaArrowRight />
                                </div>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default FitnessCategory;

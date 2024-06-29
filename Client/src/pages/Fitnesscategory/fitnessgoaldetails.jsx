import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fitnessGoal from "../../services/operations/fitness.js";
import Loading from "../Component/loading.jsx";

const FitnessGoalDetails = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);

    

    if (loading) {
        return <Loading message={"Loading..."} />;
    }

    return (
        <div className="p-6">
            {goalDetails && (
                <div>
                    <h1 className="text-3xl font-bold text-orange-900 mb-4">{goalDetails.category}</h1>
                    <img src={goalDetails.image} className="w-full h-72 object-cover mb-4" alt={goalDetails.category} />
                    <p className="text-lg">{goalDetails.description}</p>
                </div>
            )}
        </div>
    );
}

export default FitnessGoalDetails;

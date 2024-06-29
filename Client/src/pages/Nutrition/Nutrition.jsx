
import WeeklyMealPlanTable from "./MealTable"; // Adjust path as necessary
import mealPlanData from "./mealPlan.json"; // Replace with your JSON data path
import { MdFoodBank } from "react-icons/md";


const App = () => {
    return (
        <div className="px-10 text-orange-900" >
            <div className="flex items-center mb-5">
                <MdFoodBank size={60} />
                <h1 className="text-2xl font-bold">Weekly meal plan for weight gain</h1>
            </div>
            <WeeklyMealPlanTable mealPlan={mealPlanData} />
        </div>
    );
};

export default App;

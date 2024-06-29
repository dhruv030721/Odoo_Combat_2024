
const WeeklyMealPlanTable = ({ mealPlan }) => {
    const renderMealTable = (mealCategory) => (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Day
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {mealCategory}
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {Object.keys(mealPlan).map((day) => (
                        <tr key={day}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {day}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {mealPlan[day][mealCategory]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="text-xl text-gray-800 font-bold flex flex-col gap-y-5">
            <h2>Breakfast : </h2>
            {renderMealTable("Breakfast")}
            <h2>Mid-Meal : </h2>
            {renderMealTable("Mid-Meal")}
            <h2>Lunch : </h2>
            {renderMealTable("Lunch")}
            <h2>Evening : </h2>
            {renderMealTable("Evening")}
            <h2>Dinner : </h2>
            {renderMealTable("Dinner")}
        </div>
    );
};

export default WeeklyMealPlanTable;

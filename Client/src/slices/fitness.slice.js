import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    status: false,
    fitnessGoalData: null,
    allFitnessGoalData: null
}


const fitnessSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        set_fitnessData: (state, action) => {
            state.status = true;
            state.fitnessGoalData = action.payload;
        },
        set_allfitnessData: (state, action) => {
            state.status = true;
            state.allFitnessGoalData = action.payload;
        },
    }
})


export const { set_fitnessData, set_allfitnessData } = fitnessSlice.actions;


export default fitnessSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    status: false,
    fitnessGoalData: null,
}


const fitnessSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        set_fitnessData: (state, action) => {
            state.status = true;
            state.fitnessGoalData = action.payload;
            console.log(state.fitnessGoalData);
        },
    }
})


export const { set_fitnessData } = fitnessSlice.actions;


export default fitnessSlice.reducer;
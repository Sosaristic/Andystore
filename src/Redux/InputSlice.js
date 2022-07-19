import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "input",
    initialState: {
    inputData: {}
    },
    reducers: {
        addInputData(state, action){
return {
    inputData: {...state.inputData, ...action.payload}
}
        }
    }
})
export const inputActions = inputSlice.actions
export default inputSlice;
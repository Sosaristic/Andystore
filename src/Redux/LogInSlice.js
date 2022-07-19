import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
  },
  reducers: {
    addUser(state, action) {
      return {
        token: action.payload,
      };
    },
    logout(state, action){
      return{
        token: null
      }
    }
  },
});
export const loginActions = loginSlice.actions;
export default loginSlice;

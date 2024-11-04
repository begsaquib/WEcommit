import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import teamReducer from "./teamSlice"; // Import the new team slice

const store = configureStore({
  reducer: {
    app: appReducer,
    team: teamReducer, // Add the team reducer here
  },
});

export default store;
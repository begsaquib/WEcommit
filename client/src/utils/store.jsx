import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import teamReducer from "./teamSlice"; 

const store = configureStore({
  reducer: {
    app: appReducer,
    team: teamReducer, 
  },
});

export default store;
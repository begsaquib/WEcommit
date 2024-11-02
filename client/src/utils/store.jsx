import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";

const store = configureStore({
reducer:{
    app:AppSlice,
}
})
export default store
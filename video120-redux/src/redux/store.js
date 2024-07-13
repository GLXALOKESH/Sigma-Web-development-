import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./count/countSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
    reducer:{
        basket:basketSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch : () => typeof store.dispatch = useDispatch

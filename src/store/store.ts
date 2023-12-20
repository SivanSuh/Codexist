import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import basketSlice from "./slices/basketSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"root",
    storage
}

const rootReducer = combineReducers({
    basket:basketSlice
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch : () => typeof store.dispatch = useDispatch

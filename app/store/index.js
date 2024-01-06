'use client'
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import globalSlice from "@/app/redux/globalSlice";


const rootReducer = combineReducers({
	[globalSlice.name]: globalSlice.reducer,
	//add all your reducers here
},);

export const store = configureStore({
	reducer: rootReducer,
});
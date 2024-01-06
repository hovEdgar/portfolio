'use client'
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	loader: 0
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setLoader: (state, { payload }) => {
			state.loader = Math.min(100, Math.max(0, state.loader + payload));
		}
	}
});

export const selectGlobalState = state => state.global;

export const { setLoader } = globalSlice.actions;

export default globalSlice;




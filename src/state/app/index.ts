import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'types/App/state.model';
import { initialAppState } from './initialState';

const initialState: AppState = initialAppState;

export const AppSlice = createSlice({
	name: 'App',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => { },
});

export default AppSlice.reducer;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import appReducer from './app';
import { State } from 'types/state';

declare module 'react-redux' {
	export interface DefaultRootState extends State { }
}

const store = configureStore({
	reducer: {
		app: appReducer,
	},

	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

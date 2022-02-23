import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import animeSlice from 'slices/anime';

// const combinedReducers = combineReducers({
// 	animeSlice,
// });

export const store = configureStore({
	reducer: {
		anime: animeSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type AppDispatch = typeof store.dispatch;
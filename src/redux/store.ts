import { configureStore } from '@reduxjs/toolkit';
import dayReducer from './slices/daySlice';
import timeReducer from './slices/timeSlice';

export const store =  configureStore({
  reducer: {
      day: dayReducer,
      time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
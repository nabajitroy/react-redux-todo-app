import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../todo/todoReducer'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

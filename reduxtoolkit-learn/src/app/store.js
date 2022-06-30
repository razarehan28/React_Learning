import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/CounterSlice'
import ThemeReducer from "../features/theme/ThemeSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Theme:ThemeReducer,
  },
});

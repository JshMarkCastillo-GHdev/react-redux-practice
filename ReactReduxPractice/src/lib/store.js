import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// This is the store
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;


import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../store/categoriesSlice"; // ייבוא ה-Slice של קטגוריות
import recipesReducer from "../store/recipesSlice"; // ייבוא ה-Slice של מתכונים
import userReducer from "./userSlice"; // ייבוא ה-Slice של משתמשים

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipesReducer,
    user: userReducer, // הוספת ה-Slice של המשתמשים
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
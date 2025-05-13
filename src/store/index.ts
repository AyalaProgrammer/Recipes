// // import { createStore, applyMiddleware } from 'redux';
// // import reducer from './reducer';

// // import {thunk} from 'redux-thunk'


// // const store = createStore(reducer, applyMiddleware(thunk));

// // export default store;

// // src/store/index.ts או src/app/store.ts
// import { configureStore, type UnknownAction } from "@reduxjs/toolkit";
// // import userReducer from "../slices/userSlice";
// // import categoriesReducer from "../slices/categoriesSlice";
// // ועוד רדוסר אם יש

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     categories: categoriesReducer,
//     // ...
//   },
// });

// // 👇 טיפוסים
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// function userReducer(_state: unknown, _action: UnknownAction): unknown {
//   throw new Error("Function not implemented.");
// }

// function categoriesReducer(_state: unknown, _action: UnknownAction): unknown {
//   throw new Error("Function not implemented.");
// }

// //עוד גירסה
// import { configureStore, type UnknownAction } from "@reduxjs/toolkit";
// // import userReducer from "./userReducer";
// // import categoriesReducer from "./categoriesReducer";
// import shoppingReducer from "./shoppingReducer"; // ייבוא ה-Reducer החדש

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     categories: categoriesReducer,
//     toShopping: shoppingReducer, // חיבור ה-Reducer ל-Redux Store
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// function userReducer(_state: unknown, _action: UnknownAction): unknown {
//   throw new Error("Function not implemented.");
// }


// function categoriesReducer(_state: unknown, _action: UnknownAction): unknown {
//   throw new Error("Function not implemented.");
// }
//גירסת מוצש

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userReducer";
// import categoriesReducer from "./categoriesReducer";
// import shoppingReducer from "./shoppingReducer";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     categories: categoriesReducer,
//     toShopping: shoppingReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

//עוד
// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import categoriesReducer from "./categoriesReducer";
// import shoppingReducer from "./shoppingReducer";

// export const store = configureStore({
//   reducer: {
//     user: reducer,
//     categories: categoriesReducer,
//     toShopping: shoppingReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

//עוד גירסה
// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer"; // ← שימוש ב-reducer הראשי
// import shoppingReducer from "./shoppingReducer"; // ייבוא ה-reducer של רשימת הקניות

// export const store = configureStore({
//   reducer: {
//     main: reducer, // ← ה-reducer הראשי
//     toShopping: shoppingReducer, // ← ה-reducer של רשימת הקניות
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// // עוד גירסה
// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer"; // ← שימוש ב-reducer הראשי
// import shoppingReducer from "./shoppingReducer"; // ייבוא ה-reducer של רשימת הקניות

// export const store = configureStore({
//   reducer: {
//     main: reducer, // ← ה-reducer הראשי
//     toShopping: shoppingReducer, // ← ה-reducer של רשימת הקניות
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// // גירסה נוספת
// import { configureStore } from "@reduxjs/toolkit";
// import categoriesReducer from "../store/categoriesSlice"; // ייבוא ה-Slice של קטגוריות
// import recipesReducer from "../store/recipesSlice"; // ייבוא ה-Slice של מתכונים

// export const store = configureStore({
//   reducer: {
//     categories: categoriesReducer,
//     recipes: recipesReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// // גירסה נוספת
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
// import './App.css'

// import { Route, Routes, useNavigate } from "react-router-dom"
// import { useEffect } from 'react';
// import HomePage from './components/homePage'
// import Header from './components/header'
// import Sighin from './components/user/sighin'
// import DisplayRecipes from './components/recipes/displayRecipes'
// import AddRecipes from "./components/recipes/addRepice"
// // import Login from './components/user/login'
// // import Caterories from './components/caterory/caterories';
// import { useDispatch, useSelector } from 'react-redux';
// import MyRecipes from './components/recipes/myRecipes';
// import RecipeDetailes from './components/recipes/recipeDetailes';
// // import DisplayList from './components/shopping-list.js/displayList';
// // import { setRecipes } from './server/recipeServer/setRecipes';
// // import { setCategories } from './server/categoryServer/setCategories';
// import type { RootState } from './store'
// // import { setRecipes } from './server/recipeServer/setRecipes'
// import Login from './components/user/login'
// import Caterories from './components/caterory/caterories'
// import DisplayList from './components/shopping-list.js/displayList'
// // import { setCategories } from './server/categoryServer/setCategories';
// // import { setRecipes } from './server/recipeServer/setRecipes';
// import { setCategories } from './server/categoryServer/setCategories';
// function App() {

//   const user = useSelector((state: RootState) => state.main.user)
//   const navig = useNavigate()
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(setCategories());
//     dispatch(setRecipes());
//   }, [dispatch]);
//   useEffect(() => {
//     if (!user) {
//       navig('/');
//     }
//     else {
//       navig("/homePage")
//     }
//   }, [user,navig])

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/homePage" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sighin" element={<Sighin />} />
//         <Route path="/recipes" element={<DisplayRecipes />} />
//         <Route path="/addRecipe" element={<AddRecipes />} />
//         <Route path="/editRecipe" element={<AddRecipes />} />
//         <Route path="/categories" element={<Caterories />} />
//         <Route path="/myRecipes" element={<MyRecipes />} />
//         <Route path="/recipeDetailes" element={<RecipeDetailes />} />
//         <Route path="/displayList" element={<DisplayList />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;
// // export const setCategories = createAsyncThunk("categories/setCategories", async () => {
// //   const response = await axios.get("http://localhost:8080/api/categories");
// //   return response.data;
// // });
// // function setCategories(): any {
// //   throw new Error('Function not implemented.')
// // }

// // function setRecipes(): any {
// //   throw new Error('Function not implemented.')
// // }

//גירסה אחרת
// import './App.css'

// import { Route, Routes, useNavigate } from "react-router-dom"
// import { useEffect } from 'react';
// import HomePage from './components/homePage'
// import Header from './components/header'
// import Sighin from './components/user/sighin'
// import DisplayRecipes from './components/recipes/displayRecipes'
// import AddRecipes from "./components/recipes/addRepice"
// import { useDispatch, useSelector } from 'react-redux';
// import MyRecipes from './components/recipes/myRecipes';
// import RecipeDetailes from './components/recipes/recipeDetailes';
// import Login from './components/user/login'
// import Caterories from './components/caterory/caterories'
// import DisplayList from './components/shopping-list.js/displayList'
// import { setCategories } from './server/categoryServer/setCategories';
// import { setRecipes } from './server/recipeServer/setRecipes';
// import type { RootState } from './store'

// import type { AppDispatch } from './store'; // Ensure this import matches your store file path

// function App() {
//   const user = useSelector((state: RootState) => state.user)
//   const navig = useNavigate()
//   const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setCategories());
//     dispatch(setRecipes());
//   }, [dispatch]);

//   useEffect(() => {
//     if (!user) {
//       navig('/');
//     } else {
//       navig("/homePage")
//     }
//   }, [user, navig])

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/homePage" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sighin" element={<Sighin />} />
//         <Route path="/recipes" element={<DisplayRecipes />} />
//         <Route path="/addRecipe" element={<AddRecipes />} />
//         <Route path="/editRecipe" element={<AddRecipes />} />
//         <Route path="/categories" element={<Caterories />} />
//         <Route path="/myRecipes" element={<MyRecipes />} />
//         <Route path="/recipeDetailes" element={<RecipeDetailes />} />
//         <Route path="/displayList" element={<DisplayList />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;

//גירסה אחרת
// import './App.css'

// import { Route, Routes, useNavigate } from "react-router-dom"
// import { useEffect } from 'react';
// import HomePage from './components/homePage'
// import Header from './components/header'
// import Sighin from './components/user/sighin'
// import DisplayRecipes from './components/recipes/displayRecipes'
// import AddRecipes from "./components/recipes/addRepice"
// import { useDispatch, useSelector } from 'react-redux';
// import MyRecipes from './components/recipes/myRecipes';
// import RecipeDetailes from './components/recipes/recipeDetailes';
// import Login from './components/user/login'
// import Caterories from './components/caterory/caterories'
// import DisplayList from './components/shopping-list.js/displayList'
// import { setCategories } from './server/categoryServer/setCategories';
// import { setRecipes } from './server/recipeServer/setRecipes';
// import type { RootState } from './store'

// import type { AppDispatch } from './store'; // Ensure this import matches your store file path

// function App() {
//   const user = useSelector((state: RootState) => state.user.user); // גישה נכונה ל-user
//   const navig = useNavigate()
//   const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setCategories());
//     dispatch(setRecipes());
//   }, [dispatch]);

//   // useEffect(() => {
//   //   if (!user) {
//   //     navig('/');
//   //   } else {
//   //     navig("/homePage")
//   //   }
//   // }, [user, navig])
//   useEffect(() => {
//   if (!user && window.location.pathname !== "/login" && window.location.pathname !== "/sighin") {
//     navig('/');
//   } else if (user) {
//     navig("/homePage");
//   }
// }, [user, navig]);

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/homePage" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sighin" element={<Sighin />} />
//         <Route path="/recipes" element={<DisplayRecipes />} />
//         <Route path="/addRecipe" element={<AddRecipes />} />
//         <Route path="/editRecipe" element={<AddRecipes />} />
//         <Route path="/categories" element={<Caterories />} />
//         <Route path="/myRecipes" element={<MyRecipes />} />
//         <Route path="/recipeDetailes" element={<RecipeDetailes />} />
//         <Route path="/displayList" element={<DisplayList />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;

//other version
"use client"

import "./App.css"

import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import HomePage from "./components/homePage"
import Header from "./components/header"
import Sighin from "./components/user/sighin"
import DisplayRecipes from "./components/recipes/displayRecipes"
import AddRecipes from "./components/recipes/addRepice"
import { useDispatch, useSelector } from "react-redux"
import MyRecipes from "./components/recipes/myRecipes"
import RecipeDetailes from "./components/recipes/recipeDetailes"
import Login from "./components/user/login"
import Categories from "./components/caterory/caterories"
import DisplayList from "./components/shopping-list.js/displayList"
import { setCategories } from "./server/categoryServer/setCategories"
import { setRecipes } from "./server/recipeServer/setRecipes"
import type { RootState } from "./store"

import type { AppDispatch } from "./store" // Ensure this import matches your store file path

function App() {
  const user = useSelector((state: RootState) => state.user.user) // גישה נכונה ל-user
  const navig = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    console.log("Fetching initial data...")
    dispatch(setCategories())
    dispatch(setRecipes())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sighin" element={<Sighin />} />
        <Route path="/recipes" element={<DisplayRecipes />} />
        <Route path="/addRecipe" element={<AddRecipes />} />
        <Route path="/editRecipe" element={<AddRecipes />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/myRecipes" element={<MyRecipes />} />
        <Route path="/recipeDetailes" element={<RecipeDetailes />} />
        <Route path="/displayList" element={<DisplayList />} />
      </Routes>
    </div>
  )
}

export default App

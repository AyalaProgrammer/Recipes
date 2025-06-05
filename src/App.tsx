

import "./App.css"

import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
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
import { checkServerHealth } from "./server/healthCheck"
import Swal from "sweetalert2"

import type { AppDispatch } from "./store" // Ensure this import matches your store file path

function App() {
  const user = useSelector((state: RootState) => state.user.user) // גישה נכונה ל-user
  const navig = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const [serverAvailable, setServerAvailable] = useState<boolean>(true) // שינוי ברירת המחדל ל-true

  useEffect(() => {
    // בדיקת זמינות השרת
    const checkServer = async () => {
      try {
        const isAvailable = await checkServerHealth()
        setServerAvailable(isAvailable)

        if (isAvailable) {
          console.log("Server is available, fetching data...")
          // טעינת נתונים רק אם השרת זמין
          dispatch(setCategories())
          dispatch(setRecipes())
        } else {
          console.error("Server is not available")
          Swal.fire({
            title: "השרת אינו זמין",
            text: "לא ניתן להתחבר לשרת. חלק מהפונקציות לא יעבדו כראוי.",
            icon: "warning",
            confirmButtonText: "הבנתי",
          })
        }
      } catch (error) {
        console.error("Error checking server health:", error)
      }
    }

    checkServer()
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      {!serverAvailable && (
        <div className="server-warning">
          <p>
            <strong>אזהרה:</strong> השרת אינו זמין. חלק מהפונקציות לא יעבדו כראוי.
          </p>
        </div>
      )}
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

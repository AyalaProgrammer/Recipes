
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

// הגדרת הממשק עבור Recipe
export interface RecipeFromServer {
  id?: number
  Id?: number
  title?: string
  Name?: string
  ingredients?: any[]
  Ingredients?: any[]
  instructions?: any[]
  Instructions?: any[]
  categoryId?: number
  CategoryId?: number
  img?: string
  Img?: string
  duration?: number
  Duration?: number
  difficulty?: number
  Difficulty?: number
  description?: string
  Description?: string
  userId?: number
  UserId?: number
}

// יצירת פונקציית setRecipes באמצעות createAsyncThunk
export const setRecipes = createAsyncThunk<RecipeFromServer[]>("recipes/setRecipes", async () => {
  try {
    // שינוי הנתיב לנתיב הנכון בשרת
    const response = await axios.get<RecipeFromServer[]>("http://localhost:8080/api/recipe")
    console.log("Recipes fetched:", response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching recipes:", error)
    throw error
  }
})

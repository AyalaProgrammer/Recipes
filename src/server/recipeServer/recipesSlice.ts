
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { setRecipes } from "../recipeServer/setRecipes"

// הגדרת טיפוס Recipe
interface Recipe {
  Id: string | number
  Name: string
  title?: string
  CategoryId: number
  Img: string
  Duration: number
  Difficulty: number
  Description: string
  Ingredients?: any[]
  Instructions?: any[]
}

// הגדרת טיפוס המצב
interface RecipesState {
  recipes: Recipe[]
  loading: boolean
  error: string | null
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setRecipes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(setRecipes.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false
        // מיפוי הנתונים שמגיעים מהשרת למבנה שהאפליקציה מצפה לו
        state.recipes = action.payload.map((recipe) => ({
          Id: recipe.id || recipe.Id,
          Name: recipe.title || recipe.Name,
          CategoryId: recipe.categoryId || recipe.CategoryId,
          Img: recipe.img || recipe.Img,
          Duration: recipe.duration || recipe.Duration,
          Difficulty: recipe.difficulty || recipe.Difficulty,
          Description: recipe.description || recipe.Description,
          Ingredients: recipe.ingredients || recipe.Ingredients || [],
          Instructions: recipe.instructions || recipe.Instructions || [],
        }))
        console.log("Recipes after mapping:", state.recipes)
      })
      .addCase(setRecipes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? null
      })
  },
})

export default recipesSlice.reducer

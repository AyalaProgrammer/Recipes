
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { setRecipes, type RecipeFromServer } from "../server/recipeServer/setRecipes"

// הגדרת טיפוס Recipe
export interface Recipe {
  Id: number | string
  Name: string
  CategoryId: number
  Img: string
  Duration: number
  Difficulty: number
  Description: string
  Ingredients: any[]
  Instructions: any[]
  UserId?: number
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
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes.push(action.payload)
    },
    editRecipe(state, action: PayloadAction<Recipe>) {
      const index = state.recipes.findIndex((r) => r.Id === action.payload.Id)
      if (index !== -1) {
        state.recipes[index] = action.payload
      }
    },
    deleteRecipe(state, action: PayloadAction<{ Id: number | string }>) {
      state.recipes = state.recipes.filter((r) => r.Id !== action.payload.Id)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setRecipes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(setRecipes.fulfilled, (state, action: PayloadAction<RecipeFromServer[]>) => {
        state.loading = false
        // מיפוי הנתונים שמגיעים מהשרת למבנה שהאפליקציה מצפה לו
        state.recipes = action.payload.map((recipe) => ({
          Id: recipe.id || recipe.Id || 0,
          Name: recipe.title || recipe.Name || "",
          CategoryId: recipe.categoryId || recipe.CategoryId || 0,
          Img: recipe.img || recipe.Img || "",
          Duration: recipe.duration || recipe.Duration || 0,
          Difficulty: recipe.difficulty || recipe.Difficulty || 1,
          Description: recipe.description || recipe.Description || "",
          Ingredients: recipe.ingredients || recipe.Ingredients || [],
          Instructions: recipe.instructions || recipe.Instructions || [],
          UserId: recipe.userId || recipe.UserId,
        }))
        console.log("Recipes after mapping:", state.recipes)
      })
      .addCase(setRecipes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? null
      })
  },
})

export const { addRecipe, editRecipe, deleteRecipe } = recipesSlice.actions
export default recipesSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

// Define or import the Recipe type
interface Recipe {
  Id: string;
  name: string;
  ingredients: string[];
}
import { setRecipes } from "../server/recipeServer/setRecipes";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [] as Recipe[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload.map((recipe) => ({
          ...recipe,
          Id: recipe.Id.toString(), // Convert 'id' to string
          name: recipe.title, // Map 'title' to 'name'
        }));
      })
      .addCase(setRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default recipesSlice.reducer;
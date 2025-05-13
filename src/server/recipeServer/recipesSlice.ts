import { createSlice } from "@reduxjs/toolkit";
import { setRecipes } from "../server/recipeServer/setRecipes";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
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
        state.recipes = action.payload;
      })
      .addCase(setRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
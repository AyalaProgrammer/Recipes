
import { createSlice } from "@reduxjs/toolkit";
import { setCategories } from "../server/categoryServer/setCategories";
import { setRecipes } from "../server/recipeServer/setRecipes";

const initialState: {
  user: any | null;
  recipes: any[];
  categories: { Id: number; Name: string }[];
  toShopping: any[];
} = {
  user: null,
  recipes: [],
  categories: [],
  toShopping: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    addRecipe(state, action) {
      state.recipes.push(action.payload);
    },
    editRecipe(state, action) {
      const index = state.recipes.findIndex((r) => r.Id === action.payload.Id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
      }
    },
    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter((r) => r.Id !== action.payload.Id);
    },
    setToShopping(state, action) {
      state.toShopping = action.payload;
    },
    editShopping(state, action) {
      const index = state.toShopping.findIndex((s) => s.Id === action.payload.Id);
      if (index !== -1) {
        state.toShopping[index] = action.payload;
      } else {
        state.toShopping.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCategories.fulfilled, (state, action) => {
      state.categories = (action.payload as unknown as any[]).map(item => ({
        Id: item.Id,
        Name: item.Name,
      }));
    });
    builder.addCase(setRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export const {
  setUser,
  addCategory,
  addRecipe,
  editRecipe,
  deleteRecipe,
  setToShopping,
  editShopping,
} = mainSlice.actions;

export default mainSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setCategories } from "../server/categoryServer/setCategories";
import type { Category } from "../server/categoryServer/categoriesSlice";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [] as Category[], // Use Category[] to match the payload type
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.loading = false;
        state.categories = action.payload; // עדכון הקטגוריות
      })
      .addCase(setCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default categoriesSlice.reducer;
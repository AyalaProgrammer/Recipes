import { createSlice } from "@reduxjs/toolkit";
import { setCategories } from "../server/categoryServer/setCategories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(setCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
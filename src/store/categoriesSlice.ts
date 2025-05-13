// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { setCategories } from "../server/categoryServer/setCategories";
// // Removed duplicate import of AsyncThunk

// // Explicitly type the setCategories thunk
// type SetCategoriesThunk = AsyncThunk<string[], void, {}>;
// import type { AsyncThunk } from "@reduxjs/toolkit";

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     categories: [] as string[], // Replace 'string[]' with the appropriate type for your categories
//     loading: false,
//     error: null as string | null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase((setCategories as SetCategoriesThunk).fulfilled, (state: { categories: string[]; loading: boolean; error: string | null }) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase((setCategories as SetCategoriesThunk).fulfilled, (state: { categories: string[]; loading: boolean; error: string | null }, action: PayloadAction<string[]>) => {
//         state.loading = false;
//         state.categories = action.payload;
//       })
//       .addCase(setCategories.rejected, (state: { categories: string[]; loading: boolean; error: string | null }, action) => {
//         state.loading = false;
//         state.error = action.error.message ?? null;
//       });
//   },
// });

// export default categoriesSlice.reducer;

//גירסה אחרת
// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { setCategories } from "../server/categoryServer/setCategories";
// import type { AsyncThunk } from "@reduxjs/toolkit";

// // Explicitly type the setCategories thunk
// type SetCategoriesThunk = AsyncThunk<string[], void, { rejectValue: string }>;

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     categories: [] as string[], // Replace 'string[]' with the appropriate type for your categories
//     loading: false,
//     error: null as string | null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase((setCategories as SetCategoriesThunk).fulfilled, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase((setCategories as SetCategoriesThunk).fulfilled, (state, action: PayloadAction<string[]>) => {
//         state.loading = false;
//         state.categories = action.payload; // עדכון הקטגוריות
//       })
//       .addCase(setCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message ?? null;
//       });
//   },
// });

// export default categoriesSlice.reducer;
//גירסה אחרת

// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { setCategories } from "../server/categoryServer/setCategories";
// import type { AsyncThunk } from "@reduxjs/toolkit";

// // Explicitly type the setCategories thunk
// type SetCategoriesThunk = AsyncThunk<string[], void, { rejectValue: string }>;

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     categories: [] as string[], // Replace 'string[]' with the appropriate type for your categories
//     loading: false,
//     error: null as string | null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase((setCategories as SetCategoriesThunk).fulfilled, (state, action: PayloadAction<string[]>) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase((setCategories as SetCategoriesThunk).fulfilled, (state, action: PayloadAction<string[]>) => {
//         state.loading = false;
//         state.categories = action.payload; // עדכון הקטגוריות
//       })
//       .addCase(setCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message ?? null;
//       });
//   },
// });

// export default categoriesSlice.reducer;

//גירסה אחרת
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setCategories } from "../server/categoryServer/setCategories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [] as string[], // Replace 'string[]' with the appropriate type for your categories
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
      .addCase(setCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
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
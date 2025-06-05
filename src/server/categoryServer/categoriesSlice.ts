
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { setCategories } from "./setCategories"
// ייצוא הטיפוס Category כדי שיהיה זמין לקבצים אחרים
export interface Category {
  Id: number
  Name: string
}

interface CategoriesState {
  categories: Category[]
  loading: boolean
  error: string | null
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.categories.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(setCategories.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false
        state.categories = action.payload.map((category) => ({
          Id: category.Id || category.id || 0,
          Name: category.Name || category.name || "",
        }))
      })
      .addCase(setCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? null
      })
  },
})

export const { addCategory } = categoriesSlice.actions
export default categoriesSlice.reducer

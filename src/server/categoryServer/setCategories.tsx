
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { Category } from "./categoriesSlice"
// import type { Category } from "../../store/categoriesSlice"

export const setCategories = createAsyncThunk<Category[]>("categories/setCategories", async () => {
  try {
    // שינוי הנתיב לנתיב הנכון בשרת
    const response = await axios.get<Category[]>("http://localhost:8080/api/category")
    console.log("Categories fetched:", response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
})




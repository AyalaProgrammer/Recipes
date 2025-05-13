// import axios from "axios"

// export const setCategories = () => {
//     return dispatch => {
//         axios.get("http://localhost:8080/api/category").then((x) => {
//             dispatch({ type: 'SET_CATEGORIES', payload: x.data })
//         })
//             .catch(err => console.log(err))
//     }
// }

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// export const setCategories = createAsyncThunk("categories/setCategories", async () => {
//     const response = await axios.get("http://localhost:8080/api/categories");
//     return response.data;
//   });
// // export const setCategories = () => {
// //     return (dispatch: Dispatch<SetCategoriesAction>) => {
// //         axios.get<Category[]>("http://localhost:8080/api/category")
// //             .then((response) => {
// //                 dispatch({ type: 'SET_CATEGORIES', payload: response.data });
// //             })
// //             .catch(err => console.error(err));
// //     };
// // };

// // גירסה אחרת של קומפיילוט
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // יצירת פונקציית setCategories באמצעות createAsyncThunk
// export const setCategories = createAsyncThunk("categories/setCategories", async () => {
//     const response = await axios.get("http://localhost:8080/api/categories");
//     return response.data;
// });

//אחר
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const setCategories = createAsyncThunk<string[]>(
//   "categories/setCategories",
//   async () => {
//     const response = await axios.get<string[]>("http://localhost:8080/api/category");
//     return response.data;
//   }
// );

//other
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { Category } from "../../store/categoriesSlice"

export const setCategories = createAsyncThunk<Category[]>("categories/setCategories", async () => {
  try {
    const response = await axios.get<Category[]>("http://localhost:8080/api/category")
    console.log("Categories fetched:", response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
})

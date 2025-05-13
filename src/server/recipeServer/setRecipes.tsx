// import axios from "axios"

// export const setRecipes = () => {
//     return dispatch => {
//         axios.get("http://localhost:8080/api/recipe").then(x => {
//             dispatch({ type: 'SET_RECIPE', payload: x.data })
//         })
//             .catch(err => console.log(err))
//     }
// }

//גירסה נוספת של קומפיילוט

// import axios from "axios";
// import type { Dispatch } from "redux";
// interface Recipe {
//   id: number;
//   title: string;
//   ingredients: string[];
//   instructions: string;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// interface SetRecipesAction {
//   type: "SET_RECIPE";
//   payload: Recipe[];
// }

// export const setRecipes = () => {
//   return (dispatch: Dispatch<SetRecipesAction>) => {
//     axios
//       .get<Recipe[]>("http://localhost:8080/api/recipe")
//       .then((response) => {
//         dispatch({ type: "SET_RECIPE", payload: response.data });
//       })
//       .catch((err) => console.error(err));
//   };
// };

// //גירסה נוספת של קומפיילוט
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// // הגדרת הממשק עבור Recipe
// interface Recipe {
//   id: number;
//   title: string;
//   ingredients: string[];
//   instructions: string;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// // יצירת פונקציית setRecipes באמצעות createAsyncThunk
// export const setRecipes = createAsyncThunk("recipes/setRecipes", async () => {
//   const response = await axios.get<Recipe[]>("http://localhost:8080/api/recipe");
//   return response.data;
// });

// // גירסה נוספת של קומפיילוט
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// // הגדרת הממשק עבור Recipe
// interface Recipe {
//   id: number;
//   title: string;
//   ingredients: string[];
//   instructions: string;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// // יצירת פונקציית setRecipes באמצעות createAsyncThunk
// export const setRecipes = createAsyncThunk("recipes/setRecipes", async () => {
//   const response = await axios.get<Recipe[]>("http://localhost:8080/api/recipe");
//   return response.data;
// });
//גירסה אחרת של וי0
// import axios from "axios"
// import { createAsyncThunk } from "@reduxjs/toolkit"

// // הגדרת הממשק עבור Recipe
// interface Recipe {
//   id: number
//   title: string
//   ingredients: string[]
//   instructions: string
//   [key: string]: any // במידה ויש שדות נוספים
// }

// // יצירת פונקציית setRecipes באמצעות createAsyncThunk
// export const setRecipes = createAsyncThunk<Recipe[]>("recipes/setRecipes", async () => {
//   try {
//     const response = await axios.get<Recipe[]>("http://localhost:8080/api/recipe")
//     console.log("Recipes fetched:", response.data)
//     return response.data
//   } catch (error) {
//     console.error("Error fetching recipes:", error)
//     throw error
//   }
// })
//other version
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

// הגדרת הממשק עבור Recipe
export interface RecipeFromServer {
  id?: number
  Id?: number
  title?: string
  Name?: string
  ingredients?: any[]
  Ingredients?: any[]
  instructions?: any[]
  Instructions?: any[]
  categoryId?: number
  CategoryId?: number
  img?: string
  Img?: string
  duration?: number
  Duration?: number
  difficulty?: number
  Difficulty?: number
  description?: string
  Description?: string
  userId?: number
  UserId?: number
}

// יצירת פונקציית setRecipes באמצעות createAsyncThunk
export const setRecipes = createAsyncThunk<RecipeFromServer[]>("recipes/setRecipes", async () => {
  try {
    const response = await axios.get<RecipeFromServer[]>("http://localhost:8080/api/recipe")
    console.log("Recipes fetched:", response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching recipes:", error)
    throw error
  }
})

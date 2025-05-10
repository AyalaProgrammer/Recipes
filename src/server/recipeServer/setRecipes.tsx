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
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// הגדרת הממשק עבור Recipe
interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  [key: string]: any; // במידה ויש שדות נוספים
}

// יצירת פונקציית setRecipes באמצעות createAsyncThunk
export const setRecipes = createAsyncThunk("recipes/setRecipes", async () => {
  const response = await axios.get<Recipe[]>("http://localhost:8080/api/recipe");
  return response.data;
});
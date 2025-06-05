
import axios from "axios"
import Swal from "sweetalert2"
import type { Dispatch } from "redux"
import { addRecipe } from "../../store/recipesSlice"

interface RecipeData {
  title: string
  ingredients: { Name: string; Count: string; Type: string }[]
  instructions: string[]
  categoryId: number
  img: string
  duration: string
  difficulty: number
  description: string
  userId: number
  [key: string]: any
}

export default function addNewRecipes(data: RecipeData, navig: (path: string) => void) {
  console.log("Adding new recipe:", data)
  return (dispatch: Dispatch) => {
    // שינוי הנתיב לנתיב הנכון בשרת
    axios
      .post<any>("http://localhost:8080/api/recipe", data)
      .then((response) => {
        const recipeData = {
          Id: response.data.Id || response.data.id || 0,
          Name: response.data.Name || response.data.title || "",
          CategoryId: response.data.CategoryId || response.data.categoryId || 0,
          Img: response.data.Img || response.data.img || "",
          Duration: response.data.Duration || response.data.duration || 0,
          Difficulty: response.data.Difficulty || response.data.difficulty || 1,
          Description: response.data.Description || response.data.description || "",
          Ingredients: response.data.Ingredients || response.data.ingredients || [],
          Instructions: response.data.Instructions || response.data.instructions || [],
          UserId: response.data.UserId || response.data.userId,
        }
        dispatch(addRecipe(recipeData))
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "המתכון נוסף בהצלחה",
          showConfirmButton: false,
          timer: 1500,
        })
        navig("/recipes")
      })
      .catch((err) => {
        console.error("Error adding recipe:", err)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "קרתה תקלה בהוספת המתכון נסה שנית",
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }
}

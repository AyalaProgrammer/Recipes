
import axios from "axios"
import Swal from "sweetalert2"
import type { Dispatch } from "redux"
import { deleteRecipe as deleteRecipeAction } from "../../store/recipesSlice"

interface RecipeData {
  Id: number | string
  [key: string]: any
}

export default function deleteRecipe(data: RecipeData, navig: (path: string) => void) {
  console.log("Deleting recipe:", data)
  return (dispatch: Dispatch) => {
    // שינוי הנתיב לנתיב הנכון בשרת
    axios
      .post(`http://localhost:8080/api/recipe/delete/${data.Id}`)
      .then(() => {
        dispatch(deleteRecipeAction({ Id: data.Id }))
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "המתכון נמחק בהצלחה",
          showConfirmButton: false,
          timer: 1500,
        })
        navig("/recipes")
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "קרתה תקלה במחיקת המתכון, נסה שנית",
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }
}

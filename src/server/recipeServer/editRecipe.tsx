
import axios from "axios"
import Swal from "sweetalert2"
import { editRecipe as editRecipeAction } from "../../store/recipesSlice"

export default function editRecipe(data: any, navig: any) {
  console.log("Editing recipe:", data)
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    // שינוי הנתיב לנתיב הנכון בשרת
    axios
      .post("http://localhost:8080/api/recipe/edit", data)
      .then((response) => {
        const data = response.data as {
          Id?: number;
          id?: number;
          Name?: string;
          title?: string;
          CategoryId?: number;
          categoryId?: number;
          Img?: string;
          img?: string;
          Duration?: number;
          duration?: number;
          Difficulty?: number;
          difficulty?: number;
          Description?: string;
          description?: string;
          Ingredients?: any[];
          ingredients?: any[];
          Instructions?: any[];
          instructions?: any[];
          UserId?: number;
          userId?: number;
        };
        const recipeData = {
          Id: data.Id || data.id || 0,
          Name: data.Name || data.title || "",
          CategoryId: data.CategoryId || data.categoryId || 0,
          Img: data.Img || data.img || "",
          Duration: data.Duration || data.duration || 0,
          Difficulty: data.Difficulty || data.difficulty || 1,
          Description: data.Description || data.description || "",
          Ingredients: data.Ingredients || data.ingredients || [],
          Instructions: data.Instructions || data.instructions || [],
          UserId: data.UserId || data.userId,
        }
        dispatch(editRecipeAction(recipeData))
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "המתכון שונה בהצלחה",
          showConfirmButton: false,
          timer: 1500,
        })
        navig("/recipes")
      })
      .catch((err) => {
        console.error("Error editing recipe:", err)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "קרתה תקלה בעריכת המתכון נסה שנית",
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }
}

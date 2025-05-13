// import axios from "axios";
// import Swal from "sweetalert2";

// export default function editRecipe(data:any, navig:any) {

//     return (dispatch: (action: { type: string; payload?: any }) => void) => {
//         axios.post("http://localhost:8080/api/recipe/edit", data)
//             .then(x => {
//                 dispatch({ type: 'EDIT_RECIPE', payload: x.data })
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "המתכון שונה בהצלחה",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//                 navig("/recipes")
//             })
//             .catch(err => {
//                 console.log(err)
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "error",
//                     title: "קרתה תקלה בעריכת המתכון נסה שנית",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//     }

// }
//גירת מוצש
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function editRecipe(data: any, navig: any) {
//   return (dispatch: (action: { type: string; payload?: any }) => void) => {
//     axios
//       .post("http://localhost:8080/api/recipe/edit", data)
//       .then((response) => {
//         dispatch({ type: "EDIT_RECIPE", payload: response.data });
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "המתכון שונה בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navig("/recipes");
//       })
//       .catch((err) => {
//         console.error(err);
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "קרתה תקלה בעריכת המתכון נסה שנית",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       });
//   };
// }

//other version
import axios from "axios"
import Swal from "sweetalert2"
import { editRecipe as editRecipeAction } from "../../store/recipesSlice"

export default function editRecipe(data: any, navig: any) {
  console.log("Editing recipe:", data)
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    axios
      .post("http://localhost:8080/api/recipe/edit", data)
      .then((response) => {
        const recipeData = {
          Id: (response.data as any).Id || (response.data as any).id || 0,
          Name: (response.data as any).Name || (response.data as any).title || "",
          CategoryId: (response.data as any).CategoryId || (response.data as any).categoryId || 0,
          Img: (response.data as any).Img || (response.data as any).img || "",
          Duration: (response.data as any).Duration || (response.data as any).duration || 0,
          Difficulty: (response.data as any).Difficulty || (response.data as any).difficulty || 1,
          Description: (response.data as any).Description || (response.data as any).description || "",
          Ingredients: (response.data as any).Ingredients || (response.data as any).ingredients || [],
          Instructions: (response.data as any).Instructions || (response.data as any).instructions || [],
          UserId: (response.data as any).UserId || (response.data as any).userId,
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

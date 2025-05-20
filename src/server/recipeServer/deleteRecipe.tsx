// import axios from "axios";
// import Swal from "sweetalert2";

// export default function deleteRecipe(data, navig) {
//   console.log("delete xxx")
//   return dispatch => {
//     axios.post(`http://localhost:8080/api/recipe/delete/${data.Id}`)
//       .then(x => {
//         dispatch({ type: 'DELETE_RECIPE', payload: data })
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: " המתכון נמחק בהצלחה",
//           showConfirmButton: false,
//           timer: 1500
//         });
//         navig("/recipes")
//       })
//       .catch(err => {
//         console.log(err)
//         Swal.fire({
//           position: "top-end",
//           icon: "eroor",
//           title: "קרתה תקלה במחיקת המתכון נסה שנית",
//           showConfirmButton: false,
//           timer: 1500
//         });
//       })
//   }

// }


//גירסה של קומפיילוט 

// import axios from "axios";
// import Swal from "sweetalert2";
// import type { Dispatch } from "redux";

// interface RecipeData {
//   Id: number;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// interface DeleteRecipeAction {
//   type: "DELETE_RECIPE";
//   payload: RecipeData;
// }

// export default function deleteRecipe(
//   data: RecipeData,
//   navig: (path: string) => void
// ) {
//   console.log("delete xxx");
//   return (dispatch: Dispatch<DeleteRecipeAction>) => {
//     axios
//       .post(`http://localhost:8080/api/recipe/delete/${data.Id}`)
//       .then(() => {
//         dispatch({ type: "DELETE_RECIPE", payload: data });
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "המתכון נמחק בהצלחה",
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
//           title: "קרתה תקלה במחיקת המתכון, נסה שנית",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       });
//   };
// }

//other
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// import { deleteRecipe as deleteRecipeAction } from "../../store/recipesSlice"

// interface RecipeData {
//   Id: number | string
//   [key: string]: any
// }

// export default function deleteRecipe(data: RecipeData, navig: (path: string) => void) {
//   console.log("Deleting recipe:", data)
//   return (dispatch: Dispatch) => {
//     axios
//       .post(`http://localhost:8080/api/recipe/delete/${data.Id}`)
//       .then(() => {
//         dispatch(deleteRecipeAction({ Id: data.Id }))
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "המתכון נמחק בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         navig("/recipes")
//       })
//       .catch((err) => {
//         console.error("Error deleting recipe:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "קרתה תקלה במחיקת המתכון, נסה שנית",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
// }
// //other
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// import { deleteRecipe as deleteRecipeAction } from "../../store/recipesSlice"

// interface RecipeData {
//   Id: number | string
//   [key: string]: any
// }

// export default function deleteRecipe(data: RecipeData, navig: (path: string) => void) {
//   console.log("Deleting recipe:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין
//     axios
//       .get("http://localhost:8080/api/health")
//       .then(() => {
//         // שינוי הנתיב לנתיב הנכון בשרת
//         axios
//           .delete(`http://localhost:8080/api/recipes/${data.Id}`)
//           .then(() => {
//             dispatch(deleteRecipeAction({ Id: data.Id }))
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "המתכון נמחק בהצלחה",
//               showConfirmButton: false,
//               timer: 1500,
//             })
//             navig("/recipes")
//           })
//           .catch((err) => {
//             console.error("Error deleting recipe:", err)
//             Swal.fire({
//               position: "top-end",
//               icon: "error",
//               title: "קרתה תקלה במחיקת המתכון, נסה שנית",
//               showConfirmButton: false,
//               timer: 1500,
//             })
//           })
//       })
//       .catch((err) => {
//         console.error("Server not available:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "השרת אינו זמין",
//           text: "וודא שהשרת פועל בכתובת http://localhost:8080",
//           showConfirmButton: true,
//         })
//       })
//   }
// }
// //other
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// import { deleteRecipe as deleteRecipeAction } from "../../store/recipesSlice"

// interface RecipeData {
//   Id: number | string
//   [key: string]: any
// }

// export default function deleteRecipe(data: RecipeData, navig: (path: string) => void) {
//   console.log("Deleting recipe:", data)
//   return (dispatch: Dispatch) => {
//     // שליחת הבקשה ישירות ללא בדיקת זמינות
//     axios
//       .delete(`http://localhost:8080/api/recipes/${data.Id}`)
//       .then(() => {
//         dispatch(deleteRecipeAction({ Id: data.Id }))
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "המתכון נמחק בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         navig("/recipes")
//       })
//       .catch((err) => {
//         console.error("Error deleting recipe:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "קרתה תקלה במחיקת המתכון, נסה שנית",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
// }
// //other
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

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

import axios from "axios";
import Swal from "sweetalert2";
import type { Dispatch } from "redux";

interface RecipeData {
  Id: number;
  [key: string]: any; // במידה ויש שדות נוספים
}

interface DeleteRecipeAction {
  type: "DELETE_RECIPE";
  payload: RecipeData;
}

export default function deleteRecipe(
  data: RecipeData,
  navig: (path: string) => void
) {
  console.log("delete xxx");
  return (dispatch: Dispatch<DeleteRecipeAction>) => {
    axios
      .post(`http://localhost:8080/api/recipe/delete/${data.Id}`)
      .then(() => {
        dispatch({ type: "DELETE_RECIPE", payload: data });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "המתכון נמחק בהצלחה",
          showConfirmButton: false,
          timer: 1500,
        });
        navig("/recipes");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "קרתה תקלה במחיקת המתכון, נסה שנית",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
}
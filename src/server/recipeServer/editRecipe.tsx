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
import axios from "axios";
import Swal from "sweetalert2";

export default function editRecipe(data: any, navig: any) {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    axios
      .post("http://localhost:8080/api/recipe/edit", data)
      .then((response) => {
        dispatch({ type: "EDIT_RECIPE", payload: response.data });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "המתכון שונה בהצלחה",
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
          title: "קרתה תקלה בעריכת המתכון נסה שנית",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
}
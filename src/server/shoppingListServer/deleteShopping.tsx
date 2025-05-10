// import axios from "axios";
// import Swal from "sweetalert2";

// export default function deleteShopping(data) {
//     return dispatch => {
//         axios.post(`http://localhost:8080/api/bay/delete/${data.Id}`)
//             .then(x => {
//                 dispatch({ type: 'DELETE_TOSHOPPING', payload: data })
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "המוצר נמחק בהצלחה",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//             .catch(err => {
//                 console.log(err)
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "error",
//                     title: "קרתה תקלה במחיקת המוצר נסה שנית",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//     }
// }
//גירסה אחרת של קומפיילוט
import axios from "axios";
import Swal from "sweetalert2";
import type { Dispatch } from "redux";

interface ShoppingItem {
  Id: number;
  [key: string]: any; // במידה ויש שדות נוספים
}

interface DeleteShoppingAction {
  type: "DELETE_TOSHOPPING";
  payload: ShoppingItem;
}

export default function deleteShopping(data: ShoppingItem) {
  return (dispatch: Dispatch<DeleteShoppingAction>) => {
    axios
      .post(`http://localhost:8080/api/bay/delete/${data.Id}`)
      .then(() => {
        dispatch({ type: "DELETE_TOSHOPPING", payload: data });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "המוצר נמחק בהצלחה",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "קרתה תקלה במחיקת המוצר נסה שנית",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
}
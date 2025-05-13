// import axios from "axios";
// import deleteRecipe from './deleteShopping'
// import Swal from "sweetalert2";

// export default function editShopping(data, user,count) {

//     return dispatch => {
//         if (data.Count + count == 0) 
//             dispatch(deleteRecipe(data))
//         else
//             axios.post("http://localhost:8080/api/bay/", { Name: data.Name, UserId: user.Id, Count: count })
//                 .then(x => {
//                     dispatch({ type: 'EDIT_SHOPPING', payload: x.data })
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "כמות המוצר שונתה בהצלחה",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 })
//                 .catch(err => {console.log(err)
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "קרתה תקלה בעריכת המוצר נסה שנית",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//     }

// }

//גירסה אחרת
// import axios from "axios";
// import deleteShopping from "./deleteShopping";
// import Swal from "sweetalert2";
// import type { Dispatch } from "redux";

// interface ShoppingItem {
//   Id: number;
//   Name: string;
//   Count: number;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// interface User {
//   Id: number;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// interface EditShoppingAction {
//   type: "EDIT_SHOPPING";
//   payload: ShoppingItem;
// }

// export default function editShopping(data: ShoppingItem, user: User, count: number) {
//   return (dispatch: Dispatch<EditShoppingAction>) => {
//     if (data.Count + count === 0) {
//       dispatch(deleteShopping(data) as any); // טיפוס זמני אם deleteShopping לא מוגדר כראוי
//     } else {
//       axios
//         .post<ShoppingItem>("http://localhost:8080/api/bay/", {
//           Name: data.Name,
//           UserId: user.Id,
//           Count: count,
//         })
//         .then((response) => {
//           dispatch({ type: "EDIT_SHOPPING", payload: response.data });
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "כמות המוצר שונתה בהצלחה",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         })
//         .catch((err) => {
//           console.error(err);
//           Swal.fire({
//             position: "top-end",
//             icon: "error",
//             title: "קרתה תקלה בעריכת המוצר נסה שנית",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         });
//     }
//   };
// }

//other
import axios from "axios"
import type { Dispatch } from "redux"

export interface ShoppingItem {
  Id?: number
  Name: string
  Count: number | string
  Type: string
  UserId?: number
}

export interface User {
  Id: number
  Name: string
}

export default function editShopping(item: ShoppingItem, user: User, quantity: number) {
  console.log("Editing shopping item:", item, "for user:", user, "quantity:", quantity)

  // המרת Count לסוג number אם הוא string
  const count = typeof item.Count === "string" ? Number.parseInt(item.Count) : item.Count

  const shoppingItem = {
    ...item,
    Count: count,
    UserId: user.Id,
  }

  return (dispatch: Dispatch) => {
    axios
      .post("http://localhost:8080/api/shopping", shoppingItem)
      .then((response) => {
        dispatch({ type: "EDIT_SHOPPING", payload: response.data })
      })
      .catch((error) => {
        console.error("Error editing shopping item:", error)
      })
  }
}

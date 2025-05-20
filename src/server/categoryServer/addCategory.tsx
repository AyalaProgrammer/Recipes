// import axios from "axios";
// import Swal from "sweetalert2";

// export default function addCategory(data) {
//     return dispatch => {
//         axios.post("http://localhost:8080/api/category", data)
//             .then(x => {
//                 dispatch({ type: 'ADD_CATEGORIES', payload: x.data })
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "הקטגוריה נוספה בהצלחה",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });

//             })
//             .catch(err => {
//                 console.log(err)
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "error",
//                     title: "הקטגוריה קיימת",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//     }

// }
//גירסה נוספת
// import axios from "axios";
// import Swal from "sweetalert2";
// import type { Dispatch } from "redux";

// interface CategoryData {
//     name: string;
//     [key: string]: any; // במידה ויש שדות נוספים
// }

// interface AddCategoryAction {
//     type: 'ADD_CATEGORIES';
//     payload: CategoryData;
// }

// export default function addCategory(data: CategoryData) {
//     return (dispatch: Dispatch<AddCategoryAction>) => {
//         axios.post<CategoryData>("http://localhost:8080/api/category", data)
//             .then(x => {
//                 const categoryData = x.data;
//                 dispatch({ type: 'ADD_CATEGORIES', payload: categoryData });
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "הקטגוריה נוספה בהצלחה",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//             .catch(err => {
//                 console.error(err);
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "error",
//                     title: "הקטגוריה קיימת",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             });
//     };
// }

// 
// //גירסה נוספת
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// // import { addCategory as addCategoryAction } from "../../store/categoriesSlice"

// interface CategoryData {
//   name: string
//   [key: string]: any
// }

// export default function addCategory(data: CategoryData) {
//   console.log("Adding category:", data)
//   return (dispatch: Dispatch) => {
//     axios
//       .post<any>("http://localhost:8080/api/category", data)
//       .then((response) => {
//         const categoryData = {
//           Id: response.data.Id || response.data.id || 0,
//           Name: response.data.Name || response.data.name || "",
//         }
//         dispatch(addCategoryAction(categoryData))
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "הקטגוריה נוספה בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         console.log("Category added:", categoryData)
//       })
//       .catch((err) => {
//         console.error("Error adding category:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "הקטגוריה קיימת",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
// }
// function addCategoryAction(categoryData: { Id: any; Name: any }): any {
//   throw new Error("Function not implemented.")
// }
// //גירסה נוספת
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// // import { addCategory as addCategoryAction } from "../../store/categoriesSlice"

// interface CategoryData {
//   name: string
//   [key: string]: any
// }

// export default function addCategory(data: CategoryData) {
//   console.log("Adding category:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין לפני שליחת הבקשה
//     axios
//       .get("http://localhost:8080/api/health")
//       .then(() => {
//         // השרת זמין, שלח את הבקשה
//         axios
//           .post<any>("http://localhost:8080/api/category", data)
//           .then((response) => {
//             const categoryData = {
//               Id: response.data.Id || response.data.id || 0,
//               Name: response.data.Name || response.data.name || "",
//             }
//             dispatch(addCategoryAction(categoryData))
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "הקטגוריה נוספה בהצלחה",
//               showConfirmButton: false,
//               timer: 1500,
//             })
//             console.log("Category added:", categoryData)
//           })
//           .catch((err) => {
//             console.error("Error adding category:", err)
//             Swal.fire({
//               position: "top-end",
//               icon: "error",
//               title: "הקטגוריה קיימת או שאירעה שגיאה",
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

// function addCategoryAction(categoryData: { Id: any; Name: any }): any {
//   throw new Error("Function not implemented.")
// }

// //גירסה נוספת
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// // import { addCategory as addCategoryAction } from "../../store/categoriesSlice"

// interface CategoryData {
//   name: string
//   [key: string]: any
// }

// export default function addCategory(data: CategoryData) {
//   console.log("Adding category:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין לפני שליחת הבקשה
//     axios
//       .get("http://localhost:8080/api/health")
//       .then(() => {
//         // השרת זמין, שלח את הבקשה - שינוי הנתיב לנתיב הנכון בשרת
//         axios
//           .post<any>("http://localhost:8080/api/categories", data)
//           .then((response) => {
//             const categoryData = {
//               Id: response.data.Id || response.data.id || 0,
//               Name: response.data.Name || response.data.name || "",
//             }
//             dispatch(addCategoryAction(categoryData))
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "הקטגוריה נוספה בהצלחה",
//               showConfirmButton: false,
//               timer: 1500,
//             })
//             console.log("Category added:", categoryData)
//           })
//           .catch((err) => {
//             console.error("Error adding category:", err)
//             Swal.fire({
//               position: "top-end",
//               icon: "error",
//               title: "הקטגוריה קיימת או שאירעה שגיאה",
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
// function addCategoryAction(categoryData: { Id: any; Name: any }): any {
//   throw new Error("Function not implemented.")
// }

// //גירסה נוספת
// import axios from "axios"
// import Swal from "sweetalert2"
// import type { Dispatch } from "redux"
// // import { addCategory as addCategoryAction } from "../../store/categoriesSlice"

// interface CategoryData {
//   name: string
//   [key: string]: any
// }

// export default function addCategory(data: CategoryData) {
//   console.log("Adding category:", data)
//   return (dispatch: Dispatch) => {
//     // שליחת הבקשה ישירות ללא בדיקת זמינות
//     axios
//       .post<any>("http://localhost:8080/api/categories", data)
//       .then((response) => {
//         const categoryData = {
//           Id: response.data.Id || response.data.id || 0,
//           Name: response.data.Name || response.data.name || "",
//         }
//         dispatch(addCategoryAction(categoryData))
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "הקטגוריה נוספה בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         console.log("Category added:", categoryData)
//       })
//       .catch((err) => {
//         console.error("Error adding category:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "הקטגוריה קיימת או שאירעה שגיאה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
// }
// function addCategoryAction(categoryData: { Id: any; Name: any }): any {
//   throw new Error("Function not implemented.")
// }

// //גירסה נוספת
import axios from "axios"
import Swal from "sweetalert2"
import type { Dispatch } from "redux"
// import { addCategory as addCategoryAction } from "../../store/categoriesSlice"

interface CategoryData {
  name: string
  [key: string]: any
}

export default function addCategory(data: CategoryData) {
  console.log("Adding category:", data)
  return (dispatch: Dispatch) => {
    // שינוי הנתיב לנתיב הנכון בשרת
    axios
      .post<any>("http://localhost:8080/api/category", data)
      .then((response) => {
        const categoryData = {
          Id: response.data.Id || response.data.id || 0,
          Name: response.data.Name || response.data.name || "",
        }
        dispatch(addCategoryAction(categoryData))
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "הקטגוריה נוספה בהצלחה",
          showConfirmButton: false,
          timer: 1500,
        })
        console.log("Category added:", categoryData)
      })
      .catch((err) => {
        console.error("Error adding category:", err)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "הקטגוריה קיימת או שאירעה שגיאה",
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }
}
function addCategoryAction(categoryData: { Id: any; Name: any }): any {
  throw new Error("Function not implemented.")
}


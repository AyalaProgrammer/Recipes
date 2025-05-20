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
// import axios from "axios"
// import Swal from "sweetalert2"
// import { editRecipe as editRecipeAction } from "../../store/recipesSlice"

// export default function editRecipe(data: any, navig: any) {
//   console.log("Editing recipe:", data)
//   return (dispatch: (action: { type: string; payload?: any }) => void) => {
//     axios
//       .post("http://localhost:8080/api/recipe/edit", data)
//       .then((response) => {
//         const recipeData = {
//           Id: (response.data as any).Id || (response.data as any).id || 0,
//           Name: (response.data as any).Name || (response.data as any).title || "",
//           CategoryId: (response.data as any).CategoryId || (response.data as any).categoryId || 0,
//           Img: (response.data as any).Img || (response.data as any).img || "",
//           Duration: (response.data as any).Duration || (response.data as any).duration || 0,
//           Difficulty: (response.data as any).Difficulty || (response.data as any).difficulty || 1,
//           Description: (response.data as any).Description || (response.data as any).description || "",
//           Ingredients: (response.data as any).Ingredients || (response.data as any).ingredients || [],
//           Instructions: (response.data as any).Instructions || (response.data as any).instructions || [],
//           UserId: (response.data as any).UserId || (response.data as any).userId,
//         }
//         dispatch(editRecipeAction(recipeData))
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "המתכון שונה בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         navig("/recipes")
//       })
//       .catch((err) => {
//         console.error("Error editing recipe:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "קרתה תקלה בעריכת המתכון נסה שנית",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
// }
//other version
// import axios from "axios"
// import Swal from "sweetalert2"
// import { editRecipe as editRecipeAction } from "../../store/recipesSlice"

// export default function editRecipe(data: any, navig: any) {
//   console.log("Editing recipe:", data)
//   return (dispatch: (action: { type: string; payload?: any }) => void) => {
//     // בדיקה אם השרת זמין
//     axios
//       .get("http://localhost:8080/api/health")
//       .then(() => {
//         // שינוי הנתיב לנתיב הנכון בשרת
//         axios
//           .put("http://localhost:8080/api/recipes", data)
//           .then((response) => {
//             const data = response.data as {
//               Id?: number;
//               id?: number;
//               Name?: string;
//               title?: string;
//               CategoryId?: number;
//               categoryId?: number;
//               Img?: string;
//               img?: string;
//               Duration?: number;
//               duration?: number;
//               Difficulty?: number;
//               difficulty?: number;
//               Description?: string;
//               description?: string;
//               Ingredients?: any[];
//               ingredients?: any[];
//               Instructions?: any[];
//               instructions?: any[];
//               UserId?: number;
//               userId?: number;
//             };
//             const recipeData = {
//               Id: data.Id || data.id || 0,
//               Name: data.Name || data.title || "",
//               CategoryId: data.CategoryId || data.categoryId || 0,
//               Img: data.Img || data.img || "",
//               Duration: data.Duration || data.duration || 0,
//               Difficulty: data.Difficulty || data.difficulty || 1,
//               Description: data.Description || data.description || "",
//               Ingredients: data.Ingredients || data.ingredients || [],
//               Instructions: data.Instructions || data.instructions || [],
//               UserId: data.UserId || data.userId,
//             }
//             dispatch(editRecipeAction(recipeData))
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "המתכון שונה בהצלחה",
//               showConfirmButton: false,
//               timer: 1500,
//             })
//             navig("/recipes")
//           })
//           .catch((err) => {
//             console.error("Error editing recipe:", err)
//             Swal.fire({
//               position: "top-end",
//               icon: "error",
//               title: "קרתה תקלה בעריכת המתכון נסה שנית",
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
//other version
// import axios from "axios"
// import Swal from "sweetalert2"
// import { editRecipe as editRecipeAction } from "../../store/recipesSlice"

// export default function editRecipe(data: any, navig: any) {
//   console.log("Editing recipe:", data)
//   return (dispatch: (action: { type: string; payload?: any }) => void) => {
//     // שליחת הבקשה ישירות ללא בדיקת זמינות
//     axios
//       .put("http://localhost:8080/api/recipes", data)
//       .then((response) => {
//         const data = response.data as {
//           Id?: number;
//           id?: number;
//           Name?: string;
//           title?: string;
//           CategoryId?: number;
//           categoryId?: number;
//           Img?: string;
//           img?: string;
//           Duration?: number;
//           duration?: number;
//           Difficulty?: number;
//           difficulty?: number;
//           Description?: string;
//           description?: string;
//           Ingredients?: any[];
//           ingredients?: any[];
//           Instructions?: any[];
//           instructions?: any[];
//           UserId?: number;
//           userId?: number;
//         };
//         const recipeData = {
//           Id: data.Id || data.id || 0,
//           Name: data.Name || data.title || "",
//           CategoryId: data.CategoryId || data.categoryId || 0,
//           Img: data.Img || data.img || "",
//           Duration: data.Duration || data.duration || 0,
//           Difficulty: data.Difficulty || data.difficulty || 1,
//           Description: data.Description || data.description || "",
//           Ingredients: data.Ingredients || data.ingredients || [],
//           Instructions: data.Instructions || data.instructions || [],
//           UserId: data.UserId || data.userId,
//         }
//         dispatch(editRecipeAction(recipeData))
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "המתכון שונה בהצלחה",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         navig("/recipes")
//       })
//       .catch((err) => {
//         console.error("Error editing recipe:", err)
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "קרתה תקלה בעריכת המתכון נסה שנית",
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
// }
////other version
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

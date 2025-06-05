
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


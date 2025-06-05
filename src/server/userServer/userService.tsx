
import axios from "axios"
import swal from "sweetalert"
import type { Dispatch } from "redux"
import { setUser } from "../../store/userSlice"

export interface UserData {
  UserName: string
  Password: string
  Name: string
  Phone?: number
  Email?: string
  Tz?: number
}

export function addNewUser(data: UserData) {
  console.log("Adding new user:", data)
  return (dispatch: Dispatch) => {
    // שינוי הנתיב לנתיב הנכון בשרת
    axios
      .post<any>("http://localhost:8080/api/user/sighin", data)
      .then((response) => {
        dispatch(setUser(response.data))
        swal("ברוך הבא", response.data.Name, "success")
      })
      .catch((error) => {
        console.error("Error adding user:", error)
        swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
      })
  }
}

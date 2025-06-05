
import axios from "axios"
import swal from "sweetalert"
import type { Dispatch } from "redux"
import { setUser } from "../../store/userSlice"

interface LoginData {
  UserName: string
  Password: string
}

export default function loginUser(data: LoginData) {
  console.log("Login attempt:", data)
  return (dispatch: Dispatch) => {
    axios
      .post<any>("http://localhost:8080/api/user/login", data)
      .then((response) => {
        console.log("Login successful:", response.data)
        dispatch(setUser(response.data))
        swal("ברוך הבא", response.data.Name, "success")
      })
      .catch((error) => {
        console.error("Login failed:", error)
        swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
      })
  }
}

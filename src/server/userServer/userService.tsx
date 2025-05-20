// import axios from "axios"
// import swal from 'sweetalert'

// export function addNewUser(data) {
//     console.log(data)
//     return dispatch => {
//         axios.post("http://localhost:8080/api/user/sighin", data)
//             .then(x => {
//                 dispatch({ type: 'SET_USER', payload: x.data })
//                 swal("ברוך הבא", x.data.Name, "success")
//             })
//             .catch(err => swal("החיבור נכשל", " המידע שנשלח אינו תקין", "error")).finally()

//     }
// }

//גירסה אחרת של קומפיילוט

// import axios from "axios";
// import swal from "sweetalert";
// import type { Dispatch } from "redux";

// interface UserData {
//   UserName: string;
//   Password: string;
//   Name: string;
//   Phone: number;
//   Email?: string;
//   Tz?: number;
// }

// interface SetUserAction {
//   type: "SET_USER";
//   payload: UserData;
// }

//  export function addNewUser(data: UserData) {
//   console.log(data);
//   return (dispatch: Dispatch<SetUserAction>) => {
//     axios
//       .post<UserData>("http://localhost:8080/api/user/sighin", data)
//       .then((response) => {
//         dispatch({ type: "SET_USER", payload: response.data });
//         swal("ברוך הבא", response.data.Name, "success");
//       })
//       .catch(() =>
//         swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
//       );
//   };
// }

//other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// export interface UserData {
//   UserName: string
//   Password: string
//   Name: string
//   Phone?: number
//   Email?: string
//   Tz?: number
// }

// export function addNewUser(data: UserData) {
//   console.log("Adding new user:", data)
//   return (dispatch: Dispatch) => {
//     axios
//       .post<any>("http://localhost:8080/api/user/sighin", data)
//       .then((response) => {
//         dispatch(setUser(response.data))
//         swal("ברוך הבא", response.data.Name, "success")
//       })
//       .catch((error) => {
//         console.error("Error adding user:", error)
//         swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
//       })
//   }
// }
// //other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// export interface UserData {
//   UserName: string
//   Password: string
//   Name: string
//   Phone?: number
//   Email?: string
//   Tz?: number
// }

// export function addNewUser(data: UserData) {
//   console.log("Adding new user:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין לפני שליחת הבקשה
//     axios
//       // .get("http://localhost:8080/api/health")
//       // .then(() => {
//         // השרת זמין, שלח את הבקשה
//         axios
//           .post<any>("http://localhost:8080/api/user/sighin", data)
//           .then((response) => {
//             dispatch(setUser(response.data))
//             swal("ברוך הבא", response.data.Name, "success")
//           })
//           .catch((error) => {
//             console.error("Error adding user:", error)
//             swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
//           })
//       // })
//       .catch((err) => {
//         console.error("Server not available:", err)
//         swal("השרת אינו זמין", "וודא שהשרת פועל בכתובת http://localhost:8080", "error")
//       })
//   }
// }
// //other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// export interface UserData {
//   UserName: string
//   Password: string
//   Name: string
//   Phone?: number
//   Email?: string
//   Tz?: number
// }

// export function addNewUser(data: UserData) {
//   console.log("Adding new user:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין לפני שליחת הבקשה
//     axios
//       .get("http://localhost:8080/api/health")
//       .then(() => {
//         // השרת זמין, שלח את הבקשה - שינוי הנתיב לנתיב הנכון בשרת
//         axios
//           .post<any>("http://localhost:8080/api/users/signin", data)
//           .then((response) => {
//             dispatch(setUser(response.data))
//             swal("ברוך הבא", response.data.Name, "success")
//           })
//           .catch((error) => {
//             console.error("Error adding user:", error)
//             swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
//           })
//       })
//       .catch((err) => {
//         console.error("Server not available:", err)
//         swal("השרת אינו זמין", "וודא שהשרת פועל בכתובת http://localhost:8080", "error")
//       })
//   }
// }

// //other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// export interface UserData {
//   UserName: string
//   Password: string
//   Name: string
//   Phone?: number
//   Email?: string
//   Tz?: number
// }

// export function addNewUser(data: UserData) {
//   console.log("Adding new user:", data)
//   return (dispatch: Dispatch) => {
//     // שליחת הבקשה ישירות ללא בדיקת זמינות
//     axios
//       .post<any>("http://localhost:8080/api/users/signin", data)
//       .then((response) => {
//         dispatch(setUser(response.data))
//         swal("ברוך הבא", response.data.Name, "success")
//       })
//       .catch((error) => {
//         console.error("Error adding user:", error)
//         swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
//       })
//   }
// }
// //other
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

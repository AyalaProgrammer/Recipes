// import axios from "axios"
// import swal from 'sweetalert'

// export default function loginUser(data) {
//     return dispatch => {
//         axios.post("http://localhost:8080/api/user/login", data)
//             .then(x => {
//                 dispatch({ type: 'SET_USER', payload: x.data })
//                 swal("ברוך הבא",x.data.Name,"success")
//             })
//             .catch(err =>  swal("החיבור נכשל","שם משתמש או סיסמא אינו תקין","error"))
//     }

// }
//גירסה נוספת של קומפיילוט

// import axios from "axios";
// import swal from "sweetalert";
// import type { Dispatch } from "redux";

// interface LoginData {
//   UserName: string;
//   Password: string;
// }

// interface SetUserAction {
//   type: "SET_USER";
//   payload: {
//     Name: string;
//     [key: string]: any; // במידה ויש שדות נוספים
//   };
// }

// export default function loginUser(data: LoginData) {
//   return (dispatch: Dispatch<SetUserAction>) => {
//     axios
//       .post("http://localhost:8080/api/user/login", data)
//       .then((response) => {
//         dispatch({ type: "SET_USER", payload: response.data });
//         swal("ברוך הבא", response.data.Name, "success");
//       })
//       .catch(() =>
//         swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
//       );
//   };
// }

// //גירסה נוספת של קומפיילוט
// import axios from "axios";
// import swal from "sweetalert";
// import type { Dispatch } from "redux";

// interface LoginData {
//   Username: string;
//   Password: string;
// }

// interface UserData {
//   Name: string;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// interface SetUserAction {
//   type: "SET_USER";
//   payload: UserData;
// }

// export default function loginUser(data: LoginData) {
//   return (dispatch: Dispatch<SetUserAction>) => {
//     axios
//       .post<UserData>("http://localhost:8080/api/user/login", data) // הוספת טיפוס לתגובה
//       .then((response) => {
//         dispatch({ type: "SET_USER", payload: response.data });
//         swal("ברוך הבא", response.data.Name, "success");
//       })
//       .catch(() =>
//         swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
//       );
//   };
// }

//other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// interface LoginData {
//   Username: string
//   Password: string
// }

// export default function loginUser(data: LoginData) {
//   console.log("Login attempt:", data)
//   return (dispatch: Dispatch) => {
//     axios
//       .post<any>("http://localhost:8080/api/user/login", data)
//       .then((response) => {
//         console.log("Login successful:", response.data)
//         dispatch(setUser(response.data))
//         swal("ברוך הבא", response.data.Name, "success")
//       })
//       .catch((error) => {
//         console.error("Login failed:", error)
//         swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
//       })
//   }
// }
// //other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// interface LoginData {
//   Username: string
//   Password: string
// }

// export default function loginUser(data: LoginData) {
//   console.log("Login attempt:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין לפני שליחת הבקשה
//     axios
//       // .get("http://localhost:8080/api/health")
//       // .then(() => {
//         // השרת זמין, שלח את הבקשה
//         axios
//           .post<any>("http://localhost:8080/api/user/login", data)
//           .then((response) => {
//             console.log("Login successful:", response.data)
//             dispatch(setUser(response.data))
//             swal("ברוך הבא", response.data.Name, "success")
//           })
//           .catch((error) => {
//             console.error("Login failed:", error)
//             swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
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

// interface LoginData {
//   Username: string
//   Password: string
// }

// export default function loginUser(data: LoginData) {
//   console.log("Login attempt:", data)
//   return (dispatch: Dispatch) => {
//     // בדיקה אם השרת זמין לפני שליחת הבקשה
//     axios
//       .get("http://localhost:8080/api/health")
//       .then(() => {
//         // השרת זמין, שלח את הבקשה - שינוי הנתיב לנתיב הנכון בשרת
//         axios
//           .post<any>("http://localhost:8080/api/users/login", data)
//           .then((response) => {
//             console.log("Login successful:", response.data)
//             dispatch(setUser(response.data))
//             swal("ברוך הבא", response.data.Name, "success")
//           })
//           .catch((error) => {
//             console.error("Login failed:", error)
//             swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
//           })
//       })
//       .catch((err) => {
//         console.error("Server not available:", err)
//         swal("השרת אינו זמין", "וודא שהשרת פועל בכתובת http://localhost:8080", "error")
//       })
//   }
// }

//other
// import axios from "axios"
// import swal from "sweetalert"
// import type { Dispatch } from "redux"
// import { setUser } from "../../store/userSlice"

// interface LoginData {
//   Username: string
//   Password: string
// }

// export default function loginUser(data: LoginData) {
//   console.log("Login attempt:", data)
//   return (dispatch: Dispatch) => {
//     // שליחת הבקשה ישירות ללא בדיקת זמינות
//     axios
//       .post<any>("http://localhost:8080/api/users/login", data)
//       .then((response) => {
//         console.log("Login successful:", response.data)
//         dispatch(setUser(response.data))
//         swal("ברוך הבא", response.data.Name, "success")
//       })
//       .catch((error) => {
//         console.error("Login failed:", error)
//         swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
//       })
//   }
// }
// //other
import axios from "axios"
import swal from "sweetalert"
import type { Dispatch } from "redux"
import { setUser } from "../../store/userSlice"

interface LoginData {
  Username: string
  Password: string
}

export default function loginUser(data: LoginData) {
  console.log("Login attempt:", data)
  return (dispatch: Dispatch) => {
    // שינוי הנתיב לנתיב הנכון בשרת
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

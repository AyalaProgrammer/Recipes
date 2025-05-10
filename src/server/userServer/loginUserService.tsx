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

//גירסה נוספת של קומפיילוט
import axios from "axios";
import swal from "sweetalert";
import type { Dispatch } from "redux";

interface LoginData {
  UserName: string;
  Password: string;
}

interface UserData {
  Name: string;
  [key: string]: any; // במידה ויש שדות נוספים
}

interface SetUserAction {
  type: "SET_USER";
  payload: UserData;
}

export default function loginUser(data: LoginData) {
  return (dispatch: Dispatch<SetUserAction>) => {
    axios
      .post<UserData>("http://localhost:8080/api/user/login", data) // הוספת טיפוס לתגובה
      .then((response) => {
        dispatch({ type: "SET_USER", payload: response.data });
        swal("ברוך הבא", response.data.Name, "success");
      })
      .catch(() =>
        swal("החיבור נכשל", "שם משתמש או סיסמא אינו תקין", "error")
      );
  };
}
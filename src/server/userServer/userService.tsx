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

import axios from "axios";
import swal from "sweetalert";
import type { Dispatch } from "redux";

interface UserData {
  UserName: string;
  Password: string;
  Name: string;
  Phone: number;
  Email?: string;
  Tz?: number;
}

interface SetUserAction {
  type: "SET_USER";
  payload: UserData;
}

 export function addNewUser(data: UserData) {
  console.log(data);
  return (dispatch: Dispatch<SetUserAction>) => {
    axios
      .post<UserData>("http://localhost:8080/api/user/sighin", data)
      .then((response) => {
        dispatch({ type: "SET_USER", payload: response.data });
        swal("ברוך הבא", response.data.Name, "success");
      })
      .catch(() =>
        swal("החיבור נכשל", "המידע שנשלח אינו תקין", "error")
      );
  };
}


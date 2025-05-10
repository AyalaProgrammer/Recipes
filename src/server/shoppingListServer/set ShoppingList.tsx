// import axios from "axios"

// export const setShoppingList = (user) => {
//     return dispatch => {
//         if (!user)
//             dispatch({ type: 'SET_TOSHOPPING', payload: [] })
//         else
//             axios.get(`http://localhost:8080/api/bay/${user?.Id}`).then(x => {
//                 dispatch({ type: 'SET_TOSHOPPING', payload: x.data })
//             })
//                 .catch(err => console.log(err))
//     }
// }

//גירסה אחרת
import axios from "axios";
import type { Dispatch } from "redux";

interface User {
  Id: number;
  [key: string]: any; // במידה ויש שדות נוספים
}

interface SetShoppingListAction {
  type: "SET_TOSHOPPING";
  payload: any[]; // ניתן להחליף ב-Interface מותאם אם יש מבנה קבוע לפריטים
}

export const setShoppingList = (user: User | null) => {
  return (dispatch: Dispatch<SetShoppingListAction>) => {
    if (!user) {
      dispatch({ type: "SET_TOSHOPPING", payload: [] });
    } else {
      axios
        .get<any[]>(`http://localhost:8080/api/bay/${user?.Id}`)
        .then((response) => {
          dispatch({ type: "SET_TOSHOPPING", payload: response.data });
        })
        .catch((err) => console.error(err));
    }
  };
};
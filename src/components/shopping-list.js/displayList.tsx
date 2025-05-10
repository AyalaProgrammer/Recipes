// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import deleteShopping from "../../server/shoppingListServer/deleteShopping";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
// import { IconButton } from "@mui/material";
// import { setShoppingList } from "../../server/shoppingListServer/set ShoppingList";

// const DisplayList = () => {

//     const user = useSelector(state => state.user)
//     const shopping = useSelector(state => state.toShopping)
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (!shopping.length)
//             dispatch(setShoppingList(user));
//     }, [])
//     return (<div className="background-img backgroundPage">
//         <table className="soppingList">
//             <tbody>
//                 {shopping?.map((item) => (
//                     <tr key={item.Id}>
//                         <td className="l">
//                             <IconButton onClick={() => dispatch(editShopping(item, user, -1))}>
//                                 <RemoveIcon />
//                             </IconButton>
//                             <IconButton onClick={() => dispatch(editShopping(item, user, 1))}>
//                                 <AddIcon />
//                             </IconButton>
//                             <IconButton onClick={() => dispatch(deleteShopping(item))}>
//                                 <RemoveShoppingCartIcon />
//                             </IconButton>
//                         </td>
//                         <td>{item?.Name}</td>
//                         <td>{item?.Count}</td>

//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>)

// }
// export default DisplayList;
//גירסה אחרת
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import deleteShopping from "../../server/shoppingListServer/deleteShopping";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import { IconButton } from "@mui/material";
// // import { setShoppingList } from "../../server/shoppingListServer/setShoppingList"; // Ensure this file exists at the specified path
// import type { RootState, AppDispatch } from "../../store";

// interface ShoppingItem {
//   Id: number;
//   Name: string;
//   Count: number;
//   [key: string]: any; // במידה ויש שדות נוספים
// }

// const DisplayList: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   interface User {
//     Id: number; // Ensure this matches the expected property name in editShopping
//     name: string;
//     email: string;
//     // Add other fields as necessary
//   }
//   const user = useSelector((state: RootState) => state.user) as User;
//   const shopping = useSelector((state: RootState) => state.toShopping as ShoppingItem[]);

//   useEffect(() => {
//     if (!shopping.length) {
//       dispatch(setShoppingList(user));
//     }
//   }, [shopping.length, user, dispatch]);

//   return (
//     <div className="background-img backgroundPage">
//       <table className="soppingList">
//         <tbody>
//           {shopping?.map((item) => (
//             <tr key={item.Id}>
//               <td className="l">
//                 <IconButton onClick={() => dispatch(editShopping(item, user, -1))}>
//                   <RemoveIcon />
//                 </IconButton>
//                 <IconButton onClick={() => dispatch(editShopping(item, user, 1))}>
//                   <AddIcon />
//                 </IconButton>
//                 <IconButton onClick={() => dispatch(deleteShopping(item))}>
//                   <RemoveShoppingCartIcon />
//                 </IconButton>
//               </td>
//               <td>{item?.Name}</td>
//               <td>{item?.Count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DisplayList;

// function setShoppingList(user: unknown): any {
//   throw new Error("Function not implemented.");
// }
//עוד גירסה
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import deleteShopping from "../../server/shoppingListServer/deleteShopping";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import { IconButton } from "@mui/material";
// // import { setShoppingList } from "../../server/shoppingListServer/setShoppingList";
// import type { RootState, AppDispatch } from "../../store";


// interface User {
//   Id: number; // Ensure this matches the expected property name in editShopping
//   name: string;
//   email: string;
//   // Add other fields as necessary
// }

// const DisplayList: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const user = useSelector((state: RootState) => state.user) as unknown as User;
//   const shopping = useSelector((state: RootState) => state.toShopping.toShopping);

//   useEffect(() => {
//     if (!shopping.length) {
//       dispatch(setShoppingList(user));
//     }
//   }, [shopping.length, user, dispatch]);

//   return (
//     <div className="background-img backgroundPage">
//       <table className="soppingList">
//         <tbody>
//           {shopping?.map((item) => (
//             <tr key={item.Id}>
//               <td className="l">
//                 <IconButton onClick={() => dispatch(editShopping(item, user, -1))}>
//                   <RemoveIcon />
//                 </IconButton>
//                 <IconButton onClick={() => dispatch(editShopping(item, user, 1))}>
//                   <AddIcon />
//                 </IconButton>
//                 <IconButton onClick={() => dispatch(deleteShopping(item))}>
//                   <RemoveShoppingCartIcon />
//                 </IconButton>
//               </td>
//               <td>{item?.Name}</td>
//               <td>{item?.Count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DisplayList;

// function setShoppingList(_user: User): any {
//   throw new Error("Function not implemented.");
// }
//עוד גירסה
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import deleteShopping from "../../server/shoppingListServer/deleteShopping";
import editShopping from "../../server/shoppingListServer/editShopping";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
// import { setShoppingList } from "../../server/shoppingListServer/setShoppingList"; // וודא שהפונקציה הזו קיימת ומיובאת כראוי
import type { RootState, AppDispatch } from "../../store";


interface User {
  Id: number; // Ensure this matches the expected property name in editShopping
  name: string;
  email: string;
  // Add other fields as necessary
}

const DisplayList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // תיקון: גישה למאפיין user בתוך state.main
  const user = useSelector((state: RootState) => state.main.user) as unknown as User;
  const shopping = useSelector((state: RootState) => state.toShopping.toShopping);

  // הערה: הפונקציה setShoppingList עדיין לא מיושמת בקוד ששיתפת
  // וודא שהיא מיובאת ומוגדרת כראוי
  useEffect(() => {
    if (!shopping.length) {
      // dispatch(setShoppingList(user)); // שורה זו תגרום לשגיאה אם setShoppingList לא מיושמת
    }
  }, [shopping.length, user, dispatch]);

  return (
    <div className="background-img backgroundPage">
      <table className="soppingList">
        <tbody>
          {shopping?.map((item) => (
            <tr key={item.Id}>
              <td className="l">
                <IconButton onClick={() => dispatch(editShopping(item, user, -1))}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(editShopping(item, user, 1))}>
                  <AddIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(deleteShopping(item))}>
                  <RemoveShoppingCartIcon />
                </IconButton>
              </td>
              <td>{item?.Name}</td>
              <td>{item?.Count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;

// הערה: הפונקציה הזו עדיין לא מיושמת.
// וודא שאתה מייבא את setShoppingList מהקובץ הנכון


// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// const Header = () => {

//     const dispatch = useDispatch()
//     const signout = () => {
//         dispatch({ type: 'SET_USER', payload: null })
//         dispatch({ type: 'SET_TOSHOPPING', payload: [] })
//     }

//     const user = useSelector(state => state.user)
//     if (!user)
//         return <div className="header login2">
//             <div className="App-header">
//                 <Link to="/login">כניסה</Link>
//                 <div>|</div>
//                 <Link to="/sighin">הרשמה</Link>
//             </div>
//             <div className='my-img'></div>

//         </div>
//     else return <div className='header'>
//         <div className="App-header">
//             <Link to="/homePage">דף הבית </Link>
//             <div>|</div>
//             <Link to="/recipes">מתכונים</Link>
//             <div>|</div>
//             <Link to="/myRecipes">המתכונים שלי</Link>
//             <div>|</div>
//             <Link to="/addRecipe">הוסף מתכון</Link>
//             <div>|</div>
//             <Link to="/categories">קטגוריות</Link>
//             <div>|</div>
//             <Link to="/displayList">הקניות שלי</Link>

//         </div>

//         <div className="App-header">
//             <Link to="/" onClick={() => signout()}>
//                 <div className='user'>
//                     <div> {user.Name}<PersonOutlineIcon /></div>
//                     <div>החלף משתמש</div>
//                 </div> </Link>
//             <div className='my-img'></div>
//         </div>

//     </div>
// }
// export default Header;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// // טיפוס נתונים עבור המשתמש
// interface User {
//     Name: string;
// }

// const Header: React.FC = () => {
//     const dispatch = useDispatch();

//     const signout = () => {
//         dispatch({ type: 'SET_USER', payload: null });
//         dispatch({ type: 'SET_TOSHOPPING', payload: [] });
//     }

//     const user = useSelector((state: any) => state.user) as User | null;

//     if (!user) {
//         return (
//             <div className="header login2">
//                 <div className="App-header">
//                     <Link to="/login">כניסה</Link>
//                     <div>|</div>
//                     <Link to="/sighin">הרשמה</Link>
//                 </div>
//                 <div className='my-img'></div>
//             </div>
//         );
//     } else {
//         return (
//             <div className='header'>
//                 <div className="App-header">
//                     <Link to="/homePage">דף הבית </Link>
//                     <div>|</div>
//                     <Link to="/recipes">מתכונים</Link>
//                     <div>|</div>
//                     <Link to="/myRecipes">המתכונים שלי</Link>
//                     <div>|</div>
//                     <Link to="/addRecipe">הוסף מתכון</Link>
//                     <div>|</div>
//                     <Link to="/categories">קטגוריות</Link>
//                     <div>|</div>
//                     <Link to="/displayList">הקניות שלי</Link>
//                      <div>|</div>
//                     <Link to="/login">התחברות</Link>
//                     <div>|</div>
//                     <Link to="/sighin">הרשמה</Link>
//                     <div>|</div>
//                 </div>

//                 <div className="App-header">
//                     <Link to="/" onClick={() => signout()}>
//                         <div className='user'>
//                             <div>{user.Name}<PersonOutlineIcon /></div>
//                             <div>החלף משתמש</div>
//                         </div>
//                     </Link>
//                     <div className='my-img'></div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Header;
//גירסה אחרת של וי0

import type React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"

// טיפוס נתונים עבור המשתמש
interface User {
  Name: string
  Id: number
}

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signout = () => {
    dispatch({ type: "SET_USER", payload: null })
    dispatch({ type: "SET_TOSHOPPING", payload: [] })
    navigate("/")
  }

  const user = useSelector((state: any) => state.user) as User | null

  if (!user) {
    return (
      <div className="header login2">
        <div className="App-header">
          <Link to="/login">כניסה</Link>
          <div>|</div>
          <Link to="/sighin">הרשמה</Link>
        </div>
        <div className="my-img"></div>
      </div>
    )
  } else {
    return (
      <div className="header">
        <div className="App-header">
          <Link to="/homePage">דף הבית </Link>
          <div>|</div>
          <Link to="/recipes">מתכונים</Link>
          <div>|</div>
          <Link to="/myRecipes">המתכונים שלי</Link>
          <div>|</div>
          <Link to="/addRecipe">הוסף מתכון</Link>
          <div>|</div>
          <Link to="/categories">קטגוריות</Link>
          <div>|</div>
          <Link to="/displayList">הקניות שלי</Link>
        </div>

        <div className="App-header">
          <div onClick={signout} className="user" style={{ cursor: "pointer" }}>
            <div>
              {user.Name}
              <PersonOutlineIcon />
            </div>
            <div>החלף משתמש</div>
          </div>
          <div className="my-img"></div>
        </div>
      </div>
    )
  }
}

export default Header
//other version

// import type React from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
// import { clearUser } from "../store/userSlice"
// import type { RootState } from "../store"

// const Header: React.FC = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const signout = () => {
//     dispatch(clearUser())
//     dispatch({ type: "SET_TOSHOPPING", payload: [] })
//     navigate("/login")
//   }

//   const user = useSelector((state: RootState) => state.user.user)

//   if (!user) {
//     return (
//       <div className="header login2">
//         <div className="App-header">
//           <Link to="/login">כניסה</Link>
//           <div>|</div>
//           <Link to="/sighin">הרשמה</Link>
//         </div>
//         <div className="my-img"></div>
//       </div>
//     )
//   } else {
//     return (
//       <div className="header">
//         <div className="App-header">
//           <Link to="/homePage">דף הבית </Link>
//           <div>|</div>
//           <Link to="/recipes">מתכונים</Link>
//           <div>|</div>
//           <Link to="/myRecipes">המתכונים שלי</Link>
//           <div>|</div>
//           <Link to="/addRecipe">הוסף מתכון</Link>
//           <div>|</div>
//           <Link to="/categories">קטגוריות</Link>
//           <div>|</div>
//           <Link to="/displayList">הקניות שלי</Link>
//         </div>

//         <div className="App-header">
//           <div className="user" style={{ cursor: "pointer" }} onClick={signout}>
//             <div>
//               {user.Name}
//               <PersonOutlineIcon />
//             </div>
//             <div>החלף משתמש</div>
//           </div>
//           <div className="my-img"></div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Header


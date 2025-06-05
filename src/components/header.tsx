

import type React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import { clearUser } from "../store/userSlice"
import type { RootState } from "../store"

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signout = () => {
    dispatch(clearUser())
    dispatch({ type: "SET_TOSHOPPING", payload: [] })
    navigate("/login")
  }

  const user = useSelector((state: RootState) => state.user.user)

  if (!user) {
    return (
      <div className="header login2">
        <div className="App-header">
          <Link to="/">דף הבית</Link>
          <div>|</div>
          <Link to="/recipes">מתכונים</Link>
          <div>|</div>
          <Link to="/categories">קטגוריות</Link>
        </div>
        <div className="App-header">
          <Link to="/login" className="my-button">
            התחברות
          </Link>
          <Link to="/sighin" className="my-button">
            הרשמה
          </Link>
          <div className="my-img"></div>
        </div>
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
          <div className="user" style={{ cursor: "pointer" }} onClick={signout}>
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


import axios from "axios"
import type { Dispatch } from "redux"

export interface ShoppingItem {
  Id?: number
  Name: string
  Count: number | string
  Type: string
  UserId?: number
}

export interface User {
  Id: number
  Name: string
}

export default function editShopping(item: ShoppingItem, user: User, quantity: number) {
  console.log("Editing shopping item:", item, "for user:", user, "quantity:", quantity)

  // המרת Count לסוג number אם הוא string
  const count = typeof item.Count === "string" ? Number.parseInt(item.Count) : item.Count

  const shoppingItem = {
    ...item,
    Count: count,
    UserId: user.Id,
  }

  return (dispatch: Dispatch) => {
    // שינוי הנתיב לנתיב הנכון בשרת
    axios
      .post("http://localhost:8080/api/shopping-list", shoppingItem)
      .then((response) => {
        dispatch({ type: "EDIT_SHOPPING", payload: response.data })
      })
      .catch((error) => {
        console.error("Error editing shopping item:", error)
      })
  }
}

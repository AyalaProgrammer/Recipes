import type { AnyAction } from "redux";

interface ShoppingItem {
  Id: number;
  Name: string;
  Count: number;
  [key: string]: any; // במידה ויש שדות נוספים
}

interface ShoppingState {
  toShopping: ShoppingItem[];
}

const initialState: ShoppingState = {
  toShopping: [],
};

const shoppingReducer = (state = initialState, action: AnyAction): ShoppingState => {
  switch (action.type) {
    case "SET_TOSHOPPING":
      return { ...state, toShopping: action.payload };
    case "DELETE_TOSHOPPING":
      return {
        ...state,
        toShopping: state.toShopping.filter((item) => item.Id !== action.payload.Id),
      };
    case "EDIT_SHOPPING":
      return {
        ...state,
        toShopping: state.toShopping.map((item) =>
          item.Id === action.payload.Id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export default shoppingReducer;
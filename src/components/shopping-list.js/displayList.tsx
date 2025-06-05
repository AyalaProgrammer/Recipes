

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import deleteShopping from "../../server/shoppingListServer/deleteShopping";
import editShopping from "../../server/shoppingListServer/editShopping";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import type { RootState, AppDispatch } from "../../store";
import { createSelector } from 'reselect';

// Interface definitions
interface ShoppingItem {
  Id: number;
  Name: string;
  Count: number;
}

// Define the User interface
interface User {
  Id: number;
  Name: string; // Added the 'Name' property to match the required type
  name: string;
  email: string;
}

const selectRecipes = (state: RootState) => state.recipes.recipes;

const selectShoppingList = createSelector(
  [selectRecipes],
  (recipes) => (recipes || []).map(recipe => ({
    Id: parseInt(String(recipe.Id), 10),
    Name: recipe.Name || "Unknown",
    Count: 0
  }))
);

const DisplayList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user) as User | null; 
  const shopping = useSelector(selectShoppingList) as ShoppingItem[];

  useEffect(() => {
    if (!shopping.length && user) {
      // dispatch(setShoppingList(user)); // ודא שהפונקציה קיימת
    }
  }, [shopping.length, user, dispatch]);

  return (
    <div className="background-img backgroundPage">
      <table className="soppingList">
        <tbody>
          {shopping?.map((item: ShoppingItem) => (
            <tr key={item.Id}>
              <td className="l">
                <IconButton onClick={() => dispatch(editShopping({ ...item, Type: "defaultType" }, user!, -1))}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(editShopping({ ...item, Type: "defaultType" }, user!, 1))}>
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

// import * as Actions from './action'

// const initalseState = {
//     user: null,
//     recipes: [],
//     categories: [],
//     toShopping: []
// }

// const reducer = (state = initalseState, action) => {

//     switch (action.type) {
//         case Actions.SET_USER:
//             return { ...state, user: action.payload }
//         case Actions.SET_CATEGORIES:
//             return { ...state, categories: action.payload }
//         case Actions.ADD_CATEGORIES:
//             const categories = [...state.categories];
//             categories.push(action.payload);
//             return { ...state, categories }
//         case Actions.SET_RECIPE:
//             return { ...state, recipes: action.payload }
//         case Actions.ADD_RECIPE:
//             const recipes = [...state.recipes];
//             recipes.push(action.payload);
//             return { ...state, recipes }
//         case Actions.EDIT_RECIPE: {
//             const recipes = [...state.recipes];
//             const findIndex = recipes.findIndex(x => x.Id == action.payload.Id);
//             recipes[findIndex] = action.payload;
//             return { ...state, recipes }
//         }
//         case Actions.DELETE_RECIPE: {
//             const recipes = state.recipes.filter(x => x.Id !== action.payload.Id)
//             return { ...state, recipes }
//         }
//         case Actions.SET_TOSHOPPING:
//             return { ...state, toShopping: action.payload }

//         case Actions.DELETE_TOSHOPPING: {
//             const toShopping = state.toShopping.filter(x => x.Id !== action.payload.Id)
//             return { ...state, toShopping }
//         }
//         case Actions.EDIT_SHOPPING: {
//             const toShopping = [...state.toShopping];
//             const findIndex = toShopping.findIndex(x => x.Id == action.payload.Id);
//             if (findIndex >= 0)
//                 toShopping[findIndex] = action.payload;
//             else toShopping.push(action.payload)
//             return { ...state, toShopping }
//         }
//         default: return { ...state }
//     }
// }

// export default reducer;

//גירסה אחרת של קומפיילוט

// import * as Actions from './action';

// interface User {
//   Name: string;
//   [key: string]: any;
// }

// interface Recipe {
//   Id: number;
//   [key: string]: any;
// }

// interface Category {
//   Id: number;
//   Name: string;
// }

// interface ShoppingItem {
//   Id: number;
//   [key: string]: any;
// }

// interface State {
//   user: User | null;
//   recipes: Recipe[];
//   categories: Category[];
//   toShopping: ShoppingItem[];
// }

// interface Action {
//   type: string;
//   payload?: any;
// }

// const initialState: State = {
//   user: null,
//   recipes: [],
//   categories: [],
//   toShopping: [],
// };

// const reducer = (state: State = initialState, action: Action): State => {
//   switch (action.type) {
//     case Actions.SET_USER:
//       return { ...state, user: action.payload };
//     case Actions.SET_CATEGORIES:
//       return { ...state, categories: action.payload };
//     case Actions.ADD_CATEGORIES: {
//       const categories = [...state.categories];
//       categories.push(action.payload);
//       return { ...state, categories };
//     }
//     case Actions.SET_RECIPE:
//       return { ...state, recipes: action.payload };
//     case Actions.ADD_RECIPE: {
//       const recipes = [...state.recipes];
//       recipes.push(action.payload);
//       return { ...state, recipes };
//     }
//     case Actions.EDIT_RECIPE: {
//       const recipes = [...state.recipes];
//       const findIndex = recipes.findIndex((x) => x.Id === action.payload.Id);
//       recipes[findIndex] = action.payload;
//       return { ...state, recipes };
//     }
//     case Actions.DELETE_RECIPE: {
//       const recipes = state.recipes.filter((x) => x.Id !== action.payload.Id);
//       return { ...state, recipes };
//     }
//     case Actions.SET_TOSHOPPING:
//       return { ...state, toShopping: action.payload };
//     case Actions.DELETE_TOSHOPPING: {
//       const toShopping = state.toShopping.filter(
//         (x) => x.Id !== action.payload.Id
//       );
//       return { ...state, toShopping };
//     }
//     case Actions.EDIT_SHOPPING: {
//       const toShopping = [...state.toShopping];
//       const findIndex = toShopping.findIndex(
//         (x) => x.Id === action.payload.Id
//       );
//       if (findIndex >= 0) toShopping[findIndex] = action.payload;
//       else toShopping.push(action.payload);
//       return { ...state, toShopping };
//     }
//     default:
//       return { ...state };
//   }
// };

// export default reducer;

// //גירסה אחרת של קומפיילוט
import { createSlice } from "@reduxjs/toolkit";
import { setCategories } from "../server/categoryServer/setCategories";
import { setRecipes } from "../server/recipeServer/setRecipes";

const initialState: {
  user: any | null;
  recipes: any[];
  categories: { Id: number; Name: string }[];
  toShopping: any[];
} = {
  user: null,
  recipes: [],
  categories: [],
  toShopping: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    addRecipe(state, action) {
      state.recipes.push(action.payload);
    },
    editRecipe(state, action) {
      const index = state.recipes.findIndex((r) => r.Id === action.payload.Id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
      }
    },
    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter((r) => r.Id !== action.payload.Id);
    },
    setToShopping(state, action) {
      state.toShopping = action.payload;
    },
    editShopping(state, action) {
      const index = state.toShopping.findIndex((s) => s.Id === action.payload.Id);
      if (index !== -1) {
        state.toShopping[index] = action.payload;
      } else {
        state.toShopping.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCategories.fulfilled, (state, action) => {
      state.categories = action.payload as { Id: number; Name: string }[];
    });
    builder.addCase(setRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export const {
  setUser,
  addCategory,
  addRecipe,
  editRecipe,
  deleteRecipe,
  setToShopping,
  editShopping,
} = mainSlice.actions;

export default mainSlice.reducer;
// import {  useSelector } from "react-redux";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from "react-router-dom";

// const MyRecipes = () => {
//      const navig = useNavigate()
//     const user = useSelector(state => state.user)
//     const recipes = useSelector(state => state.recipes)

//     return (
//         <div  className="myRecipes background-img backgroundPage detailes">{recipes?.map((recipe) => (
//             (user && recipe.UserId == user.Id) ?
//             <Card className="cardDetailes" sx={{ maxWidth: 345 }} >
//             <CardMedia className="myImg"
//                 component="img"
//                 height="140"
//                 image={recipe?.Img}
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {recipe?.Name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     <h4> דרגת קושי :{recipe?.Difficulty}</h4>
//                     <h4> משך זמן : {recipe?.Duration}</h4>
//                     <div>
//                         {recipe.Ingrident?.map((i) => (
//                             <h4>  {i?.Name}: {i?.Count} {i?.Type}</h4>
//                         ))}
//                     </div>
//                     <div>
//                         <h5 >: אופן ההכנה </h5>
//                         {recipe?.Instructions?.map((i) => (
//                             <p> {i}</p>
//                         ))}

//                     </div>
//                 </Typography>
//             </CardContent>
//         </Card>:null
//         ))}</div>
//     )
// }
// export default MyRecipes;

// import React from 'react';
// import { useSelector } from "react-redux";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from "react-router-dom";

// // טיפוסי נתונים עבור המתכונים והמשתמש
// interface Ingredient {
//     Name: string;
//     Count: number;
//     Type: string;
// }

// interface Recipe {
//     Id: number;
//     Name: string;
//     Img: string;
//     Difficulty: number;
//     Duration: number;
//     UserId: number;
//     Ingrident?: Ingredient[];
//     Instructions?: string[];
// }

// interface User {
//     Id: number;
// }

// const MyRecipes: React.FC = () => {
//     const navig = useNavigate();
//     const user = useSelector((state: any) => state.user) as User;
//     const recipes = useSelector((state: any) => state.recipes) as Recipe[];

//     return (
//         <div className="myRecipes background-img backgroundPage detailes">
//             {recipes?.map((recipe) => (
//                 (user && recipe.UserId === user.Id) ? (
//                     <Card key={recipe.Id} className="cardDetailes" sx={{ maxWidth: 345 }}>
//                         <CardMedia
//                             className="myImg"
//                             component="img"
//                             height="140"
//                             image={recipe?.Img}
//                         />
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {recipe?.Name}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 <h4> דרגת קושי : {recipe?.Difficulty}</h4>
//                                 <h4> משך זמן : {recipe?.Duration}</h4>
//                                 <div>
//                                     {recipe.Ingrident?.map((ingredient, index) => (
//                                         <h4 key={index}> {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}</h4>
//                                     ))}
//                                 </div>
//                                 <div>
//                                     <h5>: אופן ההכנה </h5>
//                                     {recipe?.Instructions?.map((instruction, index) => (
//                                         <p key={index}>{instruction}</p>
//                                     ))}
//                                 </div>
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 ) : null
//             ))}
//         </div>
//     );
// }

// export default MyRecipes;

//גירסה חדשה
// import React from 'react';
// import { useSelector } from "react-redux";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from "react-router-dom";

// // טיפוסי נתונים עבור המתכונים והמשתמש
// interface Ingredient {
//     Name: string;
//     Count: number;
//     Type: string;
// }

// interface Recipe {
//     Id: number;
//     Name: string;
//     Img: string;
//     Difficulty: number;
//     Duration: number;
//     UserId: number;
//     Ingrident?: Ingredient[];
//     Instructions?: string[];
// }

// interface User {
//     Id: number;
// }

// const MyRecipes: React.FC = () => {
//     const navig = useNavigate();
//     const user = useSelector((state: any) => state.user) as User;
//     const recipes = useSelector((state: any) => state.recipes) as Recipe[] || []; // הגדרת ערך ברירת מחדל

//     return (
//         <div className="myRecipes background-img backgroundPage detailes">
//             {Array.isArray(recipes) && recipes.map((recipe) => ( // בדיקה אם recipes הוא מערך
//                 (user && recipe.UserId === user.Id) ? (
//                     <Card key={recipe.Id} className="cardDetailes" sx={{ maxWidth: 345 }}>
//                         <CardMedia
//                             className="myImg"
//                             component="img"
//                             height="140"
//                             image={recipe?.Img}
//                         />
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {recipe?.Name}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 <h4> דרגת קושי : {recipe?.Difficulty}</h4>
//                                 <h4> משך זמן : {recipe?.Duration}</h4>
//                                 <div>
//                                     {recipe.Ingrident?.map((ingredient, index) => (
//                                         <h4 key={index}> {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}</h4>
//                                     ))}
//                                 </div>
//                                 <div>
//                                     <h5>: אופן ההכנה </h5>
//                                     {recipe?.Instructions?.map((instruction, index) => (
//                                         <p key={index}>{instruction}</p>
//                                     ))}
//                                 </div>
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 ) : null
//             ))}
//         </div>
//     );
// }

// export default MyRecipes;

//other
"use client"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import type * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { IconButton } from "@mui/material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import deleteRecipe from "../../server/recipeServer/deleteRecipe"
import editShopping from "../../server/shoppingListServer/editShopping"
import type { Dispatch } from "redux"
import type { RootState } from "../../store"
import { useEffect } from "react"

// טיפוסי נתונים עבור המרכיבים והמתכון
interface Ingredient {
  Id?: number
  Name: string
  Count: number | string
  Type: string
}

interface Recipe {
  Id: number | string
  Name: string
  Img: string
  Difficulty: number
  Duration: number
  UserId?: number
  Ingredients?: Ingredient[]
  Instructions?: (string | { Step: string })[]
  Description?: string
}

const RecipeDetailes: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const location = useLocation()
  const recipe = location.state?.recipe as Recipe
  const navig = useNavigate()
  const dispatch = useDispatch<Dispatch<any>>()

  useEffect(() => {
    console.log("Recipe details:", recipe)
    console.log("Current user:", user)
  }, [recipe, user])

  if (!recipe) {
    return (
      <div className="background-img backgroundPage detailes">
        <Typography variant="h5">המתכון לא נמצא</Typography>
        <button className="my-button" onClick={() => navig("/recipes")}>
          חזרה לרשימת המתכונים
        </button>
      </div>
    )
  }

  const handleAddToShoppingList = (ingredient: Ingredient) => {
    if (!user) {
      alert("יש להתחבר כדי להוסיף לרשימת הקניות")
      navig("/login")
      return
    }

    const shoppingItem = {
      Name: ingredient.Name,
      Count: typeof ingredient.Count === "string" ? Number.parseInt(ingredient.Count) || 1 : ingredient.Count,
      Type: ingredient.Type,
    }

    dispatch(editShopping(shoppingItem, user, 1))
  }

  return (
    <div className="background-img backgroundPage detailes">
      <div className="recipe">
        <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
          <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe?.Name}
            </Typography>
            <div>
              <h4>דרגת קושי: {recipe?.Difficulty === 1 ? "קל" : recipe?.Difficulty === 2 ? "בינוני" : "קשה"}</h4>
              <h4>משך זמן: {recipe?.Duration} דקות</h4>
              {recipe.Description && <p>{recipe.Description}</p>}
            </div>
            <div>
              <h5>מרכיבים:</h5>
              {recipe.Ingredients?.map((ingredient: Ingredient, index) => (
                <div key={ingredient.Id || index}>
                  <h4>
                    {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
                    <IconButton onClick={() => handleAddToShoppingList(ingredient)}>
                      <AddShoppingCartIcon />
                    </IconButton>
                  </h4>
                </div>
              ))}
            </div>
            <div>
              <h5>אופן ההכנה:</h5>
              {recipe?.Instructions?.map((instruction, index) => (
                <p key={index}>{typeof instruction === "string" ? instruction : instruction?.Step}</p>
              ))}
            </div>
          </CardContent>
          <div className="recipe-actions">
            <button className="my-button" onClick={() => window.print()}>
              הדפסה
            </button>
            {user && recipe.UserId === user.Id && (
              <>
                <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>
                  עריכה
                </button>
                <button className="my-button" onClick={() => dispatch(deleteRecipe({ ...recipe, Id: Number(recipe.Id) }, navig))}>
                  מחיקה
                </button>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default RecipeDetailes


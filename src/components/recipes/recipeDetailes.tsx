// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import deleteRecipe from "../../server/recipeServer/deleteRecipe";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


// const RecipeDetailes = () => {
//     const user = useSelector(state => state.user)
//     const { state: { recipe } } = useLocation();
//     const navig = useNavigate()
//     const dispatch = useDispatch()
//     return <div className="background-img backgroundPage detailes">
//         <div className="recipe">
//             <Card className="cardDetailes" sx={{ maxWidth: 345 }} >
//                 <CardMedia className="myImg"
//                     component="img"
//                     height="140"
//                     image={recipe?.Img}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {recipe?.Name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         <h4> דרגת קושי :{recipe?.Difficulty}</h4>
//                         <h4> משך זמן : {recipe?.Duration}</h4>
//                         <div>
//                             {recipe.Ingridents?.map((i) => (
//                                 <h4 key={i.Id}> {i?.Name}: {i?.Count} {i?.Type}
//                                     <IconButton onClick={() => dispatch(editShopping(i, user, 1))}>
//                                         <AddShoppingCartIcon />
//                                     </IconButton>
//                                 </h4>
//                             ))}

//                         </div>
//                         <div>
//                             <h5 >: אופן ההכנה </h5>
//                             {recipe?.Instructions?.map((instruction, index) => (
//                                 <p key={index}>{instruction}</p> // Not ideal, but if no unique ID is available
//                             ))}


//                         </div>
//                     </Typography>
//                 </CardContent>
//                 <button className="my-button" onClick={x => window.print()}>הדפסה</button>
//                 {recipe.UserId == user.Id && (
//                     <>
//                         <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })} >עריכה </button>
//                         <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>מחיקה </button>

//                     </>
//                 )}
//             </Card>
//         </div></div>

// }
// export default RecipeDetailes

//גירסה ראשונה של צאט
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import deleteRecipe from "../../server/recipeServer/deleteRecipe";
// import editShopping from "../../server/shoppingListServer/editShopping";

// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//     Id: number;
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
//     Ingredients?: Ingredient[];
//     Instructions?: string[];
// }

// interface User {
//     Id: number;
// }

// const RecipeDetailes: React.FC = () => {
//     const user = useSelector((state: any) => state.user) as User;
//     const { state } = useLocation<{ recipe: Recipe }>();
//     const recipe = state.recipe;
//     const navig = useNavigate();
//     const dispatch = useDispatch();

//     return (
//         <div className="background-img backgroundPage detailes">
//             <div className="recipe">
//                 <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         className="myImg"
//                         component="img"
//                         height="140"
//                         image={recipe?.Img}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {recipe?.Name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             <h4> דרגת קושי : {recipe?.Difficulty}</h4>
//                             <h4> משך זמן : {recipe?.Duration}</h4>
//                             <div>
//                                 {recipe.Ingredients?.map((ingredient: Ingredient) => ( // הוספת סוג כאן
//                                     <h4 key={ingredient.Id}>
//                                         {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                                         <IconButton onClick={() => dispatch(editShopping(ingredient, user, 1))}>
//                                             <AddShoppingCartIcon />
//                                         </IconButton>
//                                     </h4>
//                                 ))}
//                             </div>
//                             <div>
//                                 <h5>: אופן ההכנה </h5>
//                                 {recipe?.Instructions?.map((instruction, index) => (
//                                     <p key={index}>{instruction}</p> // Not ideal, but if no unique ID is available
//                                 ))}
//                             </div>
//                         </Typography>
//                     </CardContent>
//                     <button className="my-button" onClick={() => window.print()}>הדפסה</button>
//                     {recipe.UserId === user.Id && (
//                         <>
//                             <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>עריכה</button>
//                             <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>מחיקה</button>
//                         </>
//                     )}
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default RecipeDetailes;


//גירסה שניה של צאט
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import deleteRecipe from "../../server/recipeServer/deleteRecipe";
// import editShopping from "../../server/shoppingListServer/editShopping";
//  import type { Dispatch } from "redux";
// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//     Id: number;
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
//     Ingredients?: Ingredient[];
//     Instructions?: string[];
// }

// interface User {
//     Id: number;
// }

// const RecipeDetailes: React.FC = () => {
//     const user = useSelector((state: any) => state.user) as User;
//     const location = useLocation(); // לא מציינים טיפוס כאן
//     const recipe = location.state.recipe as Recipe; // קובעים את הטיפוס כאן
//     const navig = useNavigate();
   
    
//     const dispatch = useDispatch<Dispatch<any>>();

//     return (
//         <div className="background-img backgroundPage detailes">
//             <div className="recipe">
//                 <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         className="myImg"
//                         component="img"
//                         height="140"
//                         image={recipe?.Img}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {recipe?.Name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             <h4> דרגת קושי : {recipe?.Difficulty}</h4>
//                             <h4> משך זמן : {recipe?.Duration}</h4>
//                             <div>
//                                 {recipe.Ingredients?.map((ingredient: Ingredient) => (
//                                     <h4 key={ingredient.Id}>
//                                         {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                                         <IconButton onClick={() => dispatch(editShopping(ingredient, user, 1))}>
//                                             <AddShoppingCartIcon />
//                                         </IconButton>
//                                     </h4>
//                                 ))}
//                             </div>
//                             <div>
//                                 <h5>: אופן ההכנה </h5>
//                                 {recipe?.Instructions?.map((instruction, index) => (
//                                     <p key={index}>{instruction}</p>
//                                 ))}
//                             </div>
//                         </Typography>
//                     </CardContent>
//                     <button className="my-button" onClick={() => window.print()}>הדפסה</button>
//                     {recipe.UserId === user.Id && (
//                         <>
//                             <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>עריכה</button>
//                             <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>מחיקה</button>
//                         </>
//                     )}
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default RecipeDetailes;
// //גירסה שלישית של צאט
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import deleteRecipe from "../../server/recipeServer/deleteRecipe";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import type { Dispatch } from "redux";

// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//     Id: number;
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
//     Ingredients?: Ingredient[];
//     Instructions?: string[];
// }

// interface User {
//     Id: number;
// }

// const RecipeDetailes: React.FC = () => {
//     const user = useSelector((state: any) => state.user) as User;
//     const location = useLocation(); 
//     const recipe = location.state.recipe as Recipe; 
//     const navig = useNavigate();
//     const dispatch = useDispatch<Dispatch<any>>();

//     return (
//         <div className="background-img backgroundPage detailes">
//             <div className="recipe">
//                 <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         className="myImg"
//                         component="img"
//                         height="140"
//                         image={recipe?.Img}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {recipe?.Name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             <div>
//                                 <h4>דרגת קושי: {recipe?.Difficulty}</h4>
//                                 <h4>משך זמן: {recipe?.Duration}</h4>
//                             </div>
//                             <div>
//                                 {recipe.Ingredients?.map((ingredient: Ingredient) => (
//                                     <h4 key={ingredient.Id}>
//                                         {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                                         <IconButton onClick={() => dispatch(editShopping(ingredient, user, 1))}>
//                                             <AddShoppingCartIcon />
//                                         </IconButton>
//                                     </h4>
//                                 ))}
//                             </div>
//                             <div>
//                                 <h5>אופן ההכנה:</h5>
//                                 {recipe?.Instructions?.map((instruction, index) => (
//                                     <p key={index}>{instruction}</p>
//                                 ))}
//                             </div>
//                         </Typography>
//                     </CardContent>
//                     <button className="my-button" onClick={() => window.print()}>הדפסה</button>
//                     {recipe.UserId === user.Id && (
//                         <>
//                             <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>עריכה</button>
//                             <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>מחיקה</button>
//                         </>
//                     )}
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default RecipeDetailes;
// //גירסה רביעית של צאט
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import deleteRecipe from "../../server/recipeServer/deleteRecipe";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import type { Dispatch } from "redux";

// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//     Id: number;
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
//     Ingredients?: Ingredient[];
//     Instructions?: string[];
// }

// interface User {
//     Id: number;
// }

// const RecipeDetailes: React.FC = () => {
//     const user = useSelector((state: any) => state.user) as User;
//     const location = useLocation(); 
//     const recipe = location.state.recipe as Recipe; 
//     const navig = useNavigate();
//     const dispatch = useDispatch<Dispatch<any>>();

//     return (
//         <div className="background-img backgroundPage detailes">
//             <div className="recipe">
//                 <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         className="myImg"
//                         component="img"
//                         height="140"
//                         image={recipe?.Img}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {recipe?.Name}
//                         </Typography>
//                         <div>
//                             <h4>דרגת קושי: {recipe?.Difficulty}</h4>
//                             <h4>משך זמן: {recipe?.Duration}</h4>
//                         </div>
//                         <div>
//                             {recipe.Ingredients?.map((ingredient: Ingredient) => (
//                                 <div key={ingredient.Id}>
//                                     <h4>
//                                         {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                                         <IconButton onClick={() => dispatch(editShopping(ingredient, user, 1))}>
//                                             <AddShoppingCartIcon />
//                                         </IconButton>
//                                     </h4>
//                                 </div>
//                             ))}
//                         </div>
//                         <div>
//                             <h5>אופן ההכנה:</h5>
//                             {recipe?.Instructions?.map((instruction, index) => (
//                                 <p key={index}>{instruction}</p>
//                             ))}
//                         </div>
//                     </CardContent>
//                     <button className="my-button" onClick={() => window.print()}>הדפסה</button>
//                     {recipe.UserId === user.Id && (
//                         <>
//                             <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>עריכה</button>
//                             <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>מחיקה</button>
//                         </>
//                     )}
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default RecipeDetailes;

// //גירסה חמישית של צאט
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import deleteRecipe from "../../server/recipeServer/deleteRecipe";
// import editShopping from "../../server/shoppingListServer/editShopping";
// import type { Dispatch } from "redux";

// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//     Id: number;
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
//     Ingredients?: Ingredient[];
//     Instructions?: (string | { text: string })[]; // עדכון לסוג ההוראות
// }

// interface User {
//     Id: number;
// }

// const RecipeDetailes: React.FC = () => {
//     const user = useSelector((state: any) => state.user) as User;
//     const location = useLocation(); 
//     const recipe = location.state.recipe as Recipe; 
//     const navig = useNavigate();
//     const dispatch = useDispatch<Dispatch<any>>();

//     return (
//         <div className="background-img backgroundPage detailes">
//             <div className="recipe">
//                 <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         className="myImg"
//                         component="img"
//                         height="140"
//                         image={recipe?.Img}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {recipe?.Name}
//                         </Typography>
//                         <div>
//                             <h4>דרגת קושי: {recipe?.Difficulty}</h4>
//                             <h4>משך זמן: {recipe?.Duration}</h4>
//                         </div>
//                         <div>
//                             {recipe.Ingredients?.map((ingredient: Ingredient) => (
//                                 <div key={ingredient.Id}>
//                                     <h4>
//                                         {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                                         <IconButton onClick={() => dispatch(editShopping(ingredient, user, 1))}>
//                                             <AddShoppingCartIcon />
//                                         </IconButton>
//                                     </h4>
//                                 </div>
//                             ))}
//                         </div>
//                         <div>
//                             <h5>אופן ההכנה:</h5>
//                             {recipe?.Instructions?.map((instruction, index) => (
//                                 <p key={index}>{typeof instruction === 'string' ? instruction : instruction?.text}</p>
//                             ))}
//                         </div>
//                     </CardContent>
//                     <button className="my-button" onClick={() => window.print()}>הדפסה</button>
//                     {recipe.UserId === user.Id && (
//                         <>
//                             <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>עריכה</button>
//                             <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>מחיקה</button>
//                         </>
//                     )}
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default RecipeDetailes;
//גירסה אחרת של וי0

// import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
// import { useLocation, useNavigate } from "react-router-dom"
// import type * as React from "react"
// import Card from "@mui/material/Card"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Typography from "@mui/material/Typography"
// import { IconButton } from "@mui/material"
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
// import deleteRecipe from "../../server/recipeServer/deleteRecipe"
// import editShopping from "../../server/shoppingListServer/editShopping"
// import type { Dispatch } from "redux"
// import type { RootState } from "../../store"

// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//   Id: number
//   Name: string
//   Count: number | string
//   Type: string
// }

// interface Recipe {
//   Id: number
//   Name: string
//   Img: string
//   Difficulty: number
//   Duration: number
//   UserId: number
//   Ingredients?: Ingredient[]
//   Instructions?: (string | { Step: string })[]
//   Description?: string
// }

// interface User {
//   Id: number
//   Name: string
// }

// const RecipeDetailes: React.FC = () => {
//   const user = useSelector((state: RootState) => state.user) as unknown as User
//   const location = useLocation()
//   const recipe = location.state?.recipe as Recipe
//   const navig = useNavigate()
//   const dispatch = useDispatch<Dispatch<any>>()

//   if (!recipe) {
//     return (
//       <div className="background-img backgroundPage detailes">
//         <Typography variant="h5">המתכון לא נמצא</Typography>
//         <button className="my-button" onClick={() => navig("/recipes")}>
//           חזרה לרשימת המתכונים
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className="background-img backgroundPage detailes">
//       <div className="recipe">
//         <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//           <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {recipe?.Name}
//             </Typography>
//             <div>
//               <h4>דרגת קושי: {recipe?.Difficulty === 1 ? "קל" : recipe?.Difficulty === 2 ? "בינוני" : "קשה"}</h4>
//               <h4>משך זמן: {recipe?.Duration} דקות</h4>
//               {recipe.Description && <p>{recipe.Description}</p>}
//             </div>
//             <div>
//               <h5>מרכיבים:</h5>
//               {recipe.Ingredients?.map((ingredient: Ingredient, index) => (
//                 <div key={ingredient.Id || index}>
//                   <h4>
//                     {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                     <IconButton onClick={() => dispatch(editShopping(ingredient, user, 1))}>
//                       <AddShoppingCartIcon />
//                     </IconButton>
//                   </h4>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <h5>אופן ההכנה:</h5>
//               {recipe?.Instructions?.map((instruction, index) => (
//                 <p key={index}>{typeof instruction === "string" ? instruction : instruction?.Step}</p>
//               ))}
//             </div>
//           </CardContent>
//           <div className="recipe-actions">
//             <button className="my-button" onClick={() => window.print()}>
//               הדפסה
//             </button>
//             {recipe.UserId === user.Id && (
//               <>
//                 <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>
//                   עריכה
//                 </button>
//                 <button className="my-button" onClick={() => dispatch(deleteRecipe(recipe, navig))}>
//                   מחיקה
//                 </button>
//               </>
//             )}
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default RecipeDetailes

// //גירסה אחרת של וי0
// "use client"

// import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
// import { useLocation, useNavigate } from "react-router-dom"
// import type * as React from "react"
// import Card from "@mui/material/Card"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Typography from "@mui/material/Typography"
// import { IconButton } from "@mui/material"
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
// import deleteRecipe from "../../server/recipeServer/deleteRecipe"
// import editShopping from "../../server/shoppingListServer/editShopping"
// import type { Dispatch } from "redux"
// import type { RootState } from "../../store"
// import { useEffect } from "react"

// // טיפוסי נתונים עבור המרכיבים והמתכון
// interface Ingredient {
//   Id?: number
//   Name: string
//   Count: number | string
//   Type: string
// }

// interface Recipe {
//   Id: number | string
//   Name: string
//   Img: string
//   Difficulty: number
//   Duration: number
//   UserId?: number
//   Ingredients?: Ingredient[]
//   Instructions?: (string | { Step: string })[]
//   Description?: string
// }

// const RecipeDetailes: React.FC = () => {
//   const user = useSelector((state: RootState) => state.user.user)
//   const location = useLocation()
//   const recipe = location.state?.recipe as Recipe
//   const navig = useNavigate()
//   const dispatch = useDispatch<Dispatch<any>>()

//   useEffect(() => {
//     console.log("Recipe details:", recipe)
//     console.log("Current user:", user)
//   }, [recipe, user])

//   if (!recipe) {
//     return (
//       <div className="background-img backgroundPage detailes">
//         <Typography variant="h5">המתכון לא נמצא</Typography>
//         <button className="my-button" onClick={() => navig("/recipes")}>
//           חזרה לרשימת המתכונים
//         </button>
//       </div>
//     )
//   }

//   const handleAddToShoppingList = (ingredient: Ingredient) => {
//     if (!user) {
//       alert("יש להתחבר כדי להוסיף לרשימת הקניות")
//       navig("/login")
//       return
//     }

//     const shoppingItem = {
//       Name: ingredient.Name,
//       Count: typeof ingredient.Count === "string" ? Number.parseInt(ingredient.Count) || 1 : ingredient.Count,
//       Type: ingredient.Type,
//     }

//     dispatch(editShopping(shoppingItem, user, 1))
//   }

//   return (
//     <div className="background-img backgroundPage detailes">
//       <div className="recipe">
//         <Card className="cardDetailes" sx={{ maxWidth: 345 }}>
//           <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {recipe?.Name}
//             </Typography>
//             <div>
//               <h4>דרגת קושי: {recipe?.Difficulty === 1 ? "קל" : recipe?.Difficulty === 2 ? "בינוני" : "קשה"}</h4>
//               <h4>משך זמן: {recipe?.Duration} דקות</h4>
//               {recipe.Description && <p>{recipe.Description}</p>}
//             </div>
//             <div>
//               <h5>מרכיבים:</h5>
//               {recipe.Ingredients?.map((ingredient: Ingredient, index) => (
//                 <div key={ingredient.Id || index}>
//                   <h4>
//                     {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}
//                     <IconButton onClick={() => handleAddToShoppingList(ingredient)}>
//                       <AddShoppingCartIcon />
//                     </IconButton>
//                   </h4>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <h5>אופן ההכנה:</h5>
//               {recipe?.Instructions?.map((instruction, index) => (
//                 <p key={index}>{typeof instruction === "string" ? instruction : instruction?.Step}</p>
//               ))}
//             </div>
//           </CardContent>
//           <div className="recipe-actions">
//             <button className="my-button" onClick={() => window.print()}>
//               הדפסה
//             </button>
//             {user && recipe.UserId === user.Id && (
//               <>
//                 <button className="my-button" onClick={() => navig("/editRecipe", { state: { recipe } })}>
//                   עריכה
//                 </button>
//                 <button className="my-button" onClick={() => dispatch(deleteRecipe({ ...recipe, Id: Number(recipe.Id) }, navig))}>
//                   מחיקה
//                 </button>
//               </>
//             )}
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default RecipeDetailes

// //גירסה אחרת של וי0

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

  const handleEditRecipe = () => {
    navig("/editRecipe", { state: { recipe } })
  }

  const handleDeleteRecipe = () => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק את המתכון?")) {
      dispatch(deleteRecipe(recipe, navig))
    }
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
              <span>הדפסה</span>
            </button>

            {user && recipe.UserId === user.Id && (
              <>
                <button className="my-button" onClick={handleEditRecipe}>
                  <span>עריכה</span>
                </button>
                <button className="my-button" onClick={handleDeleteRecipe}>
                  <span>מחיקה</span>
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


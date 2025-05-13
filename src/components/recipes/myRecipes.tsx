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
import React from 'react';
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

// טיפוסי נתונים עבור המתכונים והמשתמש
interface Ingredient {
    Name: string;
    Count: number;
    Type: string;
}

interface Recipe {
    Id: number;
    Name: string;
    Img: string;
    Difficulty: number;
    Duration: number;
    UserId: number;
    Ingrident?: Ingredient[];
    Instructions?: string[];
}

interface User {
    Id: number;
}

const MyRecipes: React.FC = () => {
    const navig = useNavigate();
    const user = useSelector((state: any) => state.user) as User;
    const recipes = useSelector((state: any) => state.recipes) as Recipe[] || []; // הגדרת ערך ברירת מחדל

    return (
        <div className="myRecipes background-img backgroundPage detailes">
            {Array.isArray(recipes) && recipes.map((recipe) => ( // בדיקה אם recipes הוא מערך
                (user && recipe.UserId === user.Id) ? (
                    <Card key={recipe.Id} className="cardDetailes" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className="myImg"
                            component="img"
                            height="140"
                            image={recipe?.Img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {recipe?.Name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <h4> דרגת קושי : {recipe?.Difficulty}</h4>
                                <h4> משך זמן : {recipe?.Duration}</h4>
                                <div>
                                    {recipe.Ingrident?.map((ingredient, index) => (
                                        <h4 key={index}> {ingredient?.Name}: {ingredient?.Count} {ingredient?.Type}</h4>
                                    ))}
                                </div>
                                <div>
                                    <h5>: אופן ההכנה </h5>
                                    {recipe?.Instructions?.map((instruction, index) => (
                                        <p key={index}>{instruction}</p>
                                    ))}
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                ) : null
            ))}
        </div>
    );
}

export default MyRecipes;

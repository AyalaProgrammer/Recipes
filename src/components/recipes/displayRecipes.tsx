// // import { useEffect, useState } from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import * as React from 'react';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Typography from '@mui/material/Typography';
// // import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// // import { MenuItem } from '@mui/material';
// // import Select from '@mui/material/Select';

// // const DisplayRecipes = () => {
// //     const navig = useNavigate()

// //     const categories = useSelector(state => state.categories)
// //     const recipes = useSelector(state => state.recipes)

// //     const [filteredRecipes, setFilteredRecipes] = useState([])
// //     const [category, setCategory] = useState('')
// //     const [level, setLevel] = useState('')
// //     const [time, setTime] = useState()

// //     const handleChangeLevel = (event) => {
// //         setLevel(event.target.value);
// //     };
// //     const handleChangeCategory = (event) => {
// //         setCategory(event.target.value);
// //     };
// //     useEffect(() => {
// //         setFilteredRecipes(recipes.filter(r => (!category || r.CategoryId == category) && (!time || r.Duration <= time) && (!level || r.Difficulty <= level)))
// //     }, [category, time, level])
// //     return <div>
// //         <div className="filter">
// //             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
// //                 <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
// //                 <Select
// //                     labelId="demo-simple-select-standard-label"
// //                     id="demo-simple-select-standard"
// //                     value={category}
// //                     onChange={handleChangeCategory}
// //                     label="קטגןריה">
// //                     <MenuItem value="">
// //                         <em>None</em>
// //                     </MenuItem>
// //                     {categories?.map((category1) => (
// //                         <MenuItem key={category1.Id} value={category1.Id}>
// //                             {category1.Name}
// //                         </MenuItem>
// //                     ))}
// //                 </Select>
// //             </FormControl>
// //             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
// //                 <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
// //                 <Input type="number" placeholder=" זמן הכנה" onChange={(e) => setTime(e.target.value)} />
// //             </FormControl>
// //             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
// //                 <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
// //                 <Select
// //                     labelId="demo-simple-select-standard-label"
// //                     id="demo-simple-select-standard"
// //                     value={level}
// //                     onChange={handleChangeLevel}
// //                     label="רמת קושי">
// //                     <MenuItem value="">
// //                         <em>None</em>
// //                     </MenuItem>
// //                     <MenuItem value={1}>קל</MenuItem>
// //                     <MenuItem value={2}>בינוני</MenuItem>
// //                     <MenuItem value={3}>קשה</MenuItem>
// //                 </Select>
// //             </FormControl>
// //         </div>
// //         <div className="recipes">
// //             {filteredRecipes?.map((recipe) => (
// //                 <p key={recipe.Id}>
// //                     <Card sx={{ maxWidth: 345 }} className="cards">
// //                         <CardMedia className="myImg"
// //                             component="img"
// //                             height="140"
// //                             image={recipe?.Img}
// //                         />
// //                         <CardContent>
// //                             <Typography gutterBottom variant="h5" component="div">
// //                                 {recipe?.Name}
// //                             </Typography>
// //                             <Typography variant="body2" color="text.secondary">
// //                                 {recipe?.Description}
// //                             </Typography>
// //                         </CardContent>
// //                         <CardActions>
// //                             <button className="my-button" onClick={x => navig("/recipeDetailes", { state: { recipe } })}>
// //                                 לפרטי המתכון
// //                             </button>
// //                         </CardActions>
// //                     </Card>
// //                 </p>
// //             ))}
// //         </div>
// //     </div>

// // }
// // export default DisplayRecipes


// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes) as Recipe[];

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         setFilteredRecipes(recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ));
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => setTime(Number(e.target.value))} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes?.map((recipe) => (
//                     <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
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
//                                 {recipe?.Description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                 לפרטי המתכון
//                             </button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

//גירסה חדשה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes) as Recipe[];

//     // הוספת console.log לבדוק את הערך של categories
//     console.log(categories);

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         setFilteredRecipes(recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ));
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => setTime(Number(e.target.value))} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes?.map((recipe) => (
//                     <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
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
//                                 {recipe?.Description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                 לפרטי המתכון
//                             </button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

//עוד גירסה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     // תיקון כאן: גישה למערך הקטגוריות מתוך האובייקט
//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes) as Recipe[];

//     // הוספת console.log לבדוק את הערך של categories
//     console.log(categories);

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     // useEffect(() => {
//     //     setFilteredRecipes(recipes.filter(r => 
//     //         (!category || r.CategoryId === Number(category)) && 
//     //         (!time || r.Duration <= time) && 
//     //         (!level || r.Difficulty <= Number(level))
//     //     ));
//     // }, [category, time, level, recipes]);
//     useEffect(() => {
//     const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//         (!category || r.CategoryId === Number(category)) && 
//         (!time || r.Duration <= time) && 
//         (!level || r.Difficulty <= Number(level))
//     ) : [];
//     setFilteredRecipes(filtered);
// }, [category, time, level, recipes]);


//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => setTime(Number(e.target.value))} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes?.map((recipe) => (
//                     <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
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
//                                 {recipe?.Description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                 לפרטי המתכון
//                             </button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

//עוד גירסה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     // תיקון כאן: גישה למערך הקטגוריות מתוך האובייקט
//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes) as Recipe[];

//     // הוספת console.log לבדוק את הערך של categories
//     console.log("Categories:", categories);
//     console.log("Recipes:", recipes); // הוסף שורה זו לבדוק את הערך של recipes

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ) : [];
//         setFilteredRecipes(filtered);
//         console.log("Filtered Recipes:", filtered); // הוסף שורה זו לבדוק את המתכונים המסוננים
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => setTime(Number(e.target.value))} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes?.map((recipe) => (
//                     <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
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
//                                 {recipe?.Description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                 לפרטי המתכון
//                             </button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

//גירסה חדשה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     // גישה למערך המתכונים מתוך האובייקט
//     const recipes = useSelector((state: any) => state.recipes.recipes) as Recipe[];

//     console.log("Categories:", categories);
//     console.log("Recipes:", recipes);

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ) : [];
//         setFilteredRecipes(filtered);
//         console.log("Filtered Recipes:", filtered);
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => setTime(Number(e.target.value))} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes?.map((recipe) => (
//                     <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
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
//                                 {recipe?.Description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                 לפרטי המתכון
//                             </button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

//עוד גירסה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes.recipes) as Recipe[];

//     console.log("Categories:", categories);
//     console.log("Recipes:", recipes);

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ) : [];
//         setFilteredRecipes(filtered);
//         console.log("Filtered Recipes:", filtered);
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => setTime(Number(e.target.value))} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes?.map((recipe) => (
//                     <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
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
//                                 {recipe?.Description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                 לפרטי המתכון
//                             </button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

// //גירסה חדשה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes.recipes) as Recipe[];

//     console.log("Categories:", categories);
//     console.log("Recipes:", recipes);

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ) : [];
//         setFilteredRecipes(filtered);
//         console.log("Filtered Recipes:", filtered);
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label"> זמן הכנה</InputLabel>
//                     <Input 
//                         type="number" 
//                         placeholder=" זמן הכנה" 
//                         onChange={(e) => {
//                             const value = Number(e.target.value);
//                             if (!isNaN(value)) {
//                                 setTime(value);
//                             }
//                         }} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes.length === 0 ? (
//                     <Typography variant="body1">לא נמצאו מתכונים תואמים.</Typography>
//                 ) : (
//                     filteredRecipes.map((recipe) => (
//                         <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
//                             <CardMedia
//                                 className="myImg"
//                                 component="img"
//                                 height="140"
//                                 image={recipe?.Img}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {recipe?.Name}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {recipe?.Description}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                     לפרטי המתכון
//                                 </button>
//                             </CardActions>
//                         </Card>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

// //גירסה חדשה
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes.recipes) as Recipe[];

//     console.log("Categories:", categories);
//     console.log("Recipes:", recipes);

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ) : [];
//         setFilteredRecipes(filtered);
//         console.log("Filtered Recipes:", filtered);
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="category-select-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="category-select-label"
//                         id="category-select"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel htmlFor="time-input">זמן הכנה</InputLabel>
//                     <Input 
//                         id="time-input" 
//                         type="number" 
//                         placeholder="זמן הכנה" 
//                         onChange={(e) => {
//                             const value = Number(e.target.value);
//                             if (!isNaN(value)) {
//                                 setTime(value);
//                             }
//                         }} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="difficulty-select-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="difficulty-select-label"
//                         id="difficulty-select"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes.length === 0 ? (
//                     <Typography variant="body1">לא נמצאו מתכונים תואמים.</Typography>
//                 ) : (
//                     filteredRecipes.map((recipe) => (
//                         <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
//                             <CardMedia
//                                 className="myImg"
//                                 component="img"
//                                 height="140"
//                                 image={recipe?.Img}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {recipe?.Name}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {recipe?.Description}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                     לפרטי המתכון
//                                 </button>
//                             </CardActions>
//                         </Card>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;

// //גירסה חדשהi
//  import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActions, FormControl, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//     Id: number;
//     Name: string;
//     Description: string;
//     Img: string;
//     CategoryId: number;
//     Duration: number;
//     Difficulty: number;
// }

// interface Category {
//     Id: number;
//     Name: string;
// }

// const DisplayRecipes: React.FC = () => {
//     const navig = useNavigate();

//     const categories = useSelector((state: any) => state.categories.categories) as Category[];
//     const recipes = useSelector((state: any) => state.recipes.recipes) as Recipe[];

//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
//     const [category, setCategory] = useState<string>('');
//     const [level, setLevel] = useState<string>('');
//     const [time, setTime] = useState<number | undefined>(undefined);

//     const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//         setLevel(event.target.value);
//     };

//     const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//         setCategory(event.target.value);
//     };

//     useEffect(() => {
//         const filtered = Array.isArray(recipes) ? recipes.filter(r => 
//             (!category || r.CategoryId === Number(category)) && 
//             (!time || r.Duration <= time) && 
//             (!level || r.Difficulty <= Number(level))
//         ) : [];
//         setFilteredRecipes(filtered);
//     }, [category, time, level, recipes]);

//     return (
//         <div>
//             <div className="filter">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="category-select-label">קטגוריה</InputLabel>
//                     <Select
//                         labelId="category-select-label"
//                         id="category-select"
//                         value={category}
//                         onChange={handleChangeCategory}
//                         label="קטגוריה">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         {categories?.map((category1) => (
//                             <MenuItem key={category1.Id} value={category1.Id}>
//                                 {category1.Name}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel htmlFor="time-input">זמן הכנה</InputLabel>
//                     <Input 
//                         id="time-input" 
//                         type="number" 
//                         placeholder="זמן הכנה" 
//                         onChange={(e) => {
//                             const value = Number(e.target.value);
//                             if (!isNaN(value)) {
//                                 setTime(value);
//                             }
//                         }} 
//                     />
//                 </FormControl>
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                     <InputLabel id="difficulty-select-label">רמת קושי</InputLabel>
//                     <Select
//                         labelId="difficulty-select-label"
//                         id="difficulty-select"
//                         value={level}
//                         onChange={handleChangeLevel}
//                         label="רמת קושי">
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={1}>קל</MenuItem>
//                         <MenuItem value={2}>בינוני</MenuItem>
//                         <MenuItem value={3}>קשה</MenuItem>
//                     </Select>
//                 </FormControl>
//             </div>
//             <div className="recipes">
//                 {filteredRecipes.length === 0 ? (
//                     <Typography variant="body1">לא נמצאו מתכונים תואמים.</Typography>
//                 ) : (
//                     filteredRecipes.map((recipe) => (
//                         <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
//                             <CardMedia
//                                 className="myImg"
//                                 component="img"
//                                 height="140"
//                                 image={recipe?.Img}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {recipe?.Name}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {recipe?.Description}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                                     לפרטי המתכון
//                                 </button>
//                             </CardActions>
//                         </Card>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default DisplayRecipes;
//גירסה אחרת של וי0

// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import type * as React from "react"
// import Card from "@mui/material/Card"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Typography from "@mui/material/Typography"
// import { CardActions, FormControl, Input, InputLabel } from "@mui/material"
// import { MenuItem } from "@mui/material"
// import Select, { type SelectChangeEvent } from "@mui/material/Select"
// import type { RootState } from "../../store"

// // טיפוסי נתונים עבור המתכונים והקטגוריות
// interface Recipe {
//   Id: number
//   Name: string
//   Description: string
//   Img: string
//   CategoryId: number
//   Duration: number
//   Difficulty: number
// }

// interface Category {
//   Id: number
//   Name: string
// }

// const DisplayRecipes: React.FC = () => {
//   const navig = useNavigate()

//   const categories = useSelector((state: RootState) => state.categories.categories) as unknown as Category[]
//   const recipes = useSelector((state: RootState) => state.recipes.recipes) as Recipe[]

//   const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
//   const [category, setCategory] = useState<string>("")
//   const [level, setLevel] = useState<string>("")
//   const [time, setTime] = useState<number | undefined>(undefined)

//   const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//     setLevel(event.target.value)
//   }

//   const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//     setCategory(event.target.value)
//   }

//   useEffect(() => {
//     console.log("Filtering recipes with:", { category, time, level })
//     console.log("Available recipes:", recipes)

//     const filtered = Array.isArray(recipes)
//       ? recipes.filter(
//           (r) =>
//             (!category || r.CategoryId === Number(category)) &&
//             (!time || r.Duration <= time) &&
//             (!level || r.Difficulty <= Number(level)),
//         )
//       : []

//     console.log("Filtered recipes:", filtered)
//     setFilteredRecipes(filtered)
//   }, [category, time, level, recipes])

//   return (
//     <div className="background-img backgroundPage">
//       <div className="filter">
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="category-select-label">קטגוריה</InputLabel>
//           <Select
//             labelId="category-select-label"
//             id="category-select"
//             value={category}
//             onChange={handleChangeCategory}
//             label="קטגוריה"
//           >
//             <MenuItem value="">
//               <em>הכל</em>
//             </MenuItem>
//             {categories?.map((category1) => (
//               <MenuItem key={category1.Id} value={category1.Id.toString()}>
//                 {category1.Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel htmlFor="time-input">זמן הכנה</InputLabel>
//           <Input
//             id="time-input"
//             type="number"
//             placeholder="זמן הכנה"
//             onChange={(e) => {
//               const value = Number(e.target.value)
//               if (!isNaN(value)) {
//                 setTime(value)
//               }
//             }}
//           />
//         </FormControl>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="difficulty-select-label">רמת קושי</InputLabel>
//           <Select
//             labelId="difficulty-select-label"
//             id="difficulty-select"
//             value={level}
//             onChange={handleChangeLevel}
//             label="רמת קושי"
//           >
//             <MenuItem value="">
//               <em>הכל</em>
//             </MenuItem>
//             <MenuItem value="1">קל</MenuItem>
//             <MenuItem value="2">בינוני</MenuItem>
//             <MenuItem value="3">קשה</MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//       <div className="recipes">
//         {filteredRecipes.length === 0 ? (
//           <Typography variant="body1" className="no-recipes-message">
//             לא נמצאו מתכונים תואמים.
//           </Typography>
//         ) : (
//           filteredRecipes.map((recipe) => (
//             <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
//               <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {recipe?.Name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {recipe?.Description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <button className="my-button" onClick={() => navig("/recipeDetailes", { state: { recipe } })}>
//                   לפרטי המתכון
//                 </button>
//               </CardActions>
//             </Card>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }

// export default DisplayRecipes

// //גירסה חדשהi

// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import type * as React from "react"
// import Card from "@mui/material/Card"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Typography from "@mui/material/Typography"
// import { CardActions, FormControl, Input, InputLabel } from "@mui/material"
// import { MenuItem } from "@mui/material"
// import Select, { type SelectChangeEvent } from "@mui/material/Select"
// import type { RootState } from "../../store"
// import type { Category } from "../../store/categoriesSlice"
// import type { Recipe } from "../../store/recipesSlice"

// const DisplayRecipes: React.FC = () => {
//   const navig = useNavigate()

//   const categories = useSelector((state: RootState) => state.categories.categories)
//   const recipes = useSelector((state: RootState) => (state.recipes as RootState["recipes"]).recipes)

//   const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
//   const [category, setCategory] = useState<string>("")
//   const [level, setLevel] = useState<string>("")
//   const [time, setTime] = useState<number | undefined>(undefined)

//   const handleChangeLevel = (event: SelectChangeEvent<string>) => {
//     setLevel(event.target.value)
//   }

//   const handleChangeCategory = (event: SelectChangeEvent<string>) => {
//     setCategory(event.target.value)
//   }

//   useEffect(() => {
//     console.log("Filtering recipes with:", { category, time, level })
//     console.log("Available recipes:", recipes)

//     const filtered = Array.isArray(recipes)
//       ? recipes.filter(
//           (r) =>
//             (!category || r.CategoryId === Number(category)) &&
//             (!time || r.Duration <= time) &&
//             (!level || r.Difficulty <= Number(level)),
//         )
//       : []

//     console.log("Filtered recipes:", filtered)
//     setFilteredRecipes(filtered)
//   }, [category, time, level, recipes])

//   const handleRecipeClick = (recipe: Recipe) => {
//     console.log("Navigating to recipe details:", recipe)
//     navig("/recipeDetailes", { state: { recipe } })
//   }

//   return (
//     <div className="background-img backgroundPage">
//       <div className="filter">
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="category-select-label">קטגוריה</InputLabel>
//           <Select
//             labelId="category-select-label"
//             id="category-select"
//             value={category}
//             onChange={handleChangeCategory}
//             label="קטגוריה"
//           >
//             <MenuItem value="">
//               <em>הכל</em>
//             </MenuItem>
//             {categories &&
//               categories.map((category: Category) => (
//                 <MenuItem key={category.Id} value={category.Id.toString()}>
//                   {category.Name}
//                 </MenuItem>
//               ))}
//           </Select>
//         </FormControl>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel htmlFor="time-input">זמן הכנה</InputLabel>
//           <Input
//             id="time-input"
//             type="number"
//             placeholder="זמן הכנה"
//             onChange={(e) => {
//               const value = Number(e.target.value)
//               if (!isNaN(value)) {
//                 setTime(value)
//               }
//             }}
//           />
//         </FormControl>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="difficulty-select-label">רמת קושי</InputLabel>
//           <Select
//             labelId="difficulty-select-label"
//             id="difficulty-select"
//             value={level}
//             onChange={handleChangeLevel}
//             label="רמת קושי"
//           >
//             <MenuItem value="">
//               <em>הכל</em>
//             </MenuItem>
//             <MenuItem value="1">קל</MenuItem>
//             <MenuItem value="2">בינוני</MenuItem>
//             <MenuItem value="3">קשה</MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//       <div className="recipes">
//         {filteredRecipes.length === 0 ? (
//           <Typography variant="body1" className="no-recipes-message">
//             לא נמצאו מתכונים תואמים.
//           </Typography>
//         ) : (
//           filteredRecipes.map((recipe) => (
//             <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
//               <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {recipe?.Name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {recipe?.Description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <button className="my-button" onClick={() => handleRecipeClick(recipe)}>
//                   לפרטי המתכון
//                 </button>
//               </CardActions>
//             </Card>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }

// export default DisplayRecipes



// //גירסה חדשהi
"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActions, FormControl, Input, InputLabel } from "@mui/material"
import { MenuItem } from "@mui/material"
import Select, { type SelectChangeEvent } from "@mui/material/Select"
import type { RootState } from "../../store"
// ייבוא הטיפוס Category מהקובץ המתאים
// import type { Category } from "../../store/categoriesSlice"
import type { Recipe } from "../../store/recipesSlice"
import type { Category } from "../../server/categoryServer/categoriesSlice"

const DisplayRecipes: React.FC = () => {
  const navig = useNavigate()

  const categories = useSelector((state: RootState) => state.categories.categories)
  const recipes = useSelector((state: RootState) => state.recipes.recipes)

  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [category, setCategory] = useState<string>("")
  const [level, setLevel] = useState<string>("")
  const [time, setTime] = useState<number | undefined>(undefined)

  const handleChangeLevel = (event: SelectChangeEvent<string>) => {
    setLevel(event.target.value)
  }

  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value)
  }

  useEffect(() => {
    console.log("Filtering recipes with:", { category, time, level })
    console.log("Available recipes:", recipes)

    const filtered = Array.isArray(recipes)
      ? recipes.filter(
          (r) =>
            (!category || r.CategoryId === Number(category)) &&
            (!time || r.Duration <= time) &&
            (!level || r.Difficulty <= Number(level)),
        )
      : []

    console.log("Filtered recipes:", filtered)
    setFilteredRecipes(filtered)
  }, [category, time, level, recipes])

  const handleRecipeClick = (recipe: Recipe) => {
    console.log("Navigating to recipe details:", recipe)
    navig("/recipeDetailes", { state: { recipe } })
  }

  return (
    <div className="background-img backgroundPage">
      <div className="filter">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category-select-label">קטגוריה</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleChangeCategory}
            label="קטגוריה"
          >
            <MenuItem value="">
              <em>הכל</em>
            </MenuItem>
            {categories &&
              categories.map((category: Category) => (
                <MenuItem key={category.Id} value={category.Id.toString()}>
                  {category.Name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="time-input">זמן הכנה</InputLabel>
          <Input
            id="time-input"
            type="number"
            placeholder="זמן הכנה"
            onChange={(e) => {
              const value = Number(e.target.value)
              if (!isNaN(value)) {
                setTime(value)
              }
            }}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="difficulty-select-label">רמת קושי</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={level}
            onChange={handleChangeLevel}
            label="רמת קושי"
          >
            <MenuItem value="">
              <em>הכל</em>
            </MenuItem>
            <MenuItem value="1">קל</MenuItem>
            <MenuItem value="2">בינוני</MenuItem>
            <MenuItem value="3">קשה</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="recipes">
        {filteredRecipes.length === 0 ? (
          <Typography variant="body1" className="no-recipes-message">
            לא נמצאו מתכונים תואמים.
          </Typography>
        ) : (
          filteredRecipes.map((recipe) => (
            <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
              <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe?.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe?.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <button className="my-button" onClick={() => handleRecipeClick(recipe)}>
                  לפרטי המתכון
                </button>
              </CardActions>
            </Card>
          ))
        )}
      </div>

      <div className="server-status-note">
        <h3>הערה חשובה</h3>
        <p>
          כדי שהאפליקציה תעבוד כראוי, יש לוודא שהשרת פועל בכתובת:
          <br />
          <code>http://localhost:8080</code>
        </p>
        <p>אם אתה מקבל שגיאות חיבור, וודא שהשרת פועל ומגיב בכתובת זו.</p>
      </div>
    </div>
  )
}

export default DisplayRecipes

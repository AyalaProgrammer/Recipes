// import { useFieldArray, useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import addNewRecipes from "../../server/recipeServer/addNewRecipe"
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import * as React from 'react';
// import { FormControl, IconButton, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select from '@mui/material/Select';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingridents: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ),
//     Instructions: yup.array().of(yup.string().required("שדה חובה")),
//   })
//   .required()

// const AddRecipes = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector(state => state.user)
//   const categories = useSelector(state => state.categories)
//   const dispatch = useDispatch()
//   const navig = useNavigate()


//   const {
//     register,
//     handleSubmit,
//     formState: { errors }, control
//   } = useForm({
//     resolver: yupResolver(schema),
//     values: recipe,
//   })
//   const onSubmit = (data) => {

//     console.log("i am here")
//     data["UserId"] = user.Id;
//     if (state)
//       dispatch(editRecipe(data, navig))
//     else
//       dispatch(addNewRecipes(data, navig))
//   }
//   const { fields: fieldsIngrident, append: appendIngrident, remove: removeIngrident, } = useFieldArray({
//     control,
//     name: "Ingridents",
//   });
//   const { fields: fieldsInstructions, append: appendInstructions, remove: removevInstructions, } = useFieldArray({
//     control,
//     name: "Instructions",
//   });
//   return (<div className="background-img backgroundPage addRecipe">
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> שם </InputLabel>
//         <Input {...register("Name")} />
//         <p>{errors.Name?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//         <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//         <Select
//           {...register("CategoryId")}
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           label="קטגוריה">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           {categories?.map((category) => (
//             <MenuItem key={category.Id} value={category.Id}>
//               <p> {category?.Name}</p>
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> תמונה </InputLabel>
//         <Input {...register("Img")} />
//         <p>{errors.Img?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-input-standard-label"> זמן הכנה</InputLabel>
//         <Input {...register("Duration")} type="number" />
//       </FormControl>
//       <br />


//       <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//         <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//         <Select {...register("Difficulty")}
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           label="רמת קושי">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={1}>קל</MenuItem>
//           <MenuItem value={2}>בינוני</MenuItem>
//           <MenuItem value={3}>קשה</MenuItem>
//         </Select>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label">תיאור</InputLabel>
//         <Input {...register("Description")} />
//         <p>{errors.Description?.message}</p>
//       </FormControl>
//       <br />

//       {fieldsIngrident.map((field, index) => (
//         <>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//             <InputLabel id="demo-simple-input-standard-label"> סוג  </InputLabel>
//             <Input {...register(`Ingridents.${index}.Type`)} />
//             <p>{errors.Ingrident?.[index]?.c?.message}</p>
//           </FormControl>

//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//             <InputLabel id="demo-simple-input-standard-label"> כמות  </InputLabel>
//             <Input {...register(`Ingridents.${index}.Count`)} />
//             <p>{errors.Ingrident?.[index]?.b?.message}</p>
//           </FormControl>

//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//             <InputLabel id="demo-simple-input-standard-label">שם מוצר </InputLabel>
//             <Input {...register(`Ingridents.${index}.Name`)} />
//             <p>{errors.Ingrident?.[index]?.a?.message}</p>
//           </FormControl>


//           <IconButton onClick={() => removeIngrident(index)}>
//             <DeleteForeverIcon />
//           </IconButton>
//           <br />

//         </>
//       ))}
//       <br />

//       {fieldsInstructions.map((field, index) => (
//         <>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//             <InputLabel id="demo-simple-input-standard-label"> הוראה  </InputLabel>
//             <Input {...register(`Instructions.${index}`)} />
//             <p>{errors.Instructions?.[index]?.a?.message}</p>
//           </FormControl>



//           <IconButton onClick={() => removevInstructions(index)}>
//             <DeleteForeverIcon />
//           </IconButton>
//           <br />

//         </>
//       ))}
//       <br />
//       <button className="my-button" onClick={() => appendIngrident({})}> הוסף מוצר</button>

//       <button className="my-button" onClick={() => appendInstructions('')}> הוסף הוראה</button>
//       <br />
//       <Input type="submit" className="my-button" />
//     </form>
//   </div>
//   )
// }
// export default AddRecipes;

//גירסה ראשונה של צאט
// import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import * as React from 'react';
// import { FormControl, IconButton, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select from '@mui/material/Select';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// // הגדרת טיפוסי הנתונים
// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingridents: Ingredient[];
//   Instructions: string[];
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingridents: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ),
//     Instructions: yup.array().of(yup.string().required("שדה חובה")),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories);
//   const dispatch = useDispatch();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: recipe,
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     data["UserId"] = user.Id;
//     if (state) {
//       dispatch(editRecipe(data, navig));
//     } else {
//       dispatch(addNewRecipes(data, navig));
//     }
//   };

//   const { fields: fieldsIngrident, append: appendIngrident, remove: removeIngrident } = useFieldArray({
//     control,
//     name: "Ingridents",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removevInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label"> שם </InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//           <Select
//             {...register("CategoryId")}
//             labelId="demo-simple-select-standard-label"
//             id="demo-simple-select-standard"
//             label="קטגוריה">
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             {categories?.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 <p>{category?.Name}</p>
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label"> תמונה </InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="demo-simple-input-standard-label"> זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//           <Select {...register("Difficulty")}
//             labelId="demo-simple-select-standard-label"
//             id="demo-simple-select-standard"
//             label="רמת קושי">
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngrident.map((field, index) => (
//           <React.Fragment key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label"> סוג </InputLabel>
//               <Input {...register(`Ingridents.${index}.Type`)} />
//               <p>{errors.Ingridents?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label"> כמות </InputLabel>
//               <Input {...register(`Ingridents.${index}.Count`)} />
//               <p>{errors.Ingridents?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label">שם מוצר </InputLabel>
//               <Input {...register(`Ingridents.${index}.Name`)} />
//               <p>{errors.Ingridents?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngrident(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//             <br />
//           </React.Fragment>
//         ))}
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <React.Fragment key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label"> הוראה </InputLabel>
//               <Input {...register(`Instructions.${index}`)} />
//               <p>{errors.Instructions?.[index]?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removevInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//             <br />
//           </React.Fragment>
//         ))}
//         <br />
//         <button className="my-button" type="button" onClick={() => appendIngrident({ Name: "", Count: "", Type: "" })}> הוסף מוצר</button>

//         <button className="my-button" type="button" onClick={() => appendInstructions('')}> הוסף הוראה</button>
//         <br />
//         <Input type="submit" className="my-button" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;

//גירסה שניה של צאט
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// // import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// // import editRecipe from "../../server/recipeServer/editRecipe";
// import * as React from 'react';
// import { FormControl, IconButton, Input, InputLabel } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import Select from '@mui/material/Select';


// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// // import editRecipe from "src/server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";

// // הגדרת טיפוסי הנתונים
// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// // interface FormData {
// //   Name: string;
// //   CategoryId: number;
// //   Img: string;
// //   Duration: string;
// //   Difficulty: number;
// //   Description: string;
// //   Ingredients: Ingredient[];
// //   Instructions: string[];
// //   UserId?: string; // הוספת UserId כאן
// // }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: { Step: string }[]; // ← שינוי כאן
//   UserId?: string;
// }


// // const schema = yup
// //   .object({
// //     Name: yup.string().required("שדה חובה"),
// //     CategoryId: yup.number().required("שדה חובה"),
// //     Img: yup.string().required("שדה חובה"),
// //     Duration: yup.string().required("שדה חובה"),
// //     Difficulty: yup.number().positive().required("שדה חובה"),
// //     Description: yup.string().required("שדה חובה"),
// //     Ingredients: yup.array().of(
// //       yup.object().shape({
// //         Name: yup.string().required("שדה חובה"),
// //         Count: yup.string().required("שדה חובה"),
// //         Type: yup.string().required("שדה חובה"),
// //       })
// //     ).required(),
// //     Instructions: yup.array().of(yup.string().required("שדה חובה")).required(),
// //   }).required();

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"), // ← שינוי כאן
//       })
//     ).required(),
//   })
//   .required();


// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories);
  
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: recipe,
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     data["UserId"] = user.Id; // הוספת UserId לאובייקט הנתונים
//     if (state) {
//       dispatch(editRecipe(data, navig));
//     } else {
//       dispatch(
//         addNewRecipes(
//           {
//             ...data,
//             title: data.Name,
//             ingredients: data.Ingredients,
//             instructions: data.Instructions.map((instruction) => instruction.Step),
//           },
//           navig
//         )
//       );
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   // const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//   //   control,
//   //   name: "Instructions",
//   // });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });
  

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label"> שם </InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel id="demo-simple-select-standard-label">קטגוריה</InputLabel>
//           <Select
//             {...register("CategoryId")}
//             labelId="demo-simple-select-standard-label"
//             id="demo-simple-select-standard"
//             label="קטגוריה">
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             {categories?.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 <p>{category?.Name}</p>
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label"> תמונה </InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="demo-simple-input-standard-label"> זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel id="demo-simple-select-standard-label">רמת קושי</InputLabel>
//           <Select {...register("Difficulty")}
//             labelId="demo-simple-select-standard-label"
//             id="demo-simple-select-standard"
//             label="רמת קושי">
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <React.Fragment key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label"> סוג </InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label"> כמות </InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label">שם מוצר </InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//             <br />
//           </React.Fragment>
//         ))}
//         <br />

//         {/* {fieldsInstructions.map((field, index) => (
//           <React.Fragment key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel id="demo-simple-input-standard-label"> הוראה </InputLabel>
//               <Input {...register(`Instructions.${index}`)} />
//               <p>{errors.Instructions?.[index]?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//             <br />
//           </React.Fragment>
//         ))} */}

// {fieldsInstructions.map((field, index) => (
//   <React.Fragment key={field.id}>
//     <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//       <InputLabel id="demo-simple-input-standard-label"> הוראה </InputLabel>
//       <Input {...register(`Instructions.${index}.Step`)} />
//       <p>{errors.Instructions?.[index]?.Step?.message}</p>
//     </FormControl>

//     <IconButton onClick={() => removeInstructions(index)}>
//       <DeleteForeverIcon />
//     </IconButton>
//     <br />
//   </React.Fragment>
// ))}

//         <br />
//         <button className="my-button" type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}> הוסף מוצר</button>

//         {/* <button className="my-button" type="button" onClick={() => appendInstructions({ Name: "", Count: "", Type: "" })}> הוסף הוראה</button> שונה למערך */}
//         <button className="my-button" type="button" onClick={() => appendInstructions({ Step: "" })}>
//   הוסף הוראה
// </button>

//         <br />
//         <Input type="submit" className="my-button" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;




//עוד גירסה מוצש

// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories);
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: recipe,
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     data.UserId = user.Id;
//     if (state) {
//       dispatch(editRecipe(data, navig));
//     } else {
//       dispatch(addNewRecipes(data, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")}>
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             {categories?.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;

//גירסה נוספת
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories);
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: recipe,
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")}>
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             {categories?.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;

//עוד גירסה אבל
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories) || []; // הגדרת ערך ברירת מחדל
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: recipe,
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")}>
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) && categories.map((category: { Id: number; Name: string }) => ( // בדיקה אם categories הוא מערך
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;
//עוד גירסה
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories) || [];
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Name: recipe?.Name || '',
//       CategoryId: recipe?.CategoryId || '', // הגדרת ערך ברירת מחדל
//       Img: recipe?.Img || '',
//       Duration: recipe?.Duration || '',
//       Difficulty: recipe?.Difficulty || '', // הגדרת ערך ברירת מחדל
//       Description: recipe?.Description || '',
//       Ingredients: recipe?.Ingredients || [],
//       Instructions: recipe?.Instructions || [],
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")} defaultValue={recipe?.CategoryId || ''}>
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) && categories.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")} defaultValue={recipe?.Difficulty || ''}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;
//בגירסה שנגמרה כאן לא היו שגיאות אבל שיניתי אותה כיון שלא הצלחתי לבחור קטגוריה
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories) || [];
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Name: recipe?.Name || '',
//       CategoryId: recipe?.CategoryId || 0, // הגדרת ערך ברירת מחדל
//       Img: recipe?.Img || '',
//       Duration: recipe?.Duration || '',
//       Difficulty: recipe?.Difficulty || 1, // הגדרת ערך ברירת מחדל
//       Description: recipe?.Description || '',
//       Ingredients: recipe?.Ingredients || [],
//       Instructions: recipe?.Instructions || [],
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")} value={recipe?.CategoryId || 0}>
//             <MenuItem value={0}>
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) && categories.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//           <p>{errors.CategoryId?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")} value={recipe?.Difficulty || 1}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;
//עוד גירסה
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories) || [];
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Name: recipe?.Name || '',
//       CategoryId: recipe?.CategoryId || 0,
//       Img: recipe?.Img || '',
//       Duration: recipe?.Duration || '',
//       Difficulty: recipe?.Difficulty || 1,
//       Description: recipe?.Description || '',
//       Ingredients: recipe?.Ingredients || [],
//       Instructions: recipe?.Instructions || [],
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     console.log(recipeData); // הוסף שורה זו לבדוק את הנתונים

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")} value={recipe?.CategoryId || 0}>
//             <MenuItem value={0}>
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) && categories.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//           <p>{errors.CategoryId?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")} value={recipe?.Difficulty || 1}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;
//עוד גירסה לתיקון עניין הקטגוריה
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories) || [];
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Name: recipe?.Name || '',
//       CategoryId: recipe?.CategoryId || 0,
//       Img: recipe?.Img || '',
//       Duration: recipe?.Duration || '',
//       Difficulty: recipe?.Difficulty || 1,
//       Description: recipe?.Description || '',
//       Ingredients: recipe?.Ingredients || [],
//       Instructions: recipe?.Instructions || [],
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     console.log(recipeData); // הוסף שורה זו לבדוק את הנתונים

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")} defaultValue={recipe?.CategoryId || 0}>
//             <MenuItem value={0}>
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) && categories.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//           <p>{errors.CategoryId?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")} defaultValue={recipe?.Difficulty || 1}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;
//הוספת קונסול לוג
// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import addNewRecipes from "../../server/recipeServer/addNewRecipe";
// import editRecipe from "../../server/recipeServer/editRecipe";
// import type { AppDispatch } from "../../store";

// interface Ingredient {
//   Name: string;
//   Count: string;
//   Type: string;
// }

// interface Instruction {
//   Step: string;
// }

// interface FormData {
//   Name: string;
//   CategoryId: number;
//   Img: string;
//   Duration: string;
//   Difficulty: number;
//   Description: string;
//   Ingredients: Ingredient[];
//   Instructions: Instruction[];
//   UserId?: string;
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup.array().of(
//       yup.object().shape({
//         Name: yup.string().required("שדה חובה"),
//         Count: yup.string().required("שדה חובה"),
//         Type: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//     Instructions: yup.array().of(
//       yup.object().shape({
//         Step: yup.string().required("שדה חובה"),
//       })
//     ).required(),
//   })
//   .required();

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation();
//   const recipe = state?.recipe;
//   const user = useSelector((state: any) => state.user);
//   const categories = useSelector((state: any) => state.categories) || [];
//   console.log(categories); // הוספת שורה זו לבדוק את הקטגוריות
//   const dispatch = useDispatch<AppDispatch>();
//   const navig = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Name: recipe?.Name || '',
//       CategoryId: recipe?.CategoryId || 0,
//       Img: recipe?.Img || '',
//       Duration: recipe?.Duration || '',
//       Difficulty: recipe?.Difficulty || 1,
//       Description: recipe?.Description || '',
//       Ingredients: recipe?.Ingredients || [],
//       Instructions: recipe?.Instructions || [],
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user.Id,
//     };

//     console.log(recipeData); // הוסף שורה זו לבדוק את הנתונים

//     if (state) {
//       dispatch(editRecipe(recipeData, navig));
//     } else {
//       dispatch(addNewRecipes(recipeData, navig));
//     }
//   };

//   const { fields: fieldsIngredient, append: appendIngredient, remove: removeIngredient } = useFieldArray({
//     control,
//     name: "Ingredients",
//   });

//   const { fields: fieldsInstructions, append: appendInstructions, remove: removeInstructions } = useFieldArray({
//     control,
//     name: "Instructions",
//   });

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")} defaultValue={recipe?.CategoryId || 0}>
//             <MenuItem value={0}>
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) && categories.map((category: { Id: number; Name: string }) => (
//               <MenuItem key={category.Id} value={category.Id}>
//                 {category.Name}
//               </MenuItem>
//             ))}
//           </Select>
//           <p>{errors.CategoryId?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p>{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")} defaultValue={recipe?.Difficulty || 1}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p>{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p>{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p>{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p>{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p>{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <Input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRecipes;

//גירסת אחרת של וי0

// import type React from "react"

// import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import { useDispatch, useSelector } from "react-redux"
// import { useLocation, useNavigate } from "react-router-dom"
// import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material"
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
// import addNewRecipes from "../../server/recipeServer/addNewRecipe"
// import editRecipe from "../../server/recipeServer/editRecipe"
// import type { AppDispatch, RootState } from "../../store"
// import { useEffect } from "react"

// interface Ingredient {
//   Name: string
//   Count: string
//   Type: string
// }

// interface Instruction {
//   Step: string
// }

// interface FormData {
//   Name: string
//   CategoryId: number
//   Img: string
//   Duration: string
//   Difficulty: number
//   Description: string
//   Ingredients: Ingredient[]
//   Instructions: Instruction[]
//   UserId?: string
// }

// const schema = yup
//   .object({
//     Name: yup.string().required("שדה חובה"),
//     CategoryId: yup.number().required("שדה חובה"),
//     Img: yup.string().required("שדה חובה"),
//     Duration: yup.string().required("שדה חובה"),
//     Difficulty: yup.number().positive().required("שדה חובה"),
//     Description: yup.string().required("שדה חובה"),
//     Ingredients: yup
//       .array()
//       .of(
//         yup.object().shape({
//           Name: yup.string().required("שדה חובה"),
//           Count: yup.string().required("שדה חובה"),
//           Type: yup.string().required("שדה חובה"),
//         }),
//       )
//       .required(),
//     Instructions: yup
//       .array()
//       .of(
//         yup.object().shape({
//           Step: yup.string().required("שדה חובה"),
//         }),
//       )
//       .required(),
//   })
//   .required()

// const AddRecipes: React.FC = () => {
//   const { state } = useLocation()
//   const recipe = state?.recipe
//   const user = useSelector((state: RootState) => state.user)
//   const categories = useSelector((state: RootState) => state.categories.categories) || []
//   const dispatch = useDispatch<AppDispatch>()
//   const navig = useNavigate()

//   useEffect(() => {
//     console.log("Categories in AddRecipe:", categories)
//   }, [categories])

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       Name: recipe?.Name || "",
//       CategoryId: recipe?.CategoryId || 0,
//       Img: recipe?.Img || "",
//       Duration: recipe?.Duration || "",
//       Difficulty: recipe?.Difficulty || 1,
//       Description: recipe?.Description || "",
//       Ingredients: recipe?.Ingredients || [],
//       Instructions:
//         recipe?.Instructions?.map((instruction: any) =>
//           typeof instruction === "string" ? { Step: instruction } : instruction,
//         ) || [],
//     },
//   })

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     const recipeData = {
//       title: data.Name,
//       ingredients: data.Ingredients.map((ingredient) => ({
//         Name: ingredient.Name,
//         Count: ingredient.Count,
//         Type: ingredient.Type,
//       })),
//       instructions: data.Instructions.map((instruction) => instruction.Step),
//       categoryId: data.CategoryId,
//       img: data.Img,
//       duration: data.Duration,
//       difficulty: data.Difficulty,
//       description: data.Description,
//       userId: user?.Id,
//     }

//     console.log("Submitting recipe data:", recipeData)

//     if (state) {
//       dispatch(editRecipe(recipeData, navig))
//     } else {
//       dispatch(addNewRecipes(recipeData, navig))
//     }
//   }

//   const {
//     fields: fieldsIngredient,
//     append: appendIngredient,
//     remove: removeIngredient,
//   } = useFieldArray({
//     control,
//     name: "Ingredients",
//   })

//   const {
//     fields: fieldsInstructions,
//     append: appendInstructions,
//     remove: removeInstructions,
//   } = useFieldArray({
//     control,
//     name: "Instructions",
//   })

//   return (
//     <div className="background-img backgroundPage addRecipe">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>שם</InputLabel>
//           <Input {...register("Name")} />
//           <p className="error-message">{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>קטגוריה</InputLabel>
//           <Select {...register("CategoryId")} defaultValue={recipe?.CategoryId || 0}>
//             <MenuItem value={0}>
//               <em>None</em>
//             </MenuItem>
//             {Array.isArray(categories) &&
//               categories.map((category: any) => (
//                 <MenuItem key={category.Id} value={category.Id}>
//                   {category.Name}
//                 </MenuItem>
//               ))}
//           </Select>
//           <p className="error-message">{errors.CategoryId?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תמונה</InputLabel>
//           <Input {...register("Img")} />
//           <p className="error-message">{errors.Img?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>זמן הכנה</InputLabel>
//           <Input {...register("Duration")} type="number" />
//           <p className="error-message">{errors.Duration?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
//           <InputLabel>רמת קושי</InputLabel>
//           <Select {...register("Difficulty")} defaultValue={recipe?.Difficulty || 1}>
//             <MenuItem value={1}>קל</MenuItem>
//             <MenuItem value={2}>בינוני</MenuItem>
//             <MenuItem value={3}>קשה</MenuItem>
//           </Select>
//           <p className="error-message">{errors.Difficulty?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel>תיאור</InputLabel>
//           <Input {...register("Description")} />
//           <p className="error-message">{errors.Description?.message}</p>
//         </FormControl>
//         <br />

//         {fieldsIngredient.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>סוג</InputLabel>
//               <Input {...register(`Ingredients.${index}.Type`)} />
//               <p className="error-message">{errors.Ingredients?.[index]?.Type?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>כמות</InputLabel>
//               <Input {...register(`Ingredients.${index}.Count`)} />
//               <p className="error-message">{errors.Ingredients?.[index]?.Count?.message}</p>
//             </FormControl>

//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>שם מוצר</InputLabel>
//               <Input {...register(`Ingredients.${index}.Name`)} />
//               <p className="error-message">{errors.Ingredients?.[index]?.Name?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeIngredient(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" className="my-button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
//           הוסף מוצר
//         </button>
//         <br />

//         {fieldsInstructions.map((field, index) => (
//           <div key={field.id}>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//               <InputLabel>הוראה</InputLabel>
//               <Input {...register(`Instructions.${index}.Step`)} />
//               <p className="error-message">{errors.Instructions?.[index]?.Step?.message}</p>
//             </FormControl>

//             <IconButton onClick={() => removeInstructions(index)}>
//               <DeleteForeverIcon />
//             </IconButton>
//           </div>
//         ))}
//         <button type="button" className="my-button" onClick={() => appendInstructions({ Step: "" })}>
//           הוסף הוראה
//         </button>
//         <br />

//         <input type="submit" className="my-button" value="שמור מתכון" />
//       </form>
//     </div>
//   )
// }

// export default AddRecipes
//other version

import type React from "react"

import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { FormControl, IconButton, Input, InputLabel, Select, MenuItem } from "@mui/material"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import addNewRecipes from "../../server/recipeServer/addNewRecipe"
import editRecipe from "../../server/recipeServer/editRecipe"
import type { AppDispatch, RootState } from "../../store"
import { useEffect } from "react"
import type { Category } from "../../store/categoriesSlice"

interface Ingredient {
  Name: string
  Count: string
  Type: string
}

interface Instruction {
  Step: string
}

interface FormData {
  Name: string
  CategoryId: number
  Img: string
  Duration: string
  Difficulty: number
  Description: string
  Ingredients: Ingredient[]
  Instructions: Instruction[]
  UserId?: number
}

const schema = yup
  .object({
    Name: yup.string().required("שדה חובה"),
    CategoryId: yup.number().required("שדה חובה"),
    Img: yup.string().required("שדה חובה"),
    Duration: yup.string().required("שדה חובה"),
    Difficulty: yup.number().positive().required("שדה חובה"),
    Description: yup.string().required("שדה חובה"),
    Ingredients: yup
      .array()
      .of(
        yup.object().shape({
          Name: yup.string().required("שדה חובה"),
          Count: yup.string().required("שדה חובה"),
          Type: yup.string().required("שדה חובה"),
        }),
      )
      .required(),
    Instructions: yup
      .array()
      .of(
        yup.object().shape({
          Step: yup.string().required("שדה חובה"),
        }),
      )
      .required(),
  })
  .required()

const AddRecipes: React.FC = () => {
  const { state } = useLocation()
  const recipe = state?.recipe
  const user = useSelector((state: RootState) => state.user.user)
  const categories = useSelector((state: RootState) => state.categories.categories)
  const dispatch = useDispatch<AppDispatch>()
  const navig = useNavigate()

  useEffect(() => {
    console.log("Categories in AddRecipe:", categories)
    console.log("Current user:", user)
  }, [categories, user])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      Name: recipe?.Name || "",
      CategoryId: recipe?.CategoryId || 0,
      Img: recipe?.Img || "",
      Duration: recipe?.Duration || "",
      Difficulty: recipe?.Difficulty || 1,
      Description: recipe?.Description || "",
      Ingredients: recipe?.Ingredients || [],
      Instructions:
        recipe?.Instructions?.map((instruction: any) =>
          typeof instruction === "string" ? { Step: instruction } : instruction,
        ) || [],
    },
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!user) {
      alert("יש להתחבר כדי להוסיף מתכון")
      navig("/login")
      return
    }

    const recipeData = {
      title: data.Name,
      ingredients: data.Ingredients.map((ingredient) => ({
        Name: ingredient.Name,
        Count: ingredient.Count,
        Type: ingredient.Type,
      })),
      instructions: data.Instructions.map((instruction) => instruction.Step),
      categoryId: data.CategoryId,
      img: data.Img,
      duration: data.Duration,
      difficulty: data.Difficulty,
      description: data.Description,
      userId: user.Id,
    }

    console.log("Submitting recipe data:", recipeData)

    if (state) {
      dispatch(editRecipe(recipeData, navig))
    } else {
      dispatch(addNewRecipes(recipeData, navig))
    }
  }

  const {
    fields: fieldsIngredient,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "Ingredients",
  })

  const {
    fields: fieldsInstructions,
    append: appendInstructions,
    remove: removeInstructions,
  } = useFieldArray({
    control,
    name: "Instructions",
  })

  if (!user) {
    return (
      <div className="background-img backgroundPage">
        <h2>יש להתחבר כדי להוסיף מתכון</h2>
        <button className="my-button" onClick={() => navig("/login")}>
          התחבר
        </button>
      </div>
    )
  }

  return (
    <div className="background-img backgroundPage addRecipe">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel>שם</InputLabel>
          <Input {...register("Name")} />
          <p className="error-message">{errors.Name?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
          <InputLabel>קטגוריה</InputLabel>
          <Select {...register("CategoryId")} defaultValue={recipe?.CategoryId || 0}>
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            {categories &&
              categories.map((category: Category) => (
                <MenuItem key={category.Id} value={category.Id}>
                  {category.Name}
                </MenuItem>
              ))}
          </Select>
          <p className="error-message">{errors.CategoryId?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel>תמונה</InputLabel>
          <Input {...register("Img")} />
          <p className="error-message">{errors.Img?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>זמן הכנה</InputLabel>
          <Input {...register("Duration")} type="number" />
          <p className="error-message">{errors.Duration?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
          <InputLabel>רמת קושי</InputLabel>
          <Select {...register("Difficulty")} defaultValue={recipe?.Difficulty || 1}>
            <MenuItem value={1}>קל</MenuItem>
            <MenuItem value={2}>בינוני</MenuItem>
            <MenuItem value={3}>קשה</MenuItem>
          </Select>
          <p className="error-message">{errors.Difficulty?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel>תיאור</InputLabel>
          <Input {...register("Description")} />
          <p className="error-message">{errors.Description?.message}</p>
        </FormControl>
        <br />

        {fieldsIngredient.map((field, index) => (
          <div key={field.id}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
              <InputLabel>סוג</InputLabel>
              <Input {...register(`Ingredients.${index}.Type`)} />
              <p className="error-message">{errors.Ingredients?.[index]?.Type?.message}</p>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
              <InputLabel>כמות</InputLabel>
              <Input {...register(`Ingredients.${index}.Count`)} />
              <p className="error-message">{errors.Ingredients?.[index]?.Count?.message}</p>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
              <InputLabel>שם מוצר</InputLabel>
              <Input {...register(`Ingredients.${index}.Name`)} />
              <p className="error-message">{errors.Ingredients?.[index]?.Name?.message}</p>
            </FormControl>

            <IconButton onClick={() => removeIngredient(index)}>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        ))}
        <button type="button" className="my-button" onClick={() => appendIngredient({ Name: "", Count: "", Type: "" })}>
          הוסף מוצר
        </button>
        <br />

        {fieldsInstructions.map((field, index) => (
          <div key={field.id}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
              <InputLabel>הוראה</InputLabel>
              <Input {...register(`Instructions.${index}.Step`)} />
              <p className="error-message">{errors.Instructions?.[index]?.Step?.message}</p>
            </FormControl>

            <IconButton onClick={() => removeInstructions(index)}>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        ))}
        <button type="button" className="my-button" onClick={() => appendInstructions({ Step: "" })}>
          הוסף הוראה
        </button>
        <br />

        <input type="submit" className="my-button" value="שמור מתכון" />
      </form>
    </div>
  )
}

export default AddRecipes




//אחר
"use client"

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
// Define Category type locally if not exported from categoriesSlice
type Category = {
  Id: number
  Name: string
}

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

    // התאמת המבנה לפי מה שהשרת מצפה לקבל
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


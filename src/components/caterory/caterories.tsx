

import type React from "react"

import { useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import addCategory from "../../server/categoryServer/addCategory"
import { FormControl, Input, InputLabel } from "@mui/material"
import type { RootState } from "../../store"
import type { ThunkDispatch } from "redux-thunk"
import type { AnyAction } from "redux"
import { useEffect } from "react"
import type { Category } from "../../server/categoryServer/categoriesSlice"

interface FormInputs {
  Name: string
}

const schema = yup
  .object({
    Name: yup.string().required("שדה זה הוא חובה"),
  })
  .required()

const Categories: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.categories)
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch()

  useEffect(() => {
    console.log("Categories in Categories component:", categories)
  }, [categories])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Adding category:", data)
    const mappedData = {
      name: data.Name,
    }
    dispatch(addCategory(mappedData))
    reset() // איפוס הטופס לאחר שליחה
  }

  return (
    <div className="categories background-img backgroundPage">
      <h2>קטגוריות קיימות</h2>
      <div className="categories-list">
        {categories && categories.length > 0 ? (
          categories.map((category: Category) => <h4 key={category.Id}>{category.Name}</h4>)
        ) : (
          <p>אין קטגוריות זמינות</p>
        )}
      </div>
      <div className="add-category-form">
        <h3>הוספת קטגוריה חדשה</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
            <InputLabel id="demo-simple-input-standard-label">הוסף קטגוריה</InputLabel>
            <Input {...register("Name")} />
            <p className="error-message">{errors.Name?.message}</p>
          </FormControl>
          <br />
          <input type="submit" className="my-button" value="הוסף" />
        </form>
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

export default Categories

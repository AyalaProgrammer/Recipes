

import type React from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { addNewUser } from "../../server/userServer/userService"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store"
import { FormControl, Input, InputLabel } from "@mui/material"

const schema = yup
  .object({
    Username: yup.string().required("שם משתמש הוא שדה חובה"),
    Password: yup.string().required("סיסמא היא שדה חובה"),
    Name: yup.string().required("שם הוא שדה חובה"),
    Phone: yup.number().typeError("טלפון חייב להיות מספר").positive().integer().required("טלפון הוא שדה חובה"),
    Email: yup.string().email("כתובת מייל לא תקינה").nullable(),
    Tz: yup.number().typeError("תעודת זהות חייבת להיות מספר").positive().integer("תעודת זהות לא תקינה").nullable(),
  })
  .required()

type SigninFormData = {
  Username: string
  Password: string
  Name: string
  Phone: number
  Email: string | null
  Tz: number | null
}

const Sighin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      Username: "",
      Password: "",
      Name: "",
      Phone: 0,
      Email: null,
      Tz: null,
    },
  })

  const onSubmit = (data: SigninFormData) => {
    console.log("Registration data:", data)
    const userDataToSend = {
      UserName: data.Username,
      Password: data.Password,
      Name: data.Name,
      Phone: data.Phone,
      Email: data.Email || undefined,
      Tz: data.Tz || undefined,
    }

    dispatch(addNewUser(userDataToSend))
    navigate("/Login")
  }

  return (
    <div className="background-img backgroundPage">
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">שם משתמש</InputLabel>
          <Input {...register("Username")} />
          <p className="error-message">{errors.Username?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">סיסמא</InputLabel>
          <Input type="password" {...register("Password")} />
          <p className="error-message">{errors.Password?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">שם</InputLabel>
          <Input {...register("Name")} />
          <p className="error-message">{errors.Name?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">טלפון</InputLabel>
          <Input type="number" {...register("Phone")} />
          <p className="error-message">{errors.Phone?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">מייל</InputLabel>
          <Input type="email" {...register("Email")} />
          <p className="error-message">{errors.Email?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">תעודת זהות</InputLabel>
          <Input type="number" {...register("Tz")} />
          <p className="error-message">{errors.Tz?.message}</p>
        </FormControl>
        <br />

        <input type="submit" className="my-button" value="הירשם" />
        <br />

        <Link to={"/login"}>כבר יש לך חשבון? התחבר עכשיו</Link>
      </form>
    </div>
  )
}

export default Sighin

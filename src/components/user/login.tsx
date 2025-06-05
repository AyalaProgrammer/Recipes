

import { useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import loginUser from "../../server/userServer/loginUserService"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store"
import { Link } from "react-router-dom"
import { FormControl, Input, InputLabel } from "@mui/material"

interface LoginFormInputs {
  UserName: string
  Password: string
}

const schema = yup
  .object({
    UserName: yup.string().required("שם משתמש הוא שדה חובה"),
    Password: yup.string().required("סיסמא היא שדה חובה"),
  })
  .required()

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login form submitted:", data)
    dispatch(loginUser(data))
  }

  return (
    <div className="background-img backgroundPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">שם משתמש</InputLabel>
          <Input {...register("UserName")} />
          <p className="error-message">{errors.UserName?.message}</p>
        </FormControl>
        <br />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">סיסמא</InputLabel>
          <Input type="password" {...register("Password")} />
          <p className="error-message">{errors.Password?.message}</p>
        </FormControl>
        <br />
        <input type="submit" className="my-button" value="התחבר" />
        <br />
        <Link to={"/sighin"}>אין לך חשבון? הירשם עכשיו</Link>
      </form>
    </div>
  )
}

export default Login
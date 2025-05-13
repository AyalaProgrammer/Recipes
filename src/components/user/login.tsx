// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import loginUser from "../../server/userServer/loginUserService"
// import { useDispatch } from "react-redux"
// import { Link } from 'react-router-dom'
// import * as React from 'react';
// import { FormControl, Input, InputLabel } from '@mui/material';



// const schema = yup
//   .object({
//     UserName: yup.string().required(),
//     Password: yup.string().required(),
//   })
//   .required()

// const Login = () => {

//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   })
//   const onSubmit = (data) => {

//     dispatch(loginUser(data))
//   }

//   return (<div className="background-img backgroundPage">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> שם משתמש </InputLabel>
//         <Input {...register("UserName")} />
//         <p>{errors.Username?.mesfsage}</p>
//       </FormControl>
//       <br />
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> סיסמא </InputLabel>
//         <Input type="password" {...register("Password")} />
//         <p>{errors.Password?.message}</p>
//       </FormControl>
//       <br />
//       <input type="submit" className="my-button" />
//       <br />
//       <Link to={'/Sighin'}>Don't have an account yet? Sign in now</Link>
//     </form>
//   </div>
//   )
// }
// export default Login;

// //גירסה אחרת של קוממיפלוט
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// // import loginUser from "../../server/userServer/loginUserService";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../store"; // Adjust the path to your store file
// import { Link } from "react-router-dom";
// import { FormControl, Input, InputLabel } from "@mui/material";
// import loginUser from "../../server/userServer/loginUserService";

// interface LoginFormInputs {
//   UserName: string;
//   Password: string;
// }

// const schema = yup
//   .object({
//     UserName: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//   })
//   .required();

// const Login = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
//     dispatch(loginUser(data));
//   };

//   return (
//     <div className="background-img backgroundPage">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם משתמש</InputLabel>
//           <Input {...register("UserName")} />
//           <p>{errors.UserName?.message}</p>
//         </FormControl>
//         <br />
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">סיסמא</InputLabel>
//           <Input type="password" {...register("Password")} />
//           <p>{errors.Password?.message}</p>
//         </FormControl>
//         <br />
//         <input type="submit" className="my-button" />
//         <br />
//         <Link to={"/Sighin"}>Don't have an account yet? Sign in now</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;

// 
// //
// גירסה אחרת
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import loginUser from "../../server/userServer/loginUserService";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../store";
// import { Link } from "react-router-dom";
// import { FormControl, Input, InputLabel } from "@mui/material";

// interface LoginFormInputs {
//   Username: string;
//   Password: string;
// }

// const schema = yup
//   .object({
//     Username: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//   })
//   .required();

// const Login = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
//     dispatch(loginUser(data));
//   };

//   return (
//     <div className="background-img backgroundPage">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם משתמש</InputLabel>
//           <Input {...register("Username")} />
//           <p>{errors.Username?.message}</p>
//         </FormControl>
//         <br />
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">סיסמא</InputLabel>
//           <Input type="password" {...register("Password")} />
//           <p>{errors.Password?.message}</p>
//         </FormControl>
//         <br />
//         <input type="submit" className="my-button" />
//         <br />
//         <Link to={"/sighin"}>אין לך חשבון? הירשם עכשיו</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;
//גירסה אחרת של וי0

import { useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import loginUser from "../../server/userServer/loginUserService"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store"
import { Link } from "react-router-dom"
import { FormControl, Input, InputLabel } from "@mui/material"

interface LoginFormInputs {
  Username: string
  Password: string
}

const schema = yup
  .object({
    Username: yup.string().required("שם משתמש הוא שדה חובה"),
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
        <input type="submit" className="my-button" value="התחבר" />
        <br />
        <Link to={"/sighin"}>אין לך חשבון? הירשם עכשיו</Link>
      </form>
    </div>
  )
}

export default Login
//other

// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import loginUser from "../../server/userServer/loginUserService"
// import { useDispatch } from "react-redux"
// import type { AppDispatch } from "../../store"
// import { Link } from "react-router-dom"
// import { FormControl, Input, InputLabel } from "@mui/material"

// interface LoginFormInputs {
//   Username: string
//   Password: string
// }

// const schema = yup
//   .object({
//     Username: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//   })
//   .required()

// const Login = () => {
//   const dispatch = useDispatch<AppDispatch>()
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>({
//     resolver: yupResolver(schema),
//   })

//   const onSubmit = (data: LoginFormInputs) => {
//     console.log("Login form submitted:", data)
//     dispatch(loginUser(data))
//   }

//   return (
//     <div className="background-img backgroundPage">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם משתמש</InputLabel>
//           <Input {...register("Username")} />
//           <p className="error-message">{errors.Username?.message}</p>
//         </FormControl>
//         <br />
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">סיסמא</InputLabel>
//           <Input type="password" {...register("Password")} />
//           <p className="error-message">{errors.Password?.message}</p>
//         </FormControl>
//         <br />
//         <input type="submit" className="my-button" value="התחבר" />
//         <br />
//         <Link to={"/sighin"}>אין לך חשבון? הירשם עכשיו</Link>
//       </form>
//     </div>
//   )
// }

// export default Login

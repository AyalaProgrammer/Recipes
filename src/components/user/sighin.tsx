// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import { addNewUser } from '../../server/userServer/userService'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from "react-redux"
// import * as React from 'react';
// import { FormControl, Input, InputLabel } from '@mui/material';



// const schema = yup
//   .object({
//     UserName: yup.string().required(),
//     Password: yup.string().required(),
//     Name: yup.string().required(),
//     Phone: yup.number().positive().integer().required(),
//     Email: yup.string().email(),
//     Tz: yup.number().positive().integer()
//   })
//   .required()


// const Sighin = () => {

//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   })
//   const onSubmit = (data) => {    
//     dispatch(addNewUser(data))
//   }


//   return (<div className="background-img backgroundPage">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> שם משתמש </InputLabel>
//         <Input {...register("UserName")} />
//         <p>{errors.Username?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> סיסמא </InputLabel>
//         <Input {...register("Password")} />
//         <p>{errors.Password?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> שם </InputLabel>
//         <Input {...register("Name")} />
//         <p>{errors.Name?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> טלפון </InputLabel>
//         <Input {...register("Phone")} />
//         <p>{errors.Phone?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> מייל </InputLabel>
//         <Input {...register("Email")} />
//         <p>{errors.Email?.message}</p>
//       </FormControl>
//       <br />

//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//         <InputLabel id="demo-simple-input-standard-label"> תעודת זהות </InputLabel>
//         <Input {...register("Tz")} />
//         <p>{errors.Tz?.message}</p>
//       </FormControl>
//       <br />

//       <input type="submit" className="my-button" />
//       <br />

//       <Link to={'/Login'}>Do you have an account yet?  login now</Link>
//     </form>
//   </div>
//   )
// }
// export default Sighin;

//גירסה אחרת של קומפיילוט 

// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { addNewUser } from "../../server/userServer/userService";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../store"; // Adjust the path to your store file
// // import * as React from "react";
// import { FormControl, Input, InputLabel } from "@mui/material";

// interface SighinFormInputs {
//   UserName: string;
//   Password: string;
//   Name: string;
//   Phone: number;
//   Email?: string;
//   Tz?: number;
// }

// const schema = yup
//   .object({
//     UserName: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//     Name: yup.string().required("שם הוא שדה חובה"),
//     Phone: yup.number().positive().integer().required("טלפון הוא שדה חובה"),
//     Email: yup.string().email("כתובת מייל לא תקינה").nullable().notRequired(),
//     Tz: yup.number().positive().integer("תעודת זהות לא תקינה").nullable().notRequired(),
//   })
//   .required();

// const Sighin = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SighinFormInputs>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       UserName: "",
//       Password: "",
//       Name: "",
//       Phone: undefined,
//       Email: undefined,
//       Tz: undefined,
//     },
//   });
//   const onSubmit: SubmitHandler<SighinFormInputs> = (data) => {
//     dispatch(addNewUser(data));
//     navigate("/Login");
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

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">טלפון</InputLabel>
//           <Input type="number" {...register("Phone")} />
//           <p>{errors.Phone?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">מייל</InputLabel>
//           <Input type="email" {...register("Email")} />
//           <p>{errors.Email?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">תעודת זהות</InputLabel>
//           <Input type="number" {...register("Tz")} />
//           <p>{errors.Tz?.message}</p>
//         </FormControl>
//         <br />

//         <input type="submit" className="my-button" />
//         <br />

//         <Link to={"/Login"}>Do you have an account yet? Login now</Link>
//       </form>
//     </div>
//   );
// };

// export default Sighin;

//עוד גירסה האמת לדעתי אותו דבר כמו הקודם
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { addNewUser } from "../../server/userServer/userService";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../store";
// import { FormControl, Input, InputLabel } from "@mui/material";

// interface SighinFormInputs {
//   UserName: string;
//   Password: string;
//   Name: string;
//   Phone: number;
//   Email?: string;
//   Tz?: number;
// }

// const schema = yup
//   .object({
//     UserName: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//     Name: yup.string().required("שם הוא שדה חובה"),
//     Phone: yup.number().positive().integer().required("טלפון הוא שדה חובה"),
//     Email: yup.string().email("כתובת מייל לא תקינה").nullable().notRequired(),
//     Tz: yup.number().positive().integer("תעודת זהות לא תקינה").nullable().notRequired(),
//   })
//   .required();

// const Sighin: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SighinFormInputs>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       UserName: "",
//       Password: "",
//       Name: "",
//       Phone: undefined,
//       Email: undefined,
//       Tz: undefined,
//     },
//   });

//   const onSubmit: SubmitHandler<SighinFormInputs> = (data) => {
//     dispatch(addNewUser(data));
//     navigate("/Login");
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

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">טלפון</InputLabel>
//           <Input type="number" {...register("Phone")} />
//           <p>{errors.Phone?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">מייל</InputLabel>
//           <Input type="email" {...register("Email")} />
//           <p>{errors.Email?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">תעודת זהות</InputLabel>
//           <Input type="number" {...register("Tz")} />
//           <p>{errors.Tz?.message}</p>
//         </FormControl>
//         <br />

//         <input type="submit" className="my-button" />
//         <br />

//         <Link to={"/Login"}>Do you have an account yet? Login now</Link>
//       </form>
//     </div>
//   );
// };

// export default Sighin;

//עוד גירסה

// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { addNewUser } from "../../server/userServer/userService";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../store";
// import { FormControl, Input, InputLabel } from "@mui/material";

// interface SighinFormInputs {
//   UserName: string;
//   Password: string;
//   Name: string;
//   Phone: number;
//   Email?: string;
//   Tz?: number;
// }

// const schema = yup
//   .object({
//     UserName: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//     Name: yup.string().required("שם הוא שדה חובה"),
//     Phone: yup.number().positive().integer().required("טלפון הוא שדה חובה"),
//     Email: yup.string().email("כתובת מייל לא תקינה").nullable().notRequired(),
//     Tz: yup.number().positive().integer("תעודת זהות לא תקינה").nullable().notRequired(),
//   })
//   .required();

// const Sighin: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SighinFormInputs>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       UserName: "",
//       Password: "",
//       Name: "",
//       Phone: undefined,
//       Email: undefined,
//       Tz: undefined,
//     },
//   });

//   const onSubmit: SubmitHandler<SighinFormInputs> = (data) => {
//     dispatch(addNewUser(data));
//     navigate("/Login");
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

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">טלפון</InputLabel>
//           <Input type="number" {...register("Phone")} />
//           <p>{errors.Phone?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">מייל</InputLabel>
//           <Input type="email" {...register("Email")} />
//           <p>{errors.Email?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">תעודת זהות</InputLabel>
//           <Input type="number" {...register("Tz")} />
//           <p>{errors.Tz?.message}</p>
//         </FormControl>
//         <br />

//         <input type="submit" className="my-button" />
//         <br />

//         <Link to={"/Login"}>Do you have an account yet? Login now</Link>
//       </form>
//     </div>
//   );
// };

// export default Sighin;

//עוד גירסה

// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { addNewUser } from "../../server/userServer/userService";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../store";
// import { FormControl, Input, InputLabel } from "@mui/material";

// interface SighinFormInputs {
//   UserName: string;
//   Password: string;
//   Name: string;
//   Phone: number;
//   Email?: string;
//   Tz?: number;
// }

// const schema = yup
//   .object({
//     UserName: yup.string().required("שם משתמש הוא שדה חובה"),
//     Password: yup.string().required("סיסמא היא שדה חובה"),
//     Name: yup.string().required("שם הוא שדה חובה"),
//     Phone: yup.number().positive().integer().required("טלפון הוא שדה חובה"),
//     Email: yup.string().email("כתובת מייל לא תקינה").nullable().notRequired(),
//     Tz: yup.number().positive().integer("תעודת זהות לא תקינה").nullable().notRequired(),
//   })
//   .required();

// const Sighin: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ // <-- השינוי כאן: הוסר <SighinFormInputs>
//     resolver: yupResolver(schema),
//     defaultValues: {
//       UserName: "",
//       Password: "",
//       Name: "",
//       Phone: undefined,
//       Email: undefined,
//       Tz: undefined,
//     },
//   });

//   const onSubmit: SubmitHandler<SighinFormInputs> = (data) => {
//     dispatch(addNewUser(data));
//     navigate("/Login");
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

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">שם</InputLabel>
//           <Input {...register("Name")} />
//           <p>{errors.Name?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">טלפון</InputLabel>
//           <Input type="number" {...register("Phone")} />
//           <p>{errors.Phone?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">מייל</InputLabel>
//           <Input type="email" {...register("Email")} />
//           <p>{errors.Email?.message}</p>
//         </FormControl>
//         <br />

//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//           <InputLabel id="demo-simple-input-standard-label">תעודת זהות</InputLabel>
//           <Input type="number" {...register("Tz")} />
//           <p>{errors.Tz?.message}</p>
//         </FormControl>
//         <br />

//         <input type="submit" className="my-button" />
//         <br />

//         <Link to={"/Login"}>Do you have an account yet? Login now</Link>
//       </form>
//     </div>
//   );
// };

// export default Sighin;
//עוד גירסה
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addNewUser } from "../../server/userServer/userService"; // נניח ש-addNewUser מצפה לטיפוס UserData
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { FormControl, Input, InputLabel } from "@mui/material";


const schema = yup
  .object({
    UserName: yup.string().required("שם משתמש הוא שדה חובה"),
    Password: yup.string().required("סיסמא היא שדה חובה"),
    Name: yup.string().required("שם הוא שדה חובה"),
    Phone: yup.number().positive().integer().required("טלפון הוא שדה חובה"),
    Email: yup.string().email("כתובת מייל לא תקינה").nullable().notRequired(), // מאפשר string, null או undefined
    Tz: yup.number().positive().integer("תעודת זהות לא תקינה").nullable().notRequired(), // מאפשר number, null או undefined
  })
  .required();

const Sighin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      UserName: "",
      Password: "",
      Name: "",
      Phone: undefined,
      Email: undefined,
      Tz: undefined,
    },
  });

  const onSubmit = (data: yup.InferType<typeof schema>) => {
    // התאמת הנתונים לטיפוס UserData לפני שליחה ל-addNewUser
    const userDataToSend = {
      UserName: data.UserName,
      Password: data.Password,
      Name: data.Name,
      Phone: data.Phone,
      // המרת null ל-undefined עבור שדות אופציונליים אם הם קיימים ב-data
      Email: data.Email === null ? undefined : data.Email,
      Tz: data.Tz === null ? undefined : data.Tz,
    };

    // נניח ש-addNewUser מקבל UserData
    dispatch(addNewUser(userDataToSend)); // <-- השינוי כאן: העברת userDataToSend
    navigate("/Login");
  };

  return (
    <div className="background-img backgroundPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">שם משתמש</InputLabel>
          <Input {...register("UserName")} />
          <p>{errors.UserName?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">סיסמא</InputLabel>
          <Input type="password" {...register("Password")} />
          <p>{errors.Password?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">שם</InputLabel>
          <Input {...register("Name")} />
          <p>{errors.Name?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">טלפון</InputLabel>
          <Input type="number" {...register("Phone")} />
          <p>{errors.Phone?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">מייל</InputLabel>
          <Input type="email" {...register("Email")} />
          <p>{errors.Email?.message}</p>
        </FormControl>
        <br />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
          <InputLabel id="demo-simple-input-standard-label">תעודת זהות</InputLabel>
          <Input type="number" {...register("Tz")} />
          <p>{errors.Tz?.message}</p>
        </FormControl>
        <br />

        <input type="submit" className="my-button" />
        <br />

        <Link to={"/Login"}>Do you have an account yet? Login now</Link>
      </form>
    </div>
  );
};

export default Sighin;


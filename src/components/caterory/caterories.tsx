// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import { useDispatch, useSelector } from "react-redux";
// import addCategory from "../../server/categoryServer/addCategory";
// import { FormControl, Input, InputLabel } from "@mui/material";

// const schema = yup
//     .object({
//         Name: yup.string().required(),
//     })
//     .required()

// const Caterories = () => {
//     const categories = useSelector(state => state.categories)
//     const dispatch = useDispatch()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//     })
//     const onSubmit = (data) => {
//         dispatch(addCategory(data))
//     }

//     return (<div className="categories background-img backgroundPage">
//         <div>
//             {categories?.map((category) => (
//                 <h4 key={category.Id}>
//                     {category?.Name}
//                 </h4>
//             ))}
//         </div>
//         <div className="ll">
//             <form onSubmit={handleSubmit(onSubmit)} >

//                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//                     <InputLabel id="demo-simple-input-standard-label"> הוסף קטגוריה </InputLabel>
//                     <Input {...register("Name")} />
//                     <p>{errors.Name?.message}</p>
//                 </FormControl>
//                 <br />
//                 <input type="submit" className="my-button" />
//             </form>
//         </div>
//     </div>)
// }
// export default Caterories;
//גירסה ראשונה של קומפיילוט
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import addCategory from "../../server/categoryServer/addCategory";
// import { FormControl, Input, InputLabel } from "@mui/material";
// import type { RootState } from "../../store"; // עדכן את הנתיב בהתאם למיקום ה-RootState שלך
//  // עדכן את הנתיב בהתאם למיקום ה-RootState שלך

// interface Category {
//     Id: number;
//     Name: string;
// }

// interface FormInputs {
//     Name: string;
// }

// const schema = yup
//     .object({
//         Name: yup.string().required("שדה זה הוא חובה"),
//     })
//     .required();

// const Caterories: React.FC = () => {
//     const categories = useSelector((state: RootState) => state.categories as Category[]);
//     const dispatch = useDispatch();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormInputs>({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit: SubmitHandler<FormInputs> = (data) => {
//         dispatch(addCategory(data));
//     };

//     return (
//         <div className="categories background-img backgroundPage">
//             <div>
//                 {categories?.map((category) => (
//                     <h4 key={category.Id}>{category?.Name}</h4>
//                 ))}
//             </div>
//             <div className="ll">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//                         <InputLabel id="demo-simple-input-standard-label">הוסף קטגוריה</InputLabel>
//                         <Input {...register("Name")} />
//                         <p>{errors.Name?.message}</p>
//                     </FormControl>
//                     <br />
//                     <input type="submit" className="my-button" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Caterories;
//גירסה נוספת
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import addCategory from "../../server/categoryServer/addCategory";
// import { FormControl, Input, InputLabel } from "@mui/material";
// import type { RootState } from "../../store"; // עדכן את הנתיב בהתאם למיקום ה-RootState שלך
// import type { ThunkDispatch } from "redux-thunk";
// import type { AnyAction } from "redux";

// interface Category {
//     Id: number;
//     Name: string;
// }

// interface FormInputs {
//     Name: string;
// }

// const schema = yup
//     .object({
//         Name: yup.string().required("שדה זה הוא חובה"),
//     })
//     .required();

// const Caterories: React.FC = () => {
//     const categories = useSelector((state: RootState) => state.categories as Category[]);
//     const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormInputs>({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit: SubmitHandler<FormInputs> = (data) => {
//         dispatch(addCategory(data));
//     };

//     return (
//         <div className="categories background-img backgroundPage">
//             <div>
//                 {categories?.map((category) => (
//                     <h4 key={category.Id}>{category?.Name}</h4>
//                 ))}
//             </div>
//             <div className="ll">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//                         <InputLabel id="demo-simple-input-standard-label">הוסף קטגוריה</InputLabel>
//                         <Input {...register("Name")} />
//                         <p>{errors.Name?.message}</p>
//                     </FormControl>
//                     <br />
//                     <input type="submit" className="my-button" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Caterories;

// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import addCategory from "../../server/categoryServer/addCategory";
// import { FormControl, Input, InputLabel } from "@mui/material";
// import type { RootState } from "../../store"; // עדכן את הנתיב בהתאם למיקום ה-RootState שלך
// import type { ThunkDispatch } from "redux-thunk";
// import type { AnyAction } from "redux";

// interface Category {
//     Id: number;
//     Name: string;
// }

// interface FormInputs {
//     Name: string;
// }

// const schema = yup
//     .object({
//         Name: yup.string().required("שדה זה הוא חובה"),
//     })
//     .required();

// const Caterories: React.FC = () => {
//     const categories = useSelector((state: RootState) => state.main.categories as Category[]);
//     const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormInputs>({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit: SubmitHandler<FormInputs> = (data) => {
//         // מיפוי הנתונים כך שיתאימו למבנה של CategoryData
//         const mappedData = {
//             name: data.Name, // שינוי Name ל-name
//         };
//         dispatch(addCategory(mappedData));
//     };

//     return (
//         <div className="categories background-img backgroundPage">
//             <div>
//                 {categories?.map((category) => (
//                     <h4 key={category.Id}>{category?.Name}</h4>
//                 ))}
//             </div>
//             <div className="ll">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//                         <InputLabel id="demo-simple-input-standard-label">הוסף קטגוריה</InputLabel>
//                         <Input {...register("Name")} />
//                         <p>{errors.Name?.message}</p>
//                     </FormControl>
//                     <br />
//                     <input type="submit" className="my-button" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Caterories;

//גירסה נוספת
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import addCategory from "../../server/categoryServer/addCategory";
// import { FormControl, Input, InputLabel } from "@mui/material";
// import type { RootState } from "../../store"; // עדכן את הנתיב בהתאם למיקום ה-RootState שלך
// import type { ThunkDispatch } from "redux-thunk";
// import type { AnyAction } from "redux";

// interface Category {
//     Id: number;
//     Name: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// interface FormInputs {
//     Name: string;
// }

// const schema = yup
//     .object({
//         Name: yup.string().required("שדה זה הוא חובה"),
//     })
//     .required();

// const Caterories: React.FC = () => {
//     const categories = useSelector((state: RootState) => state.categories.categories) || [];
//     const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormInputs>({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit: SubmitHandler<FormInputs> = (data) => {
//         const mappedData = {
//             name: data.Name,
//         };
//         dispatch(addCategory(mappedData));
//     };

//     return (
//         <div className="categories background-img backgroundPage">
//             <div>
//                 {categories.length > 0 ? (
//                     categories.map((category, index) => (
//                         <h4 key={category.Id}>{category.Name}</h4> // מציגים את שם הקטגוריה
//                     ))
//                 ) : (
//                     <p>אין קטגוריות זמינות</p>
//                 )}
//             </div>
//             <div className="ll">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
//                         <InputLabel id="demo-simple-input-standard-label">הוסף קטגוריה</InputLabel>
//                         <Input {...register("Name")} />
//                         <p>{errors.Name?.message}</p>
//                     </FormControl>
//                     <br />
//                     <input type="submit" className="my-button" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Caterories;
//גירסה נוספת
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import addCategory from "../../server/categoryServer/addCategory";
import { FormControl, Input, InputLabel } from "@mui/material";
import type { RootState } from "../../store"; // עדכן את הנתיב בהתאם למיקום ה-RootState שלך
import type { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";

interface Category {
    Id: number;
    Name: string;
    createdAt: Date;
    updatedAt: Date;
}

interface FormInputs {
    Name: string;
}

const schema = yup
    .object({
        Name: yup.string().required("שדה זה הוא חובה"),
    })
    .required();

const Categories: React.FC = () => {
    const categories = useSelector((state: RootState) => state.categories.categories as unknown as Category[]) || [];
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const mappedData = {
            name: data.Name,
        };
        dispatch(addCategory(mappedData));
    };

    return (
        <div className="categories background-img backgroundPage">
            <div>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <h4 key={category.Id}>{category.Name}</h4> // מציגים את שם הקטגוריה
                    ))
                ) : (
                    <p>אין קטגוריות זמינות</p>
                )}
            </div>
            <div className="ll">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 185 }}>
                        <InputLabel id="demo-simple-input-standard-label">הוסף קטגוריה</InputLabel>
                        <Input {...register("Name")} />
                        <p>{errors.Name?.message}</p>
                    </FormControl>
                    <br />
                    <input type="submit" className="my-button" />
                </form>
            </div>
        </div>
    );
};

export default Categories;




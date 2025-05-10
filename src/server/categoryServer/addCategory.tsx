// import axios from "axios";
// import Swal from "sweetalert2";

// export default function addCategory(data) {
//     return dispatch => {
//         axios.post("http://localhost:8080/api/category", data)
//             .then(x => {
//                 dispatch({ type: 'ADD_CATEGORIES', payload: x.data })
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "הקטגוריה נוספה בהצלחה",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });

//             })
//             .catch(err => {
//                 console.log(err)
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "error",
//                     title: "הקטגוריה קיימת",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//     }

// }
//גירסה נוספת
// import axios from "axios";
// import Swal from "sweetalert2";
// import type { Dispatch } from "redux";

// interface CategoryData {
//     name: string;
//     [key: string]: any; // במידה ויש שדות נוספים
// }

// interface AddCategoryAction {
//     type: 'ADD_CATEGORIES';
//     payload: CategoryData;
// }

// export default function addCategory(data: CategoryData) {
//     return (dispatch: Dispatch<AddCategoryAction>) => {
//         axios.post<CategoryData>("http://localhost:8080/api/category", data)
//             .then(x => {
//                 const categoryData = x.data;
//                 dispatch({ type: 'ADD_CATEGORIES', payload: categoryData });
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "הקטגוריה נוספה בהצלחה",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//             .catch(err => {
//                 console.error(err);
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "error",
//                     title: "הקטגוריה קיימת",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             });
//     };
// }

import axios from "axios";
import Swal from "sweetalert2";
import type { Dispatch } from "redux";

interface CategoryData {
    name: string;
    [key: string]: any; // במידה ויש שדות נוספים
}

interface AddCategoryAction {
    type: 'ADD_CATEGORIES';
    payload: CategoryData;
}

export default function addCategory(data: CategoryData) {
    return (dispatch: Dispatch<AddCategoryAction>) => {
        axios.post<CategoryData>("http://localhost:8080/api/category", data)
            .then((response) => {
                const categoryData = response.data;
                dispatch({ type: 'ADD_CATEGORIES', payload: categoryData });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "הקטגוריה נוספה בהצלחה",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "הקטגוריה קיימת",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };
}
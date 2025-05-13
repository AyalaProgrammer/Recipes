// import { createSlice } from "@reduxjs/toolkit";

// interface UserState {
//   user: { id: string; name: string } | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//     clearUser(state) {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;

//גירסה אחרת
// import { createSlice } from "@reduxjs/toolkit";

// interface UserState {
//   user: { id: string; name: string } | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//     clearUser(state) {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;

//other version
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  Id: number
  Name: string
  UserName?: string
  Email?: string
  Phone?: number
  Tz?: number
}

interface UserState {
  user: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
    },
    clearUser(state) {
      state.user = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer

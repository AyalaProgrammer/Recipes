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
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: { id: string; name: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
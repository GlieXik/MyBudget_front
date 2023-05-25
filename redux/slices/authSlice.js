import { Cookies } from "react-cookie";
const { createSlice } = require("@reduxjs/toolkit");

const cookies = new Cookies();

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { name, tokens } = action.payload;
      state.user = name;
      state.token = tokens.accessToken;
      cookies.set("accessToken", tokens.accessToken);
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

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
      const { name } = action.payload;
      state.user = name;
      state.token = action.payload.tokens.accessToken;
      setAccessTokenCookie(action.payload.tokens.accessToken);
    },
    logOut: (state, action) => {
      console.log(state);
      state.user = null;
      state.token = null;
      removeAccessTokenCookie();
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const setAccessTokenCookie = (accessToken) => {
  console.log("set token", accessToken);
  cookies.set("accessToken", accessToken);
};

export const removeAccessTokenCookie = () => {
  console.log("remove token");
  cookies.remove("accessToken");
};

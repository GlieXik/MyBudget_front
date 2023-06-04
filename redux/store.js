const { configureStore } = require("@reduxjs/toolkit");
import { apiSlice } from "@/app/api/apiSlice";
import { authReducer } from "./slices/authSlice";
import { filterReducer } from "./slices/filterSlice";
import { paymentsReducer } from "./slices/paymentsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer,
    auth: authReducer,
    payments: paymentsReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
  devTools: true,
});

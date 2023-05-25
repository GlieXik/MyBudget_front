import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NODE_SERVER + "/api",
  // credentials: "include",
  // mode: "no-cors",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token || cookies.get("accessToken");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getPayments: builder.query({
      query: () => "/payments",
    }),
  }),
});
export const { useLoginMutation, useGetPaymentsQuery } = apiSlice;

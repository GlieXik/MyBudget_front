import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NODE_SERVER + "/api",
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
  tagTypes: ["Payments", "User"],
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: { ...credentials },
      }),
      providesTags: ["User"],
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: { ...credentials },
      }),
      providesTags: ["User"],
    }),
    getPayments: builder.query({
      query: () => "/payments",
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "Payments", id })),
              { type: "Payments", id: "LIST" },
            ]
          : [{ type: "Payments", id: "LIST" }];
      },
    }),
    addPayment: builder.mutation({
      query: (credentials) => ({
        url: "/payments/add",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: [{ type: "Payments", id: "LIST" }],
    }),
    deletePayment: builder.mutation({
      query: (id) => ({
        url: `/payments/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Payments", id: "LIST" }],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetPaymentsQuery,
  useAddPaymentMutation,
  useDeletePaymentMutation,
  useRegisterMutation,
} = apiSlice;

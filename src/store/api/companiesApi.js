import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import URL from "../Url.js";
import { uid } from "uid";

// Define a service using a base URL and expected endpoints
export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL.BASE_URL}` }),
  tagTypes: ["companiesApi"],
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => "/companies",
      providesTags: ["companiesApi"],
    }),
    addCompany: builder.mutation({
      query: (company) => ({
        url: "/companies",
        method: "POST",
        body: { id: uid(), ...company },
      }),
      invalidatesTags: ["companiesApi"],
    }),
    deleteCompany: builder.mutation({
      query: (id) => ({
        url: `/companies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["companiesApi"],
    })
  }),
});

export const { useGetCompaniesQuery, useAddCompanyMutation, useDeleteCompanyMutation } = companiesApi;

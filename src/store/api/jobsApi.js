import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import URL from "../Url.js";
import { uid } from "uid";

// Define a service using a base URL and expected endpoints
export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL.BASE_URL}` }),
  tagTypes: ["jobsApi"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "/jobs",
      providesTags: ["jobsApi"],
    }),
    addJob: builder.mutation({
      query: (job) => ({
        url: "/jobs",
        method: "POST",
        body: { id: uid(), ...job },
      }),
      invalidatesTags: ["jobsApi"],
    }),
    deleteJob: builder.mutation({
      query: (jobId) => ({
        url: `/jobs/${jobId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["jobsApi"],
    }),
  }),
});

export const { useGetJobsQuery, useAddJobMutation, useDeleteJobMutation } = jobsApi;

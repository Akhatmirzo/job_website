import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { companiesApi } from "./api/companiesApi";
import { jobsApi } from "./api/jobsApi";

export const store = configureStore({
  reducer: {
    [companiesApi.reducerPath]: companiesApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companiesApi.middleware, jobsApi.middleware),
});

setupListeners(store.dispatch);

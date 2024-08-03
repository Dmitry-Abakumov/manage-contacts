import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1",
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_AUTHORIZATION_TOKEN;

      headers.set("Authorization", `Bearer ${token}`);
    },
  }),

  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "/contacts",
    }),
  }),
});

export const { useGetAllContactsQuery } = contactApi;

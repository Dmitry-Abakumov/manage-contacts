import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { REACT_APP_BASE_URL } = process.env;

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const { REACT_APP_AUTHORIZATION_TOKEN } = process.env;

      headers.set("Authorization", `Bearer ${REACT_APP_AUTHORIZATION_TOKEN}`);
    },
  }),

  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "/contacts?sort=created:desc",
      providesTags: ["Contacts"],
    }),

    getOneContact: builder.query({
      query: (id) => `/contact/${id}`,
      providesTags: ["OneContact"],
    }),

    addContact: builder.mutation({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    addTag: builder.mutation({
      query: ({ id, body }) => ({
        url: `/contacts/${id}/tags`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["OneContact", "Contacts"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetOneContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useAddTagMutation,
} = contactApi;

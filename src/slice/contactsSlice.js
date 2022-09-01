import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://630b8866ed18e82516550e82.mockapi.io';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

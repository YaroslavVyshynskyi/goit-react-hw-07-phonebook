import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'slice/contactsSlice';
import { filterSlice } from 'slice/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

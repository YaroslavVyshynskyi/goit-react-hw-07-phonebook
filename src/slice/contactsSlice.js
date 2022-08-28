import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await api.getContacts();
  return response.data;
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    status: 'idle',
  },
  reducers: {
    // addContact(state, action) {
    //   state.items.push(action.payload);
    // },

    deleteContact(state, action) {
      state.items = state.items.filter(item => {
        return item.id !== action.payload;
      });
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = 'success';
      state.items = [...state.items, ...action.payload];
    });
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.status = 'loading';
    });
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

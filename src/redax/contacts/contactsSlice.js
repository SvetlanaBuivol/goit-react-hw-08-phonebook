import { createSlice } from '@reduxjs/toolkit';
import {
  addContactAsync,
  deleteContactAsync,
  editContactAsync,
  fetchContactsAsync,
} from './contactsOperetions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.contacts = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = 'idle';
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
        state.loading = 'idle';
      })
      .addCase(deleteContactAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = 'idle';
      })
      .addCase(editContactAsync.pending, state => {
        state.loading = 'pending';
      })
      .addCase(editContactAsync.fulfilled, (state, action) => {
        const updatedIndex = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts[updatedIndex] = action.payload;
        state.loading = 'idle';
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

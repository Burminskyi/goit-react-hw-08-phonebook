import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  isAuthentificated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      // -----------Register-------------
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------Login-------------
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------Refresh-------------
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = true;
        state.userData = action.payload;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------Logout-------------
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  // // -----------DELETE CONTACT-------------
  // .addCase(deleteContactThunk.pending, state => {
  //   state.contacts.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(deleteContactThunk.fulfilled, (state, action) => {
  //   state.contacts.isLoading = false;
  //   state.contacts.items = state.contacts.items.filter(
  //     contact => contact.id !== action.payload.id
  //   );
  // })
  // .addCase(deleteContactThunk.rejected, (state, action) => {
  //   state.contacts.isLoading = false;
  //   state.contacts.error = action.payload;
  // })
  // // -----------ADD CONTACT-------------
  // .addCase(addContactThunk.pending, state => {
  //   state.contacts.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(addContactThunk.fulfilled, (state, action) => {
  //   state.contacts.isLoading = false;
  //   state.contacts.items.push(action.payload);
  // })
  // .addCase(addContactThunk.rejected, (state, action) => {
  //   state.contacts.isLoading = false;
  //   state.contacts.error = action.payload;
  // }),
});

export const { addContacts, setFilter, deleteContact } = authSlice.actions;
export const authReducer = authSlice.reducer;

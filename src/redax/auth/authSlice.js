import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logOutAsync, loginAsync, refreshCurrentUserAsync, registerAsync } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(registerAsync.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logOutAsync.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(refreshCurrentUserAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    })
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(
  persistConfig,
  authSlice.reducer,
);

// export const authReducer = authSlice.reducer;

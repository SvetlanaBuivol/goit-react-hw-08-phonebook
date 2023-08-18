import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUser, logIn, logOut, signUp, token } from 'services/contactsApi';

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await logIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutAsync = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logOut();
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshCurrentUserAsync = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await currentUser();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

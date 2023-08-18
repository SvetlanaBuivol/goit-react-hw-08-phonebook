import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, token } from 'services/contactsApi';

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

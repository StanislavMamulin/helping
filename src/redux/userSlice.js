import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkAuth, signByEmail, signInByFB } from './thunkFunc/auth';

const initialState = {
  user: null,
  status: null,
  error: null,
};

export const signIn = createAsyncThunk('users/signIn', signByEmail);
export const checkUserAuth = createAsyncThunk('users/checkAuth', checkAuth);
export const signInWithFacebook = createAsyncThunk(
  'users/signInWithFB',
  signInByFB,
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    changeUserInfo: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.status = 'signing';
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'signed';
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'signin error';
      state.error = action.payload;
    });

    builder.addCase(checkUserAuth.fulfilled, (state, action) => {
      state.error = null;
      state.status = 'anonymous user signed';

      state.user = action.payload;
    });

    builder.addCase(signInWithFacebook.fulfilled, (state, action) => {
      state.status = 'facebook user signed';
      state.error = null;

      state.user = action.payload;
    });
  },
});

export const { setCurrentUser, changeUserInfo } = userSlice.actions;

export default userSlice.reducer;

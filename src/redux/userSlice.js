import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkAuth, signByEmail, signInByFB } from './thunkFunc/auth';

const initialState = {
  user: null,
  loading: 'idle',
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
    getCurrentUser: state => {
      return state.user;
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
      state.loading = 'pending';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.user = action.payload;
    });
    builder.addCase(signIn.rejected, state => {
      state.loading = 'idle';
    });
    builder.addCase(checkUserAuth.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.user = action.payload;
    });
    builder.addCase(signInWithFacebook.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.user = action.payload;
    });
  },
});

export const { setCurrentUser, getCurrentUser, changeUserInfo } =
  userSlice.actions;

export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserByEmail,
  signInByEmailAndPassword,
  signInAnonymously,
} from '../dataManager/userManager';

const initialState = {
  user: null,
  loading: 'idle',
};

export const signIn = createAsyncThunk(
  'users/signIn',
  async ({ email, password }) => {
    try {
      const firebaseUser = await signInByEmailAndPassword(email, password);
      const userInfo = await getUserByEmail(email);

      return {
        ...firebaseUser,
        ...userInfo,
      };
    } catch (err) {
      console.error(err);
      return {};
    }
  },
);

export const checkUserAuth = createAsyncThunk(
  'users/checkAuth',
  async (_arg, { getState }) => {
    try {
      const currentUser = getState().user.user;
      if (!currentUser) {
        return await signInAnonymously();
      }
      return currentUser;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
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
  },
});

export const { setCurrentUser, getCurrentUser, changeUserInfo } =
  userSlice.actions;

export default userSlice.reducer;

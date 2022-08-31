import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserLoginState, IUserToken } from './userTypes';

const initialState: IUserLoginState = {
  isLoading: false,
  accessToken: {
    access_token: '',
    token_type: '',
  }, // for storing the JWT
  error: '',
  isSuccess: false, // for monitoring the registration process.
};

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<IUserToken>) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = true;
      state.accessToken = action.payload;
    },
    login: (state) => {
      state.isLoading = true;
    },
    error: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
  // TODO new version of reducer must be implemented
  // extraReducers: {
  //   [userLogin.fulfilled.type]: (state, action: PayloadAction<IUserToken>) => {
  //     state.isLoading = false;
  //     state.error = '';
  //     state.accessToken = action.payload;
  //   },
  //   [userLogin.pending.type]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const userLoginReducer = userLoginSlice.reducer;
export const userLoginAction = userLoginSlice.actions;

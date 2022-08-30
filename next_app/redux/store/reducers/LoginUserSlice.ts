import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLogin } from './ActionCreators';
import { IUserLoginState, IUserToken } from './userTypes';

const initialState: IUserLoginState = {
  user: {
    access_token: '',
    token_type: '',
  },
  isLoading: false,
  error: '',
};

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.fulfilled.type]: (state, action: PayloadAction<IUserToken>) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    [userLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userLoginSlice.reducer;

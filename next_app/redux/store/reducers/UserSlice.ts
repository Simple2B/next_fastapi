import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registrationUser } from './ActionCreators';
import { IReqInfoUser, IUserState } from './userTypes';
// import { HYDRATE } from 'next-redux-wrapper';

const initialState: IUserState = {
  user: {
    username: '',
    email: '',
    // phone: '',
    password: '',
  },
  isLoading: false,
  error: '',
};

// the first method of implementation

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     userRegistration: (state) => {
//       state.isLoading = true;
//     },
//     userRegistrationSuccess: (state, action: PayloadAction<IReqInfoUser>) => {
//       state.isLoading = false;
//       state.error = '';
//       state.user = action.payload;
//     },
//     userRegistrationError: (state, action: PayloadAction<string>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// the second method of implementation

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [registrationUser.fulfilled.type]: (
      state,
      action: PayloadAction<IReqInfoUser>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    [registrationUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registrationUser.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

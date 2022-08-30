import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  IReqInfoUser,
  IUserLogin,
  IUserToken,
} from 'redux/store/reducers/userTypes';

const URI = process.env.NEXT_PUBLIC_API_URL;

export const userApiServices = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
  }),
  endpoints: (build) => ({
    registrationUser: build.mutation<IReqInfoUser, IReqInfoUser>({
      query: (body) => ({
        url: '/user/registration',
        method: 'POST',
        body,
      }),
    }),
    loginUser: build.mutation<IUserToken, IUserLogin>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

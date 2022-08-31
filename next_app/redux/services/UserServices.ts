import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  IReqInfoUser,
  IUserLogin,
  IUserToken,
} from 'redux/store/reducers/userTypes';

const URI = process.env.NEXT_PUBLIC_API_URL;

const formatRequestBody = (username: string, password: string) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  return formData;
};

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
      query: (body: { username: string; password: string }) => ({
        url: '/login',
        method: 'POST',
        body: formatRequestBody(body.username, body.password),
      }),
    }),
  }),
});

export const { useRegistrationUserMutation, useLoginUserMutation } =
  userApiServices;

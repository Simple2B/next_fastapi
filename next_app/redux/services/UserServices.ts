import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IReqInfoUser } from 'redux/store/reducers/userTypes';

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
  }),
});

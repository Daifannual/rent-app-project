import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://2840-103-161-195-82.ngrok-free.app/api/' }),
  endpoints: (builder) => ({
    login: builder.mutation<{ accessToken: string }, { name: string; password: string }>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = api;

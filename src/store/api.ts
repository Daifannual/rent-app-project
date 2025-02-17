import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://81d2-182-4-132-46.ngrok-free.app/api/' }),
  endpoints: (builder) => ({
    login: builder.mutation<{ accessToken: string }, { name: string; password: string }>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<
      { message: string },
      { name: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: 'register', // Endpoint untuk registrasi
        method: 'POST',
        body: userData,
      }), 
    }),
    forgotPassword: builder.mutation<
      { token: string }, // Response dari server berisi token reset password
      { email: string } // Data yang dikirim ke server
    >({
      query: (emailData) => ({
        url: 'forgot_password', // Endpoint untuk meminta token reset password
        method: 'POST',
        body: emailData,
      }),
    }),
    resetPassword: builder.mutation<
      { message: string }, // Response dari server setelah reset password berhasil
      { email: string; password: string; password_confirmation: string; token: string } // Data yang dikirim ke server
    >({
      query: (resetData) => ({
        url: 'reset_password', // Endpoint untuk mereset password
        method: 'POST',
        body: resetData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation } = api;
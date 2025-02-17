import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://5558-103-161-195-82.ngrok-free.app/api/' }),
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
export const fetchAlat = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://5558-103-161-195-82.ngrok-free.app/api/alat",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNTU1OC0xMDMtMTYxLTE5NS04Mi5uZ3Jvay1mcmVlLmFwcC9hcGkvbG9naW4iLCJpYXQiOjE3Mzk3OTQ5MDgsImV4cCI6MTczOTk2NzcwOCwibmJmIjoxNzM5Nzk0OTA4LCJqdGkiOiJXSWx2N3ZlTXpzaXR0N01rIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.VwxWbzkrr0wAQkfnJQqJpAxuLgr5fdV552HXGqacqf0`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching alat:", error);
    throw error;
  }
};


export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation } = api;
// import { LoginCredentials, LoginResponse } from "@/app/login/page.type";
// import axios from "axios";

// const baseUrl = 'https://a217-103-165-209-242.ngrok-free.app/api/auth/login';

// const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
//     try {
//         const response = await axios.post<LoginResponse>(baseUrl, credentials);
//         return response.data;
//     } catch (error) {
//         throw new Error('Login failed');
//     }
// }

// export default login

import baseQuery from "@/init/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ForgotPasswordResponse, GetToolsResponse, LoginResponse, RegisterResponse } from "./type";

const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Auth", "Alat"],
  endpoints: (builder) => ({
    // Endpoint untuk login
    login: builder.mutation<LoginResponse, { name: string; password: string }>({
      query: (credentials) => ({
        url: "/login", // Endpoint untuk login
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<
      RegisterResponse,
      { name: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: "/register", // Endpoint untuk register
        method: "POST",
        body: userData,
      }),
    }),

    forgotPassword: builder.mutation<ForgotPasswordResponse
     , { email: string }>({
      query: (emailData) => ({
        url: "/forgot_password", // Endpoint untuk forgot password
        method: "POST",
        body: emailData,
      }),
    }),

    resetPassword: builder.mutation<
      { message: string },
      {
        email: string;
        password: string;
        password_confirmation: string;
        token: string;
      }
    >({
      query: (resetData) => ({
        url: "/reset_password", // Endpoint untuk reset password
        method: "POST",
        body: resetData,
      }),
    }),

    getAlat: builder.query<GetToolsResponse, void>({
      query: () => ({
        url: "/alat", // Endpoint untuk mengambil data alat
        method: "GET",
      }),
      providesTags: ["Alat"], // Untuk caching dan invalidasi
    }),
  }),
});

export const { useLoginMutation, useGetAlatQuery, useRegisterMutation,useForgotPasswordMutation, useResetPasswordMutation } = api;

export default api;

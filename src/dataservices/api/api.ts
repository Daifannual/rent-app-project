import { baseQuery } from "@/init/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ForgotPasswordResponse, GetToolsResponse, LoginResponse, RegisterResponse } from "./type";
import { Tool } from "@/types/alat";

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
    forgotPassword: builder.mutation<ForgotPasswordResponse, { email: string }>({
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
    getAlat: builder.query<Tool[], void>({
      query: () => ({
        url: "/alat",
        method: "GET",
      }),
      transformResponse: (response: GetToolsResponse) => response.data, // Ambil properti `data`
      providesTags: ["Alat"],
    }),
    // Endpoint untuk logout
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout", // Endpoint untuk logout
        method: "POST",
      }),
    }),

    // Tambahkan fungsi CRUD di bawah ini

    // Create Alat
    createAlat: builder.mutation<void, Partial<Tool>>({
      query: (toolData) => ({
        url: "/alat/create",
        method: "POST",
        body: toolData,
      }),
      invalidatesTags: ["Alat"], // Invalidasi cache untuk tag "Alat"
    }),

    // Update Alat (PUT)
    updateAlat: builder.mutation<void, { id: number; data: Partial<Tool> }>({
      query: ({ id, data }) => ({
        url: `/alat/put/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Alat"], // Invalidasi cache untuk tag "Alat"
    }),

    // Update Alat (PATCH)
    updatePatchAlat: builder.mutation<void, { id: number; data: Partial<Tool> }>({
      query: ({ id, data }) => ({
        url: `/alat/patch/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Alat"], // Invalidasi cache untuk tag "Alat"
    }),

    // Delete Alat
    deleteAlat: builder.mutation<void, number>({
      query: (id) => ({
        url: `/alat/delete/${id}`, // Perhatikan format URL sesuai backend
        method: "DELETE",
      }),
      invalidatesTags: ["Alat"], // Invalidasi cache untuk tag "Alat"
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAlatQuery,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
  useCreateAlatMutation, // Export hook untuk create alat
  useUpdateAlatMutation, // Export hook untuk update alat (PUT)
  useUpdatePatchAlatMutation, // Export hook untuk update alat (PATCH)
  useDeleteAlatMutation, // Export hook untuk delete alat
} = api;

export default api;
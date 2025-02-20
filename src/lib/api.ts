// import axios from "axios";

// const BASE_URL = "https://d249-103-165-209-242.ngrok-free.app/api"; // URL API
// let ACCESS_TOKEN = null; // Access token akan di-update setelah login
// const REFRESH_TOKEN_KEY = "refresh_token"; // Key untuk menyimpan refresh token di localStorage

// // Fungsi untuk memperbarui access token menggunakan refresh token
// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
//     if (!refreshToken) {
//       throw new Error("No refresh token available in localStorage");
//     }

//     console.log("Refreshing token with refresh token:", refreshToken); // Logging

//     const response = await axios.post(
//       `${BASE_URL}/refresh`, // Gunakan backticks di sini
//       { refresh_token: refreshToken },
//       {
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " +refreshToken
//         },
//       }
//     );

//     console.log("Response from /refresh:", response.data); // Logging

//     const newAccessToken = response.data.accesstoken;
//     if (!newAccessToken) {
//       throw new Error("Invalid response from /refresh: Missing acces_token");
//     }

//     ACCESS_TOKEN = newAccessToken; // Perbarui access token global
//     return newAccessToken;
//   } catch (error) {
//     console.error("Failed to refresh access token:", error);
//     throw error;
//   }
// };

// // Axios instance untuk API requests
// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Axios interceptor untuk menangani token kadaluwarsa
// let isRefreshing = false;
// let failedQueue: Array<{ resolve: (value: string | PromiseLike<string>) => void; reject: (reason?: any) => void }> = [];

// const processQueue = (error: Error | null, token: string | null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token as string);
//     }
//   });
//   failedQueue = [];
// };

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Jika status 401 (Unauthorized) dan belum mencoba refresh token
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         // Jika sedang refresh token, masukkan request ke antrian
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             return apiClient(originalRequest);
//           })
//           .catch((err) => {
//             return Promise.reject(err);
//           });
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const newAccessToken = await refreshAccessToken();
//         apiClient.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${newAccessToken}`;
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         processQueue(null, newAccessToken);
//         return apiClient(originalRequest);
//       } catch (refreshError: any) {
//         processQueue(refreshError, null);
//         throw refreshError;
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// // Fungsi untuk login
// export const login = async (credentials: { name: string; password: string }) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/login`, credentials); // Gunakan backticks di sini
//     console.log("Response from /login:", response.data); // Tambahkan logging

//     const { accesstoken, refresh_token } = response.data;

//     ACCESS_TOKEN = accesstoken;
//     localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
//     localStorage.setItem("accesstoken", accesstoken); // Simpan refresh token di localStorage
//     apiClient.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
//     return response.data;
//   } catch (error) {
//     console.error("Login failed:", error);
//     throw error;
//   }
// };

// // Fungsi untuk logout
// export const logout = () => {
//   ACCESS_TOKEN = null;
//   localStorage.removeItem(REFRESH_TOKEN_KEY);
//   delete apiClient.defaults.headers.common["Authorization"];
// };

// // Fungsi untuk fetch data alat
// export const fetchAlat = async () => {
//   try {
//     const response = await apiClient.get("/alat", {
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Accept-encoding": "gzip, deflate, br",
//           },
//       });
//       console.log("Response from /alat:", response.data); // Tambahkan logging
//       return response?.data;
    
//   } catch (error) {
//     console.error("Error fetching alat:", error);
//     throw error;
//   }
// };

// export const fetchSewa = async () => {
//   try {
//     const response = (await apiClient.get("/penyewaan" ));
//     return response?.data;
//   } catch (error) {
//     console.error("Error fetching alat:", error);
//     throw error;
//   }
// };

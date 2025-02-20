// src/utils/isLoggedIn.ts
import Cookies from "js-cookie";

export function isLoggedIn(): boolean {
  const token = Cookies.get("token"); // Ambil token dari cookies
  return !!token; // Kembalikan true jika token ada, false jika tidak
}
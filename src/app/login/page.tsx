"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useLoginMutation } from "@/store/api";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom"; // Import React Portal

export function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  // State untuk notifikasi
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ name, password }).unwrap();
      localStorage.setItem("accessToken", result.accessToken); // Simpan token di localStorage
      setNotification("Login berhasil!"); // Set notifikasi sukses
      setTimeout(() => {
        setNotification(null); // Hapus notifikasi setelah beberapa detik
        router.push("/admin"); // Redirect setelah login berhasil
      }, 2000);
    } catch (error) {
      console.error("Login gagal", error);
      setNotification("Login gagal. Periksa nama dan password Anda."); // Set notifikasi gagal
      setTimeout(() => {
        setNotification(null); // Hapus notifikasi setelah beberapa detik
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] mx-2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Masukkan Nama dan Password Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nama</Label>
                <Input
                  id="name"
                  placeholder="Masukkan Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Kirim"}
              </Button>
              <Link href="/reset-password" className="text-sm hover:underline">
                Lupa Password?
              </Link>
            </CardFooter>
          </form>
          <CardFooter className="flex justify-center">
            <span className="text-xs">
              Belum punya akun?{" "}
              <Link href="/register" className="hover:underline ">
                Daftar
              </Link>
            </span>
          </CardFooter>
        </CardContent>
      </Card>

      {/* Portal untuk Notifikasi */}
      {notification &&
        createPortal(
          <div
            className={`fixed top-4 right-4 p-4 rounded-md shadow-lg ${
              notification.includes("berhasil") ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {notification}
          </div>,
          document.getElementById("portal-root")
        )}
    </div>
  );
}

export default Login;
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/dataservices/api/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ name, password }).unwrap();
      localStorage.setItem("accessToken", response.accesstoken); // Simpan accessToken di localStorage
      router.push("/admin"); // Redirect ke halaman utama setelah login berhasil
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login gagal. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
    {/* Gambar (Sebelah Kiri atau Atas) */}
    <div className="lg:w-1/3 w-full h-1/3 lg:h-auto bg-cover bg-center px-6 pt-6 pb-20" style={{ backgroundImage: "url('/Backdrop.png')" }}>
      <p className="lg:text-4xl text-2xl font-medium  text-white">Masuk sebagai admin</p>
      <p className="lg:text-lg text-zinc-200 lg:text-zinc-300">Masuk sebagai admin</p>
      {/* Placeholder untuk gambar */}
    </div>

    {/* Form Login (Sebelah Kanan atau Bawah) */}
    <div className="lg:w-2/3 w-full h-2/3 lg:h-auto flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Masukkan username dan password Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium mb-2">
                Username
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan username"
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-zinc-800 text-white py-2 hover:bg-zinc-700 rounded-lg"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="w-full flex justify-between">
          <div className="pt-2"><p className="text-xs text-start">Tidak punya akun? <Link href="/register"><span className="text-blue-500 hover:underline">Daftar</span></Link></p></div>
          <div className="w-fit pt-2"><p className="text-xs text-end"><Link href="/reset-password"><span className="hover:text-blue-500 underline">Reset Password</span></Link></p></div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  );
}
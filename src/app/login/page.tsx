"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
import { useLoginMutation } from "@/dataservices/api/api"; // Import hook login
import Cookies from "js-cookie";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Gunakan hook login dari RTK Query
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name || !password) {
      setError("Isi semua input.");
      return;
    }

    try {
      const credentials = { name, password };
      const response = await login(credentials).unwrap(); // Gunakan unwrap untuk mendapatkan respons
      console.log("Response dari API:", response);

      // Simpan token di cookies
      Cookies.set("token", response.accesstoken, { expires: 7 }); // Token berlaku selama 7 hari

      router.push("/admin"); // Redirect ke halaman admin setelah login berhasil
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(error?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Gambar (Sebelah Kiri atau Atas) */}
      <div
        className="lg:w-1/3 w-full h-1/3 lg:h-auto bg-cover bg-center px-6 pt-6 pb-20"
        style={{ backgroundImage: "url('/Backdrop.png')" }}
      >
        <p className="lg:text-4xl text-2xl font-medium text-white">
          Masuk sebagai admin
        </p>
        <p className="lg:text-lg text-zinc-200 lg:text-zinc-300">
          Masuk untuk mengakses dashboard admin
        </p>
      </div>
      {/* Form Login (Sebelah Kanan atau Bawah) */}
      <div className="lg:w-2/3 w-full h-2/3 lg:h-auto flex items-center justify-center p-4">
        <Card className="w-full max-w-md rounded-2xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Masukkan username dan password Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
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
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
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
              <div className="pt-2">
                <p className="text-xs text-start">
                  Tidak punya akun?{" "}
                  <Link href="/register">
                    <span className="text-blue-500 hover:underline">Daftar</span>
                  </Link>
                </p>
              </div>
              <div className="w-fit pt-2">
                <p className="text-xs text-end">
                  <Link href="/reset-password">
                    <span className="hover:text-blue-500 underline">
                      Reset Password
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
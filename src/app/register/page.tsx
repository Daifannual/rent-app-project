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
import { useRegisterMutation } from '@/dataservices/api/api'; // Import hook register

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [register, { isLoading }] = useRegisterMutation(); // Gunakan hook register
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setMessage("");

    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage("Isi semua input.");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Password minimal 6 karakter.");
      return;
    }

    try {
      const response = await register(formData).unwrap(); // Gunakan unwrap untuk mendapatkan respons
      console.log("Response dari API:", response);
      setMessage("Registrasi berhasil!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      console.error("Registrasi gagal:", error);
      setErrorMessage(error?.data?.message || "Registrasi gagal");
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
          Register sebagai admin
        </p>
        <p className="lg:text-lg text-zinc-200 lg:text-zinc-300">
          Daftarkan akun
        </p>
      </div>
      {/* Form Register (Sebelah Kanan atau Bawah) */}
      <div className="lg:w-2/3 w-full h-2/3 lg:h-auto flex items-center justify-center p-4">
        {/* Pesan sukses */}
        {message && (
          <div className="mb-4 text-green-500 text-sm">{message}</div>
        )}
        {/* Pesan kesalahan */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
        )}
        <Card className="w-full max-w-md rounded-2xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
            <CardDescription>
              Masukkan username, email, dan password Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Username
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan username"
                  required
                  className="w-full px-3 py-2 rounded-lg"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  required
                  className="w-full px-3 py-2 rounded-lg"
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan password"
                  required
                  className="w-full px-3 py-2 rounded-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-zinc-800 text-white py-2 hover:bg-zinc-700 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Mendaftar..." : "Register"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
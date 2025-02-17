"use client";

import React, { useState } from 'react';
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
import { useRegisterMutation } from '@/store/api';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({ name, email, password }).unwrap();
      console.log('Registrasi berhasil:', response);
      alert('Registrasi berhasil!');
    } catch (err) {
      console.error('Registrasi gagal:', err);
      alert('Registrasi gagal. Silakan coba lagi.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] mx-2">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Masukkan Username, Email, dan Password anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Masukkan Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Masukkan Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Masukkan Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {error && <p className="text-red-500">Registrasi gagal. Silakan coba lagi.</p>}
            <CardFooter className="flex justify-between mt-4">
              <Button type="submit" className="w-full md:w-fit" disabled={isLoading}>
                {isLoading ? 'Mendaftar...' : 'Kirim'}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
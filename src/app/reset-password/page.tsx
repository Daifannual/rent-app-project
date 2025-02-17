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
import { useForgotPasswordMutation, useResetPasswordMutation } from '@/store/api'; // Import hooks

export function ForgotAndResetPassword() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState(''); // Untuk menyimpan access token (tersembunyi)
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isResetMode, setIsResetMode] = useState(false); // Untuk beralih antara mode forgot dan reset
  const [forgotPassword, { isLoading: isForgotLoading, error: forgotError }] = useForgotPasswordMutation();
  const [resetPassword, { isLoading: isResetLoading, error: resetError }] = useResetPasswordMutation();

  // Handler untuk meminta token reset password
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email }).unwrap();
      setToken(response.token); // Simpan token yang diterima
      setIsResetMode(true); // Beralih ke mode reset password
      alert('Access token telah diterima. Silakan masukkan password baru.');
    } catch (err) {
      console.error('Gagal mendapatkan access token:', err);
      alert('Gagal mendapatkan access token. Silakan coba lagi.');
    }
  };

  // Handler untuk mereset password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert('Password dan konfirmasi password tidak cocok.');
      return;
    }
    try {
      const response = await resetPassword({
        email, // Email harus tetap dikirim ke API
        token, // Gunakan token yang tersimpan
        password,
        password_confirmation: passwordConfirmation,
      }).unwrap();
      console.log('Password berhasil direset:', response);
      alert('Password berhasil direset.');
      setIsResetMode(false); // Kembali ke mode forgot password
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
      setToken('');
    } catch (err) {
      console.error('Gagal mereset password:', err);
      alert('Gagal mereset password. Silakan coba lagi.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] mx-2">
        <CardHeader>
          <CardTitle>{isResetMode ? 'Reset Password' : 'Forgot Password'}</CardTitle>
          <CardDescription>
            {isResetMode
              ? 'Masukkan password baru dan konfirmasi password.'
              : 'Masukkan email Anda untuk mendapatkan access token.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={isResetMode ? handleResetPassword : handleForgotPassword}>
            <div className="grid w-full items-center gap-4">
              {!isResetMode && (
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
              )}
              {isResetMode && (
                <>
                  {/* Token disembunyikan */}
                  <input type="hidden" value={token} />

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Masukkan Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled // Email tidak bisa diubah karena sudah digunakan untuk mendapatkan token
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password Baru</Label>
                    <Input
                      id="password"
                      placeholder="Masukkan Password Baru"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="passwordConfirmation">Konfirmasi Password</Label>
                    <Input
                      id="passwordConfirmation"
                      placeholder="Konfirmasi Password"
                      type="password"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
            {(forgotError || resetError) && (
              <p className="text-red-500 mt-2">
                {forgotError ? 'Gagal mendapatkan access token.' : 'Gagal mereset password.'}
              </p>
            )}
            <CardFooter className="flex justify-between mt-4">
              <Button type="submit" className="w-full md:w-fit" disabled={isForgotLoading || isResetLoading}>
                {isForgotLoading || isResetLoading
                  ? isResetMode
                    ? 'Merubah Password...'
                    : 'Mengirim...'
                  : isResetMode
                  ? 'Reset Password'
                  : 'Kirim'}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ForgotAndResetPassword;
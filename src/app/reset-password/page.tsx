"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForgotPasswordMutation, useResetPasswordMutation } from "@/dataservices/api/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(""); // State untuk menyimpan token
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [step, setStep] = useState(1); // 1: Forgot Password, 2: Reset Password
  const [forgotPassword, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
  const [resetPassword, { isLoading: isResetLoading }] = useResetPasswordMutation();
  const router = useRouter();

  // Handle submit forgot password
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email }).unwrap();
      setToken(response.token); // Simpan token dari respons server
      alert("Token telah dikirim ke email Anda.");
      setStep(2); // Pindah ke step reset password
    } catch (error) {
      console.error("Forgot password failed:", error);
      alert("Gagal meminta token. Silakan coba lagi.");
    }
  };

  // Handle submit reset password
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }
    try {
      const response = await resetPassword({
        email,
        password,
        password_confirmation: passwordConfirmation,
        token,
      }).unwrap();
      alert(response.message); // Tampilkan pesan sukses dari server
      router.push("/login"); // Redirect ke halaman login
    } catch (error) {
      console.error("Reset password failed:", error);
      alert("Gagal mereset password. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={step === 1 ? handleForgotSubmit : handleResetSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">
          {step === 1 ? "Forgot Password" : "Reset Password"}
        </h2>

        {/* Step 1: Forgot Password */}
        {step === 1 && (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isForgotLoading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {isForgotLoading ? "Sending..." : "Send Reset Token"}
            </button>
          </div>
        )}

        {/* Step 2: Reset Password */}
        {step === 2 && (
          <div>
            <div className="mb-4">
              <input
                type="hidden"
                value={token} // Token otomatis terisi dari state
                readOnly // Input hanya bisa dibaca (tidak bisa diedit)
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                disabled
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isResetLoading}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {isResetLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
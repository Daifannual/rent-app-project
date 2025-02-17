"use client"; // Pastikan ini adalah client component

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/lib/providers";
import { ErrorBoundary } from "react-error-boundary";

const inter = Inter({ subsets: ["latin"] });

// Fallback UI untuk error boundary
const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h2 className="text-2xl font-bold text-red-600">Terjadi Kesalahan!</h2>
      <p className="text-zinc-700">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Coba Lagi
      </button>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const showNavbar = pathname !== "/login" && pathname !== "/register";

  return (
    <html lang="en" className={inter.className}>
      <body className={`bg-background text-foreground antialiased`}>
        {/* Bungkus seluruh aplikasi dengan ErrorBoundary */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Providers>
            {showNavbar && !isAdmin && <Navbar />}
            {children}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
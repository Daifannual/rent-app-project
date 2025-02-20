"use client"; // Pastikan ini adalah client component

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import { Providers } from "@/lib/providers";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Fallback UI untuk error boundary
const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="card w-full max-w-md border-2 border-red-300 shadow-lg bg-red-50">
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title text-2xl font-bold text-red-600">Terjadi Kesalahan!</h2>
        <p className="text-zinc-700">{error.message}</p>
        <div className="card-actions mt-4">
          <button
            onClick={resetErrorBoundary}
            className="btn btn-ghost"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
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
  const showNavbar = pathname !== "/login" && pathname !== "/register" && pathname !== "/reset-password";

  return (
    <html lang="en" className={inter.className}>
      <body className={`bg-background text-foreground antialiased`}>
        {/* Bungkus seluruh aplikasi dengan ErrorBoundary */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Providers> 
            {showNavbar && !isAdmin && <Navbar />}
            {children}
            <div id="portal-root"></div>
            {showNavbar && !isAdmin && <Footer />}
        </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
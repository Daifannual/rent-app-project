"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const showNavbar = pathname !== "/login" && pathname !== "/register";

  return (
    <html lang="en" className={inter.className}>
      <body className={`bg-background text-foreground antialiased`}>
        {showNavbar && <Navbar />}
        {children}
        {showNavbar && <Footer/>}
      </body>
    </html>
  );
}

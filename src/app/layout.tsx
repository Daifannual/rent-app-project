"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { usePathname } from "next/navigation";

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
      </body>
    </html>
  );
}

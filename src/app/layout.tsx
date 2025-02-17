"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

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
        <Providers>
          {showNavbar && !isAdmin && <Navbar />}
          {children}
          <div id="portal-root"></div>
        </Providers>
      </body>
    </html>
  );
}

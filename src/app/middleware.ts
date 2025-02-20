import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware untuk memproteksi halaman admin
export async function middleware(request: NextRequest) {
  // Ambil token dari cookies
  const token = request.cookies.get("token")?.value;

  // Jika token tidak ada, redirect ke halaman login
  if (!token && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Lanjutkan ke halaman yang diminta jika token ada
  return NextResponse.next();
}

// Konfigurasi middleware untuk hanya menjalankan pada rute tertentu
export const config = {
  matcher: ["/admin/:path*"], // Proteksi semua rute yang dimulai dengan /admin
};
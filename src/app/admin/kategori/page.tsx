"use client"; // Tambahkan ini jika menggunakan Next.js App Router
import React from "react";
import Link from "next/link";

const Kategori = () => {
  return (
    <div className="flex flex-col items-center pb-12">
      {/* Container untuk card */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Card 1: Handphone */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Handphone</h2>
            <div className="card-actions justify-end">
              {/* Navigasi ke halaman Handphone */}
              <Link href="/admin/kategori/handphone">
                <button className="btn btn-primary">Detail</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2: Laptop */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Laptop</h2>
            <div className="card-actions justify-end">
              {/* Navigasi ke halaman Laptop */}
              <Link href="/admin/kategori/laptop">
                <button className="btn btn-primary">Detail</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3: Kamera */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Kamera</h2>
            <div className="card-actions justify-end">
              {/* Navigasi ke halaman Kamera */}
              <Link href="/admin/kategori/kamera">
                <button className="btn btn-primary">Detail</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
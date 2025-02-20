"use client";
import React from "react";
import Link from "next/link";

const Kategori = () => {
  return (
    <div className="flex flex-col items-center pb-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Judul */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wider">Pilih Kategori</h1>
        </div>

        {/* Grid Kategori */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card untuk Handphone */}
          <Link href="/admin/kategori/handphone" className="group block">
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out overflow-hidden relative">
              <div className="p-8 flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-500 transition duration-300 ease-in-out">
                  Handphone
                </h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-70 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            </div>
          </Link>

          {/* Card untuk Laptop */}
          <Link href="/admin/kategori/laptop" className="group block">
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out overflow-hidden relative">
              <div className="p-8 flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-500 transition duration-300 ease-in-out">
                  Laptop
                </h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-70 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            </div>
          </Link>

          {/* Card untuk Kamera */}
          <Link href="/admin/kategori/kamera" className="group block">
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out overflow-hidden relative">
              <div className="p-8 flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-500 transition duration-300 ease-in-out">
                  Kamera
                </h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-70 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            </div>
          </Link>
        </div>

        {/* Tombol Tambah Kategori */}
        <div className="mt-8 flex justify-center">
          <Link href="/admin/kategori/tambahkategori">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
              Tambah Kategori
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
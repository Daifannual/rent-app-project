"use client";
import React from "react";
import Link from "next/link";

const Kategori = () => {
  return (
    <div className="flex flex-col items-center pb-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Pilih Kategori</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card untuk Handphone */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <Link href="/admin/kategori/handphone" className="block h-full">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Handphone</h2>
                <p className="text-gray-600 text-center">Daftar handphone terbaru dan terlengkap.</p>
              </div>
            </Link>
          </div>

          {/* Card untuk Laptop */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <Link href="/admin/kategori/laptop" className="block h-full">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Laptop</h2>
                <p className="text-gray-600 text-center">Laptop berkualitas untuk kebutuhan Anda.</p>
              </div>
            </Link>
          </div>

          {/* Card untuk Kamera */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <Link href="/admin/kategori/kamera" className="block h-full">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Kamera</h2>
                <p className="text-gray-600 text-center">Abadikan momen berharga dengan kamera terbaik.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Tombol Tambah Kategori */}
        <div className="mt-8 flex justify-center">
          <Link href="/admin/kategori/tambahkategori">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              Tambah Kategori
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kategori; 
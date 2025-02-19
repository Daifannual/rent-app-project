"use client";
import React from "react";
import Link from "next/link";

const Kategori = () => {
  return (
    <div className="flex flex-col items-center pb-12 bg-gray-100 min-h-screen"> {/* Added background and min-height */}
      <div className="container mx-auto px-4 py-8"> {/* Added container for centering */}
        <div className="text-center mb-8"> {/* Added title */}
          <h1 className="text-3xl font-bold text-gray-800">Pilih Kategori</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Use grid for responsiveness */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"> {/* Added styling */}
            <Link href="/admin/kategori/handphone" className="block h-full"> {/* Make card clickable */}
              <div className="p-6 flex flex-col items-center justify-center h-full"> {/* Added padding and flexbox for centering */}
                <div className="rounded-full bg-blue-500 w-20 h-20 mb-4 flex items-center justify-center"> {/* Added icon container */}
                  {/* You can replace this with an actual icon component */}
                  <span className="text-white text-4xl">📱</span> 
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Handphone</h2>
                <p className="text-gray-600 text-center">Daftar handphone terbaru dan terlengkap.</p>
                {/* Removed the button */}
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <Link href="/admin/kategori/laptop" className="block h-full">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                 <div className="rounded-full bg-green-500 w-20 h-20 mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">💻</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Laptop</h2>
                <p className="text-gray-600 text-center">Laptop berkualitas untuk kebutuhan Anda.</p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <Link href="/admin/kategori/kamera" className="block h-full">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                 <div className="rounded-full bg-red-500 w-20 h-20 mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">📷</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Kamera</h2>
                <p className="text-gray-600 text-center">Abadikan momen berharga dengan kamera terbaik.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
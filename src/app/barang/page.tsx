"use client"; // Tambahkan ini jika menggunakan Next.js App Router
import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MonitorSmartphone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetAlatQuery } from "@/dataservices/api/api";

const Barang = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Gunakan hook useGetAlatQuery untuk mengambil data alat
  const { data, isLoading, isError, error } = useGetAlatQuery();

  // Filter data berdasarkan input search
  const filteredCards = data?.filter((tool) =>
    tool.alat_nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center pb-12">
      <div className="mx-10 md:mx-32 mb-8 justify-center items-baseline">
        {/* Search Input */}
        <div className="mt-8 px-4 flex justify-center">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full max-w-xs mb-4"
          />
        </div>
      </div>

      {/* Main Content */}
      <main>
        {isLoading && (
          <div className="flex justify-center items-center mt-10">
            <p className="text-gray-500">Loading...</p>
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center mt-10">
            <p className="text-red-500">Error: {error?.toString()}</p>
          </div>
        )}

        {!isLoading && !isError && (!filteredCards || filteredCards.length === 0) && (
          <div className="flex justify-center items-center mt-10">
            <p className="text-gray-500">No tools available.</p>
          </div>
        )}

        {!isLoading && !isError && filteredCards && filteredCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mx-10 md:mx-32">
            {filteredCards.map((tool) => (
              <div key={tool.id}>
                <Card className="bg-zinc-100/75 rounded-2xl">
                  <CardContent className="px-6 py-8 lg:p-8 lg:pb-6">
                    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                      <div>
                        <CardTitle className="text-lg font-medium tracking-tighter text-gray-700 lg:text-3xl">
                          {tool.alat_nama}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm text-gray-400">
                          {tool.alat_kategori_id === 1 ? "Laptop" : "Other"}
                        </CardDescription>
                        <p className="mt-2 text-sm text-gray-600">
                          {tool.alat_deskripsi}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span>
                          <p className="flex text-sm text-zinc-500 tracking-tight">
                            Stok: {tool.alat_stok}
                          </p>
                        </span>
                        <span>
                          <span className="text-xl font-medium tracking-tight text-black">
                            Rp. {tool.alat_hargaperhari.toLocaleString()}
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            {" "}
                            /hari{" "}
                          </span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Barang;
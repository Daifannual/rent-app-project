"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useGetAlatQuery } from "@/dataservices/api/api";

interface Tool {
  id: number;
  alat_nama: string;
  alat_kategori_id: number;
  alat_deskripsi: string;
  alat_hargaperhari: number;
  alat_stok: number;
}

export default function Home() {
  const { data, isLoading, isError, error } = useGetAlatQuery();

  return (
    <div className="mb-8">
      {/* Header */}
      <header className="">
        <div className="relative">
          <img
            src="/Heading.png"
            alt="Heading"
            className="w-full h-96 p-6 object-cover object-bottom rounded-[3rem]"
          />
          <div className="absolute inset-0 flex justify-center p-16">
            <h1 className="font-medium text-3xl md:text-5xl text-white text-center">
              Solusi Praktis untuk Kebutuhan Elektronik Anda!
            </h1>
          </div>
        </div>
        <div className="mt-8 mx-8 text-center">
          <h1 className="text-4xl font-medium">Semua yang Anda butuhkan</h1>
          <div className="mt-4 flex flex-col md:flex-row gap-4 text-zinc-700 font-medium justify-center md:justify-center md:text-left">
            <div className="md:w-2/6">
              Kami menyediakan berbagai alat elektronik seperti kamera
              profesional, laptop gaming, dan handphone dengan kualitas terbaik
              untuk memenuhi kebutuhan Anda.
            </p>
            <p className="md:w-2/6">
              Cukup pilih alat yang Anda inginkan, dan kami akan melayani
              penyewaan Anda. Semua proses dilakukan secara cepat dan mudah.
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-20 mx-10 md:mx-32">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse bg-zinc-200 rounded-2xl h-64"></div>
            ))}
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center mt-10">
            <p className="text-red-500">Error: {error?.toString()}</p>
          </div>
        )}

        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="flex justify-center items-center mt-10">
            <p className="text-gray-500">No tools available.</p>
          </div>
        )}

        {!isLoading && !isError && data && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-20 mx-10 md:mx-32">
            {data.slice(0, 12).map((tool: Tool) => (
              <div key={tool.id} className="animate-fade-in">
                <Card className="bg-zinc-100/75 rounded-2xl">
                  <CardContent className="px-6 py-8 lg:p-8 lg:pb-6">
                    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                      <div>
                        <CardTitle className="text-lg font-medium tracking-tighter text-gray-700 lg:text-3xl">
                          {tool.alat_nama}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm text-gray-500">
                          {tool.alat_kategori_id === 1 ? "Laptop" : "Other"}
                        </CardDescription>
                        <p className="mt-2 text-sm text-gray-600">
                          {tool.alat_deskripsi}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <p>
                          <span className="text-xl font-medium tracking-tight text-black">
                            Rp. {tool.alat_hargaperhari.toLocaleString()}
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            {" "}
                            /hari{" "}
                          </span>
                        </p>
                        <span>
                          <span className="flex text-sm text-zinc-500 tracking-tight">
                            Stok: {tool.alat_stok}
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
        <div className="w-full flex justify-center items-center"><Link href={"/barang"}><Button className="mt-10 mx-10 md:mx-32 ">Lihat Semua</Button></Link></div>
      </main>
    </div>
  );
}

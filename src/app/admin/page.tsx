"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MonitorSmartphone, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetAlatQuery } from "@/dataservices/api/api";

export default function Home() {
  const { data, isLoading, error } = useGetAlatQuery();

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4">Error </div>;
  }

  return (
    <div className="p-4">
      {/* Bagian Atas: Kartu Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="text-center flex justify-center items-center bg-blue-600">
          <Link href="/admin/penyewaan" className="w-full">
            <CardDescription className="text-xl font-semibold text-white py-2 flex items-center justify-center gap-2">
              Penyewaan <MoveUpRight size={20} />
            </CardDescription>
          </Link>
        </Card>
        <Card className="text-center flex justify-center items-center">
          <Link href="/admin/barang" className="w-full">
            <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center justify-center">
              <MonitorSmartphone size={20} />
              Barang
            </CardDescription>
          </Link>
        </Card>
        <Card className="text-center flex justify-center items-center">
          <Link href="/admin/customer" className="w-full">
            <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center justify-center">
              <MonitorSmartphone size={20} />
              Customer
            </CardDescription>
          </Link>
        </Card>
      </div>

      {/* Bagian Bawah: Daftar Produk */}
      <main className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-1 md:mx-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.data.map((tool) => (
              <Card key={tool.id}>
                <CardHeader>
                  <CardTitle>{tool.alat_nama}</CardTitle>
                  <CardDescription>{tool.alat_deskripsi}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      Harga Per Hari: Rp.{" "}
                      {tool.alat_hargaperhari.toLocaleString()}
                    </p>
                    <p>Stok: {tool.alat_stok}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center my-10">
          <Link href="/barang">
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-700 text-white">
              Selengkapnya <MoveUpRight />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

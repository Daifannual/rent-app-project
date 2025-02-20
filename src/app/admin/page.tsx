"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  List,
  LucideHandCoins,
  MonitorSmartphone,
  MoveUpRight,
  Paperclip,
  PaperclipIcon,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetAlatQuery } from "@/dataservices/api/api";
import { isLoggedIn } from "@/utils/isLoggedIn";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="p-4 h-full">
      {/* Bagian Atas: Kartu Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Card className="text-center flex justify-center items-center bg-blue-600 border-none shadow-none">
            <Link href="/admin/penyewaan/tambah" className="w-full">
              <CardDescription className="text-md font-semibold text-white py-2 flex items-center justify-center gap-2">
                <Plus size={20} />
                Penyewaan
              </CardDescription>
            </Link>
          </Card>
          <Card className="text-center flex justify-center items-center border-none shadow-none">
            <Link href="/admin/penyewaan" className="w-full">
              <CardDescription className="text-md font-semibold text-zinc-700 py-2 flex items-center justify-center gap-2">
                <List size={20} />
                Detail Penyewaan
              </CardDescription>
            </Link>
          </Card>
        </div>

        <Card className="flex items-center border-none shadow-none">
          <Link href="/admin/barang" className="w-full">
            <div className="px-6 flex justify-start items-center border-none gap-4 shadow-none">
              <div className="bg-green-100 text-green-700 p-3 rounded-full">
                <MonitorSmartphone />
              </div>
              <div>
                <div className="flex items-center">
                  <CardTitle className="text-md font-medium text-zinc-400 pt-2 items-center">
                    Barang
                  </CardTitle>
                </div>
                <div>
                  <CardDescription className="flex gap-3 font-medium  pb-2 items-end justify-center">
                    <p className="text-3xl text-zinc-700">12</p>
                    <span className="text-md text-zinc-500">Unit total</span>
                  </CardDescription>
                </div>
              </div>
            </div>
          </Link>
        </Card>

        <Card className="flex items-center border-none shadow-none">
          <div className="px-6 flex justify-start items-center border-none gap-4 shadow-none">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
              <LucideHandCoins />
            </div>
            <div>
              <div className="flex items-center">
                <CardTitle className="text-md font-medium text-zinc-400 pt-2 items-center">
                  Dipinjam
                </CardTitle>
              </div>
              <div>
                <CardDescription className="flex gap-3 font-medium  pb-2 items-end justify-center">
                  <p className="text-3xl text-zinc-700">3</p>
                  <span className="text-md text-zinc-500">Pelanggan</span>
                </CardDescription>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bagian Bawah: Daftar Produk */}
      <main className="flex-1 overflow-y-auto py-4 items-stretch">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-xl  ">
            <h1 className="px-6 pt-2 text-zinc-400 font-semibold">
              Status Sewa
            </h1>
            {/* Kiri 2/3 */}
            {/* {[...Array(3)].map((_, i) => (
              <Card key={i} className="border-none shadow-none">
                <div className="px-6 pt-2">
                  <h1 className="text-md font-medium text-zinc-700">
                    John Doe
                  </h1>
                </div>
                <CardContent>
                  <p className="text-sm text-zinc-500">Laptop dell <span className="text-zinc-600 font-semibold">(22/08/07)</span></p>
                </CardContent>
                <hr className="border mx-4 border-b-zinc-100" />
              </Card>
            ))} */}
            <div className="h-[25rem] flex items-center justify-center">
              <p className="font-medium text-zinc-300 text-lg">Not Found</p>
            </div>
          </div>
          <div className="grid">
            <div className="bg-white rounded-xl">
            <h1 className="px-6 pt-2 text-zinc-400 font-semibold">
              Kategori
            </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

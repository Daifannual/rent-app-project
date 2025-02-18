"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorSmartphone, MoveUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { fetchAlat } from "@/store/api";

export default function Home() {
  const router = useRouter();
  const [alatData, setAlatData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      // Fetch data alat dari API
      const fetchData = async () => {
        try {
          const data = await fetchAlat(token);
          setAlatData(data); // Simpan data alat ke state
        } catch (err) {
          setError("Failed to fetch data");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [router]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {/* Bagian Atas: Kartu Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="text-center flex justify-center items-center bg-blue-600">
          <Link href="/admin/penyewaan" className="w-full">
            <CardDescription className="text-xl font-semibold text-white py-2 flex items-center justify-center gap-2">
              Penyewaan <Plus size={20} />
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
          {alatData.map((alat) => (
            <Card key={alat.alat_id}>
              <CardHeader>
                <CardTitle>{alat.alat_nama}</CardTitle>
                <CardDescription>{alat.alat_kategori_id}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between">
                <p className="text-sm text-zinc-500">{alat.alat_deskripsi}</p>
                <p className="font-semibold text-zinc-500">Rp. {alat.alat_hargaperhari}</p>
              </CardContent>
            </Card>
          ))}
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
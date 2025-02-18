"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorSmartphone, MoveUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <div>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mx-1 md:mx-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>
              <Card>
                <CardHeader>
                  <CardTitle>Iphone 13</CardTitle>
                  <CardDescription>Handphone</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <p className="text-sm text-zinc-500">8/128, Black</p>
                  <p className=" font-semibold text-zinc-500">Rp. 35.000</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-10">
        <Link href="/barang"><Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-700 text-white">Selengkapnya <MoveUpRight /></Button></Link>
        </div>
      </main>
      </div>
    </div>
  );
}

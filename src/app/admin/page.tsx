"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MonitorSmartphone, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        router.push('/');
      }
    }, [router]);
  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      {/* Section 1: Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="text-center flex justify-center items-center bg-blue-600">
          <Link href="/admin/penyewaan" className="w-full">
            <CardDescription className="text-xl font-semibold text-white py-2 flex items-center justify-center gap-2">
              Penyewaan
              <Plus size={20} />
            </CardDescription>
          </Link>
        </Card>
        <Card className="text-center flex justify-center items-center">
          <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center">
            <MonitorSmartphone size={20} />
            Barang
          </CardDescription>
        </Card>
        <Card className="text-center flex justify-center items-center">
          <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center">
            <MonitorSmartphone size={20} />
            Customer
          </CardDescription>
        </Card>
      </div>

      {/* Section 2: Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 h-[25rem]">
        <Card className="text-center flex justify-center items-center">
          <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center">
            <MonitorSmartphone size={20} />
            Alat
          </CardDescription>
        </Card>
        <Card className="text-center  flex justify-center items-center">
          <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center">
            <MonitorSmartphone size={20} />
            Alat
          </CardDescription>
        </Card>
        <Card className="text-center flex justify-center items-center">
          <CardDescription className="flex gap-3 text-xl font-medium text-zinc-700 py-2 items-center">
            <MonitorSmartphone size={20} />
            Alat
          </CardDescription>
        </Card>
      </div>
    </div>
  );
};

export default Home;
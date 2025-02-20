import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function Tambah() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Full-screen container */}
      <div className="w-full p-3">
        <Card className="w-full p-6 bg-white rounded-lg">
          <CardHeader>
            <CardTitle>Tambah Barang</CardTitle>
            <CardDescription>Tambahkan Barang yang akan di sewa</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                {/* Nama Barang */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="nama-Barang">Nama Barang</Label>
                  <Input id="nama-Barang" placeholder="Laptop" />
                </div>

                {/* Deskripsi Barang */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="deskripsi-Barang">Deskripsi Barang</Label>
                  <Input id="deskripsi-Barang" placeholder="Barang ini digunakan untuk..." />
                </div>

                {/* Harga Per Hari */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="harga-per-hari">Harga Per Hari (Rp)</Label>
                  <Input
                    id="harga-per-hari"
                    type="number"
                    placeholder="Masukkan harga per hari"
                  />
                </div>

                {/* Stok Barang */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="stok-Barang">Stok Barang</Label>
                  <Input
                    id="stok-Barang"
                    type="number"
                    placeholder="Masukkan jumlah stok"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 mt-6">
            <Button variant="outline">Simpan</Button>
            <Link href="/admin/barang">
            <Button>Kembali</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Tambah;
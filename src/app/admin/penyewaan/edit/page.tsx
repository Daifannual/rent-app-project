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
         <div className="w-full p-6">
           <Card className="w-full p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle>Edit Penyewaan</CardTitle>
            <CardDescription>
              Edit data penyewaan barang berikut.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                {/* Nama Alat */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="nama-alat">Nama Barang</Label>
                  <Input id="nama-alat" placeholder="Nama alat" />
                </div>

                {/* Tanggal Sewa */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="tanggal-sewa">Tanggal Sewa</Label>
                  <Input id="tanggal-sewa" type="date" />
                </div>

                {/* Tanggal Kembali */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="tanggal-kembali">Tanggal Kembali</Label>
                  <Input id="tanggal-kembali" type="date" />
                </div>

                {/* Status Pembayaran */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="status-pembayaran">Status Pembayaran</Label>
                  <select
                    id="status-pembayaran"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  >
                    <option value="Lunas">Lunas</option>
                    <option value="Belum Lunas">Belum Lunas</option>
                  </select>
                </div>

                {/* Status Pengembalian */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="status-pengembalian">
                    Status Pengembalian
                  </Label>
                  <select
                    id="status-pengembalian"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  >
                    <option value="Dikembalikan">Dikembalikan</option>
                    <option value="Belum Dikembalikan">Belum Dikembalikan</option>
                  </select>
                </div>

                {/* Total Harga */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="total-harga">Total Harga (Rp)</Label>
                  <Input
                    id="total-harga"
                    type="number"
                    placeholder="Masukkan total harga"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 mt-6">
            <Button variant="outline">Simpan</Button>
            <Button>Kembali</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Tambah;
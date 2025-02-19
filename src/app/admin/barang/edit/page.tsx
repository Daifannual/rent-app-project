"use client"

import React, { useState } from "react";
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

export function Edit() {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    namaBarang: "",
    deskripsiBarang: "",
    hargaPerHari: "",
    stokBarang: "",
  });

  // Handler untuk mengupdate state saat input berubah
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler untuk menyimpan data
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Data yang disimpan:", formData);
    alert("Data berhasil disimpan!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
         {/* Full-screen container */}
         <div className="w-full p-3">
           <Card className="w-full p-6 bg-white rounded-lg">
          <CardHeader>
            <CardTitle>Edit Barang</CardTitle>
            <CardDescription>Edit Barang yang akan di sewa</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                {/* Nama Barang */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="namaBarang">Nama Barang</Label>
                  <Input
                    id="namaBarang"
                    placeholder="Barang yang disewa"
                    value={formData.namaBarang}
                    onChange={handleChange}
                  />
                </div>
                {/* Deskripsi Barang */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="deskripsiBarang">Deskripsi Barang</Label>
                  <Input
                    id="deskripsiBarang"
                    placeholder="Barang ini digunakan untuk..."
                    value={formData.deskripsiBarang}
                    onChange={handleChange}
                  />
                </div>
                {/* Harga Per Hari */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="hargaPerHari">Harga Per Hari (Rp)</Label>
                  <Input
                    id="hargaPerHari"
                    type="number"
                    placeholder="Masukkan harga per hari"
                    value={formData.hargaPerHari}
                    onChange={handleChange}
                  />
                </div>
                {/* Stok Barang */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="stokBarang">Stok Barang</Label>
                  <Input
                    id="stokBarang"
                    type="number"
                    placeholder="Masukkan jumlah stok"
                    value={formData.stokBarang}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 mt-6">
          <Link href="/admin/barang">
            <Button variant="outline">
              Kembali
            </Button>
            </Link>
            <Button onClick={handleSave}>Simpan</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Edit;
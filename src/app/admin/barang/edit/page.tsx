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
    namaAlat: "",
    deskripsiAlat: "",
    hargaPerHari: "",
    stokAlat: "",
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
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* Full-screen container */}
      <div className="w-full max-w-lg p-6">
        <Card className="w-full p-6 bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle>Edit Alat</CardTitle>
            <CardDescription>Edit alat yang akan di sewa</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                {/* Nama Alat */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="namaAlat">Nama Alat</Label>
                  <Input
                    id="namaAlat"
                    placeholder="Alat yang disewa"
                    value={formData.namaAlat}
                    onChange={handleChange}
                  />
                </div>
                {/* Deskripsi Alat */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="deskripsiAlat">Deskripsi Alat</Label>
                  <Input
                    id="deskripsiAlat"
                    placeholder="Alat ini digunakan untuk..."
                    value={formData.deskripsiAlat}
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
                {/* Stok Alat */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="stokAlat">Stok Alat</Label>
                  <Input
                    id="stokAlat"
                    type="number"
                    placeholder="Masukkan jumlah stok"
                    value={formData.stokAlat}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 mt-6">
            <Button variant="outline" onClick={() => alert("Kembali ke halaman sebelumnya")}>
              Kembali
            </Button>
            <Button onClick={handleSave}>Simpan</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Edit;
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
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
      <div className="flex items-center justify-between py-4">
        <Card className="w-full p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
            Edit Data Customer
            </CardTitle>
            <CardDescription className="text-gray-500">
           Ubah data customer berikut ini.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                {/* Nama */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="nama" className="text-sm font-medium">
                    Nama
                  </Label>
                  <Input
                    id="nama"
                    placeholder="Masukkan nama lengkap"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                {/* Alamat */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="alamat" className="text-sm font-medium">
                    Alamat
                  </Label>
                  <Input
                    id="alamat"
                    placeholder="Masukkan alamat lengkap"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan email"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 mt-6">
          <Link href="/admin/customer">
            <Button variant="outline" className="px-6 py-2">
              Batal
            </Button>
            </Link>
            <Button className="px-6 py-2 bg-primary text-white hover:bg-primary-dark">
              Simpan
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Tambah;
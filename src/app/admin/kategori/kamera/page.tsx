"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const Kamera = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tableData = [
    { id: 1, name: "Canon EOS 5D" },
    { id: 2, name: "Nikon D850" },
    { id: 3, name: "Sony Alpha a7 III" },
    { id: 4, name: "Fujifilm X100V" },
    { id: 5, name: "Panasonic Lumix GH6" },
    { id: 6, name: "Leica M11" },
    { id: 7, name: "Olympus OM-D E-M1 Mark III" },
  ];

  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center pb-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="mt-8 px-4 flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <Link href="/admin/kategori/kamera/tambahkamera">
              <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
                <Plus className="mr-2 h-4 w-4" /> Tambah Alat
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto">
          <Table className="table-auto w-full shadow-md">
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="text-left font-semibold py-3 px-4">Kategori Kamera</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50 transition duration-300">
                    <TableCell className="py-2 px-4">{item.name}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={1} className="text-center py-4">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Kamera;
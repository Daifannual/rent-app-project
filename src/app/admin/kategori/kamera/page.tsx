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
    <div className="flex flex-col items-center pb-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Daftar Kamera</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari kamera..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-full max-w-xs rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
           
          </div>
        </div>

        {/* Table Section */}
        <div className="w-full overflow-x-auto rounded shadow-lg bg-white">
          <Table className="w-full">
            <TableHeader className="bg-gray-300 border-b border-gray-200">
              <TableRow>
                <TableHead className="text-left font-semibold text-gray-700 py-4 px-6">
                  Nama Kamera
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow
                    key={item.id}
                    className="hover:bg-gray-50 transition duration-300"
                  >
                    <TableCell className="py-4 px-6 text-gray-800">
                      {item.name}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="text-center py-6 text-gray-500 italic"
                  >
                    Tidak ada data yang tersedia.
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
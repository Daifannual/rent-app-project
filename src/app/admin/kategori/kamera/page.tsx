"use client"; // Tambahkan ini jika menggunakan Next.js App Router
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

const Kamera = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data dummy untuk tabel (hanya berisi nama)
  const tableData = [
    { id: 1, name: "iPhone 13" },
    { id: 2, name: "MacBook Air" },
    { id: 3, name: "Canon EOS 5D" },
    { id: 4, name: "iPhone 13 Pro" },
    { id: 5, name: "Dell XPS 13" },
    { id: 6, name: "Nikon D850" },
    { id: 7, name: "Samsung Galaxy S22" },
  ];

  // Filter data berdasarkan input search
  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center pb-12">
      <div className="mx-10 md:mx-32 mb-8 justify-center items-baseline">
        <div className="mt-8 px-4 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full max-w-xs mb-4"
          />
        </div>
      </div>

      {/* Tabel */}
      <div className="mx-10 md:mx-32 mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kategori Kamera</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={1} className="text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Kamera;
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

const Handphone = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tableData = [
    { id: 1, name: "iPhone 13" },
    { id: 2, name: "Samsung Galaxy S22" },
    { id: 3, name: "Google Pixel 7" },
    { id: 4, name: "Xiaomi 13 Pro" },
    { id: 5, name: "Oppo Find X6 Pro" },
    { id: 6, name: "Vivo X90 Pro+" },
    { id: 7, name: "Nothing Phone (2)" },
  ];

  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center pb-12 bg-gray-100 min-h-screen"> {/* Added background and min-height */}
      <div className="container mx-auto px-4 py-8"> {/* Added container */}
        <div className="flex justify-between items-center mb-8"> {/* Search and Add button container */}
          <div className="mt-8 px-4 flex"> {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div> {/* Add Button */}
            <Link href="/admin/kategori/handphone/tambahHandphone"> {/* Updated Link */}
              <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
                <Plus className="mr-2 h-4 w-4" /> Tambah Alat
              </Button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="mx-auto"> {/* Centered table */}
          <Table className="table-auto w-full shadow-md"> {/* Added shadow */}
            <TableHeader className="bg-gray-200"> {/* Added background to header */}
              <TableRow>
                <TableHead className="text-left font-semibold py-3 px-4">Kategori Handphone</TableHead> {/* Styled header */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50 transition duration-300"> {/* Hover effect on row */}
                    <TableCell className="py-2 px-4">{item.name}</TableCell> {/* Added padding */}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={1} className="text-center py-4"> {/* Added padding */}
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

export default Handphone;
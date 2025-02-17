"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Customer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Data dummy untuk customer
  const customersData = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, New York, NY",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, Los Angeles, CA",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      address: "789 Oak St, Chicago, IL",
      email: "alice.johnson@example.com",
    },
    {
      id: 4,
      name: "Michael Brown",
      address: "101 Pine St, San Francisco, CA",
      email: "michael.brown@example.com",
    },
    {
      id: 5,
      name: "Emily Davis",
      address: "202 Maple St, Seattle, WA",
      email: "emily.davis@example.com",
    },
  ];

  // Filter data berdasarkan input search
  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="mx-10 md:mx-32 mb-8 justify-center items-baseline">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Pelanggan</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Cari pelanggan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full max-w-xs bg-white border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mx-10 md:mx-32">
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Nama Pelanggan</th>
              <th className="py-3 px-4 text-left font-semibold">Alamat</th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 border-b border-gray-100">
                    {customer.name}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    {customer.address}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100 text-blue-500 hover:underline">
                    {customer.email}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="py-6 text-center text-gray-500 border-b border-gray-100"
                >
                  Tidak ada data pelanggan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
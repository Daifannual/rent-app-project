"use client"; // Tambahkan ini jika menggunakan Next.js App Router
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
import { MonitorSmartphone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Barang = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data dummy untuk kartu dengan tambahan properti category, price, dan stock
  const cardsData = [
    {
      id: 1,
      title: "iPhone 13",
      description: "128GB, Grey",
      category: "kategori1",
      price: 35000,
      stock: 10,
    },
    {
      id: 2,
      title: "MacBook Air",
      description: "8GB RAM, 256GB SSD",
      category: "kategori2",
      price: 250000,
      stock: 5,
    },
    {
      id: 3,
      title: "Canon EOS 5D",
      description: "24.2MP, Full Frame",
      category: "kategori3",
      price: 250000,
      stock: 3,
    },
    {
      id: 4,
      title: "iPhone 13 Pro",
      description: "1TB, Gold",
      category: "kategori1",
      price: 100000,
      stock: 2,
    },
    {
      id: 5,
      title: "Dell XPS 13",
      description: "16GB RAM, 512GB SSD",
      category: "kategori2",
      price: 200000,
      stock: 8,
    },
    {
      id: 6,
      title: "Nikon D850",
      description: "45.7MP, Full Frame",
      category: "kategori3",
      price: 300000,
      stock: 1,
    },
    {
      id: 7,
      title: "Samsung Galaxy S22",
      description: "12GB RAM, 1TB",
      category: "kategori1",
      price: 150000,
      stock: 9,
    },
  ];

  // Daftar kategori unik (tanpa "all")
  const categories = [...new Set(cardsData.map((card) => card.category))];

  // Pemetaan nama kategori ke nama baru
  const categoryNames = {
    kategori1: "Handphone",
    kategori2: "Laptop",
    kategori3: "Kamera",
  };

  // Filter data berdasarkan input search dan kategori yang dipilih
  const filteredCards = cardsData.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }); 

  return (
    <div className="juctify-center pb-12">
      <div className="mx-10 md:mx-32 mb-8 justify-center items-baseline">
        <div className="mt-8 px-4 flex justify-center">
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full max-w-xs mb-4"
          />
        </div>

        {/* Buttons for Categories */}
        <div className="flex flex-wrap gap-2 justify-center px-4 mb-4">
          {/* Tombol "All" */}
          <Button
            onClick={() => setSelectedCategory("all")}
            className={`btn btn-sm border-2 ${
              selectedCategory === "all"
                ? "bg-zinc-400 text-white"
                : "bg-white text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            } m-1 rounded-full focus:bg-zinc-200`}
          >
            All
          </Button>

          {/* Tombol untuk setiap kategori */}
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-sm border-2 ${
                selectedCategory === category
                  ? "bg-zinc-400 text-white"
                  : "bg-white text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              } m-1 rounded-full focus:bg-zinc-400`}
            >
              {categoryNames[category]}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mx-10 md:mx-32">
        {filteredCards.map((card) => (
          <div key={card.id}>
            <Card>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>
                  {categoryNames[card.category]}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between">
                <p className="text-sm text-zinc-500">{card.description}</p>
                <p className=" font-semibold text-zinc-500">
                  Rp. {card.price.toLocaleString("id-ID")}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-end gap-2">
                <p className="text-sm text-zinc-500">Stok: {card.stock}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Barang;

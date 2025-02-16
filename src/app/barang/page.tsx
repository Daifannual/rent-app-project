"use client"; // Tambahkan ini jika menggunakan Next.js App Router
import React, { useState } from 'react';

const Barang = () => {
  // State untuk menyimpan nilai input search
  const [searchTerm, setSearchTerm] = useState('');
  // State untuk menyimpan kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Data dummy untuk kartu dengan tambahan properti category
  const cardsData = [
    { id: 1, title: "Card 1", description: "Deskripsi Card 1", category: "kategori1" },
    { id: 2, title: "Card 2", description: "Deskripsi Card 2", category: "kategori2" },
    { id: 3, title: "Card 3", description: "Deskripsi Card 3", category: "kategori1" },
    { id: 4, title: "Card 4", description: "Deskripsi Card 4", category: "kategori3" },
    { id: 5, title: "Card 5", description: "Deskripsi Card 5", category: "kategori2" },
    { id: 6, title: "Card 6", description: "Deskripsi Card 6", category: "kategori3" },
    { id: 7, title: "Card 7", description: "Deskripsi Card 7", category: "kategori1" },
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
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search Input */}
      <div className="mt-8 px-4 flex justify-end">
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
        <button
          onClick={() => setSelectedCategory("all")}
          className={`btn btn-sm border-none ${
            selectedCategory === "all"
              ? "bg-zinc-600 text-white"
              : "bg-white text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          } m-1 rounded-xl focus:bg-zinc-600`}
        >
          All
        </button>

        {/* Tombol untuk setiap kategori */}
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`btn btn-sm border-none ${
              selectedCategory === category
                ? "bg-zinc-600 text-white"
                : "bg-white text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            } m-1 rounded-xl focus:bg-zinc-600`}
          >
            {categoryNames[category]}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mx-10 md:mx-32">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="border border-gray-300 rounded-lg p-4 shadow-md bg-white dark:bg-zinc-800"
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Kategori: {categoryNames[card.category]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Barang;
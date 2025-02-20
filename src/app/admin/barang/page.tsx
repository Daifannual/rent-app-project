"use client";
import * as React from "react";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/table";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  useGetAlatQuery,
  useCreateAlatMutation,
  useUpdateAlatMutation,
  useDeleteAlatMutation,
  useUpdatePatchAlatMutation,
} from "@/dataservices/api/api";

export interface Tool {
  id: number;
  alat_kategori_id: number;
  alat_nama: string;
  alat_deskripsi: string;
  alat_hargaperhari: number;
  alat_stok: number;
}

export default function SimpleTable() {
  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState<Tool | null>(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Fetch data alat dari API
  const { data: tools, isLoading, isError, error } = useGetAlatQuery();
  const [createAlat] = useCreateAlatMutation();
  const [updateAlat] = useUpdatePatchAlatMutation();
  const [deleteAlat] = useDeleteAlatMutation();

  const showConfirmationDialog = (message: string) => {
    setConfirmationMessage(message);
    setConfirmationOpen(true);
  };

  // Handle Create Alat
  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTool: Partial<Tool> = {
      alat_nama: formData.get("alat_nama") as string,
      alat_kategori_id: parseInt(formData.get("alat_kategori_id") as string),
      alat_deskripsi: formData.get("alat_deskripsi") as string,
      alat_hargaperhari: parseFloat(formData.get("alat_hargaperhari") as string),
      alat_stok: parseInt(formData.get("alat_stok") as string),
    };

    try {
      await createAlat(newTool).unwrap();
      showConfirmationDialog("Alat berhasil ditambahkan!");
    } catch (err: any) {
      console.error("Error creating tool:", err);
      showConfirmationDialog("Terjadi kesalahan saat menambahkan alat.");
    }
  };

  // Handle Edit Alat
  const handleEdit = (tool: Tool) => {
    setOpen(true);
    setTool(tool);
  };

  // Handle Update Alat
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tool) return;

    const formData = new FormData(e.currentTarget);
    const updatedTool: Partial<Tool> = {
      alat_nama: formData.get("alat_nama") as string,
      alat_kategori_id: parseInt(formData.get("alat_kategori_id") as string),
      alat_deskripsi: formData.get("alat_deskripsi") as string,
      alat_hargaperhari: parseFloat(formData.get("alat_hargaperhari") as string),
      alat_stok: parseInt(formData.get("alat_stok") as string),
    };

    try {
      await updateAlat({ id: tool.id, data: updatedTool }).unwrap();
      showConfirmationDialog("Alat berhasil diperbarui!");
      setOpen(false);
    } catch (err) {
      console.error("Error updating tool:", err);
    }
  };

  // Handle Delete Alat
  const handleDelete = async (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus alat ini?")) {
      try {
        await deleteAlat(id).unwrap();
        showConfirmationDialog("Alat berhasil dihapus!");
      } catch (err) {
        console.error("Error deleting tool:", err);
      }
    }
  };

  return (
    <div className="pt-1">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Daftar Alat</h1>
        {/* Form untuk menambahkan alat baru */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white">
              <Plus className="mr-2 h-4 w-4" /> Create
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogTitle className="font-bold">Tambah Alat Baru</DialogTitle>
            <form onSubmit={handleCreate}>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama Alat
                </label>
                <Input type="text" name="alat_nama" placeholder="Nama Alat" required />
                <label className="block text-sm font-medium text-gray-700">
                  Kategori
                </label>
                <Input
                  type="number"
                  name="alat_kategori_id"
                  placeholder="ID Kategori"
                  required
                />
                <label className="block text-sm font-medium text-gray-700">
                  Deskripsi
                </label>
                <Input
                  type="text"
                  name="alat_deskripsi"
                  placeholder="Deskripsi Alat"
                  required
                />
                <label className="block text-sm font-medium text-gray-700">
                  Harga Sewa
                </label>
                <Input
                  type="number"
                  name="alat_hargaperhari"
                  placeholder="Harga Sewa Per Hari"
                  required
                />
                <label className="block text-sm font-medium text-gray-700">
                  Stok
                </label>
                <Input
                  type="number"
                  name="alat_stok"
                  placeholder="Stok Alat"
                  required
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button type="submit" className="bg-primary text-white">
                  <Plus className="mr-2 h-4 w-4" /> Tambah
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center mt-10">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="flex justify-center items-center mt-10">
          <p className="text-red-500">Error: {error?.toString()}</p>
        </div>
      )}

      {/* Table */}
      {!isLoading && !isError && tools && tools.length > 0 && (
        <Table className="bg-white rounded-2xl">
          <TableHeader>
            <TableRow>
              <TableHead>Nama Alat</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Harga Sewa</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tools.map((tool) => (
              <TableRow key={tool.id}>
                <TableCell>{tool.alat_nama}</TableCell>
                <TableCell>{tool.alat_kategori_id}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(tool.alat_hargaperhari)}
                </TableCell>
                <TableCell>{tool.alat_stok}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-primary hover:bg-primary/10"
                      >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem
                        onClick={() => handleEdit(tool)}
                        className="text-blue-600 hover:bg-blue-100"
                      >
                        <Pencil className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(tool.id)}
                        className="text-red-600 hover:bg-red-100"
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Dialog untuk Edit Alat */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogTitle className="font-bold">Edit Alat</DialogTitle>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Nama Alat
              </label>
              <Input
                type="text"
                placeholder="Drill Machine"
                value={tool?.alat_nama}
                onChange={(e) =>
                  setTool((prev) => ({ ...prev, alat_nama: e.target.value }))
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Kategori
              </label>
              <Input
                type="number"
                placeholder="1"
                value={tool?.alat_kategori_id}
                onChange={(e) =>
                  setTool((prev) => ({
                    ...prev,
                    alat_kategori_id: parseInt(e.target.value),
                  }))
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Harga Sewa
              </label>
              <Input
                type="number"
                placeholder="50"
                value={tool?.alat_hargaperhari}
                onChange={(e) =>
                  setTool((prev) => ({
                    ...prev,
                    alat_hargaperhari: parseFloat(e.target.value),
                  }))
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Stok
              </label>
              <Input
                type="number"
                placeholder="10"
                value={tool?.alat_stok}
                onChange={(e) =>
                  setTool((prev) => ({
                    ...prev,
                    alat_stok: parseInt(e.target.value),
                  }))
                }
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit" className="bg-primary text-white">
                <Pencil className="mr-2 h-4 w-4" /> Simpan
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <DialogContent>
          <DialogTitle>Confirmation</DialogTitle>
          <p>{confirmationMessage}</p>
          <Button onClick={() => setConfirmationOpen(false)}>OK</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}


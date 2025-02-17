"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

// Sample data
const initialData = [
  {
    id: "1",
    item: "Drill Machine",
    rentalDate: "2023-10-01",
    returnDate: "2023-10-05",
    paymentStatus: "Lunas",
    returnStatus: "Belum Dikembalikan",
    totalPrice: 200000,
  },
  {
    id: "2",
    item: "Hammer",
    rentalDate: "2023-10-02",
    returnDate: "2023-10-07",
    paymentStatus: "Belum Lunas",
    returnStatus: "Dikembalikan",
    totalPrice: 50000,
  },
  {
    id: "3",
    item: "Ladder",
    rentalDate: "2023-10-03",
    returnDate: "2023-10-06",
    paymentStatus: "Lunas",
    returnStatus: "Dikembalikan",
    totalPrice: 150000,
  },
];

// Define the type for the rental item
export type RentalItem = {
  id: string;
  item: string;
  rentalDate: string;
  returnDate: string;
  paymentStatus: "Lunas" | "Belum Lunas";
  returnStatus: "Dikembalikan" | "Belum Dikembalikan";
  totalPrice: number;
};

export const columns: ColumnDef<RentalItem>[] = [
  {
    accessorKey: "item",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-primary hover:text-primary-dark font-bold"
      >
        Nama Alat
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("item")}</div>,
  },
  {
    accessorKey: "rentalDate",
    header: () => <div>Tanggal Sewa</div>,
    cell: ({ row }) => <div>{row.getValue("rentalDate")}</div>,
  },
  {
    accessorKey: "returnDate",
    header: () => <div>Tanggal Kembali</div>,
    cell: ({ row }) => <div>{row.getValue("returnDate")}</div>,
  },
  {
    accessorKey: "returnStatus",
    header: () => <div>Status Pengembalian</div>,
    cell: ({ row }) => {
      const status = row.getValue("returnStatus");
      const color = status === "Dikembalikan" ? "text-green-600" : "text-red-600";
      return <div className={color}>{status}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div>Total Harga</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tool = row.original;

      // Function to handle edit action
      const handleEdit = () => {
        console.log("Edit tool:", tool.id);
      };

      // Function to handle delete action
      const handleDelete = () => {
        if (
          window.confirm(
            `Apakah Anda yakin ingin menghapus alat "${tool.item}"?`
          )
        ) {
          // Call the parent component's delete function
          window.dispatchEvent(
            new CustomEvent("delete-tool", { detail: tool.id })
          );
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            <Link href={"/admin/penyewaan/edit"}>
            <DropdownMenuItem onClick={handleEdit}>
              <Pencil className="mr-2 h-4 w-4 text-blue-500" /> Edit
            </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4 text-red-500" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function Penyewaan() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [data, setData] = React.useState(initialData);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Daftar Penyewaan</h1>
        <Link href={"/admin/penyewaan/tambah"}>
        <Button variant="default">
          <Plus className="mr-2 h-4 w-4" /> Penyewaan
        </Button>
        </Link>
      </div>

      {/* Search Input */}
      <div className="flex justify-end mb-4">
        <Input
          placeholder="Cari nama alat..."
          value={(table.getColumn("item")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("item")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg border-2 border-gray-200 overflow-hidden bg-white dark:bg-gray-900">
        <Table>
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-gray-700 dark:text-gray-300">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
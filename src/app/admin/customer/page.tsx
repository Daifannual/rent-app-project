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
import {
  ArrowUpDown,
  MoreHorizontal,
  Trash2,
  Pencil,
  Plus,
} from "lucide-react";
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
const initialData: Tool[] = [
  {
    id: "1",
    name: "Teguh Sugiarto",
    address: "Maluku",
    email: "dash@gmail.com",
  },
  {
    id: "2",
    name: "Andaraka putra",
    address: "Bandung",
    email: "ham@gmail.com",
  },
  {
    id: "3",
    name: "Rafa Chad Chad",
    address: "Malang",
    email: "lad@gmail.com",
   
  },
];

// Define the type for the tool
export type Tool = {
  id: string;
  name: string;
  address: string;
  email: string;

};

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [data, setData] = React.useState<Tool[]>(initialData); // State untuk menyimpan data

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

  // Function to handle adding a new tool
  const handleAddTool = () => {
    console.log("Tambah alat baru...");
    // Redirect or open a modal here
  };

  // Function to handle deleting a tool
  const handleDelete = (id: string) => {
    // Filter out the tool with the given ID
    const updatedData = data.filter((tool) => tool.id !== id);
    setData(updatedData); // Update the state with the filtered data
    console.log(`Deleted tool with ID: ${id}`);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-primary">Daftar Customer</h1>
        <Input
          placeholder="Cari nama ..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="rounded-md border bg-white overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-primary font-bold">
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
                  className="hover:bg-gray-50 transition-colors"
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Add Tool Button */}
      <div className="flex items-center justify-between py-4">
        <Link href={"/admin/customer/tambah"}>
          <Button
            onClick={handleAddTool}
            className="bg-primary text-white hover:bg-primary-dark transition-colors">
            <Plus className="mr-2 h-4 w-4" /> Tambah Customer
          </Button>
        </Link>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

// Define columns
export const columns: ColumnDef<Tool>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-primary hover:text-primary-dark font-bold"
      >
        Nama Customer
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-semibold text-primary">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: () => <span>Alamat</span>,
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "email",
    header: () => <span>Email</span>,
    cell: ({ row }) => (
      <a href={`mailto:${row.getValue("email")}`} className="text-blue-500 hover:underline">
        {row.getValue("email")}
      </a>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tool = row.original;

      // Example functions for edit and delete actions
      const handleEdit = () => {
        console.log("Edit tool:", tool.id);
      };

      const handleDelete = () => {
        if (
          window.confirm(
            `Apakah Anda yakin ingin menghapus alat "${tool.name}"?`
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
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-primary hover:bg-primary/10"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            <Link href={"/admin/customer/edit"}>
            <DropdownMenuItem
              onClick={handleEdit}
              className="text-blue-600 hover:bg-blue-100"
            >
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={handleDelete}
              className="text-red-600 hover:bg-red-100"
            >
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default DataTableDemo;

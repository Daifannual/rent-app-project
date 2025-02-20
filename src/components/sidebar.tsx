"use client"; // Diperlukan jika menggunakan state atau interaksi
import React, { useState } from "react";
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
  LogOut,
  Menu,
  MonitorSmartphone,
  HandHelpingIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLogoutMutation } from '@/dataservices/api/api'; // Import hook logout
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logout, { isLoading }] = useLogoutMutation(); // Gunakan hook logout
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Hapus token dari cookies
    Cookies.remove("token");

    // Redirect ke halaman login
    router.push("/login");
  };

  return (
    <>
      {/* Tombol Toggle untuk Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={toggleSidebar}
          variant="outline"
          size="icon"
          className="bg-white text-black border-gray-300"
        >
          <Menu size={20} />
        </Button>
      </div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 pt-8 lg:p-0 left-0 h-screen bg-white lg:bg-transparent z-40 transition-transform duration-300 ease-in-out border-2 border-r-zinc-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:relative lg:translate-x-0 w-64`}
      >
        <div className="flex flex-col justify-between h-full p-4">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mt-4 mb-8">
              <Home size={24} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-800">Penyewaan</h1>
            </div>
            {/* Navigation Links */}
            <nav className="space-y-2 font-medium text-zinc-500">
              <Link href="/admin" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
              <Link href="/admin/barang" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                <MonitorSmartphone size={20} />
                <span>Barang</span>
              </Link>
              <Link href="/admin/penyewaan" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                <HandHelpingIcon   size={20} />
                <span>Penyewaan</span>
              </Link>
              <Link href="/admin/customer" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                <Users size={20} />
                <span>Users</span>
              </Link>
              <Link href="/settings" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            disabled={isLoading}
            variant="ghost"
            className="flex items-center gap-2 p-2 hover:text-red-600 text-red-600 bg-red-200 hover:bg-red-300"
          >
            {isLoading ? "Logging out..." : (
              <>
                <LogOut size={20} />
                <span>Logout</span>
              </>
            )}
          </Button>
        </div>
      </aside>
      {/* Overlay untuk Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
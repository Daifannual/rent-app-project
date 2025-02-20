"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-100 ">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100">
          <Sidebar />
        </div>

        {/* Main content harus full width */}
        <main className="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

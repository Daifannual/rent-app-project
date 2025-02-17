"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content harus full width */}
        <main className="flex-1 p-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

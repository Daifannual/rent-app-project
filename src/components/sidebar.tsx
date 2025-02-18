"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Inbox, Calendar, Search, Settings, Menu, MonitorSmartphone, PersonStanding, LogOut } from "lucide-react";
import Link from "next/link";

const items = [
  { title: "Home", url: "/admin", icon: Home },
  { title: "Barang", url: "/admin/barang", icon: MonitorSmartphone },
  { title: "Customer", url: "/admin/customer", icon: PersonStanding },
  { title: "Logout", url: "/admin/logout", icon: LogOut },
];

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button Toggle (hanya tampil di layar kecil) */}
      <div className="lg:hidden p-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="text-gray-600 p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-64">
            <SidebarMenu setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar (Layar besar) */}
      <aside className="hidden lg:flex flex-col w-64 border-r shadow-sm h-screen p-4">
        <SidebarMenu />
      </aside>
    </>
  );
}

function SidebarMenu({ setIsOpen }: { setIsOpen?: (open: boolean) => void }) {
  return (
    <nav className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2 my-3"> Admin Panel</h2>
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen?.(false)}
        >
          <item.icon size={20} />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}

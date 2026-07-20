"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  RefreshCw,
  UserCircle2,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const title = useMemo(() => {
    if (pathname === "/admin") return "Dashboard";

    if (pathname.startsWith("/admin/packages"))
      return "Package Management";

    if (pathname.startsWith("/admin/bookings"))
      return "Booking Management";

    if (pathname.startsWith("/admin/users"))
      return "Customer Management";

    if (pathname.startsWith("/admin/news"))
      return "News Management";

    if (pathname.startsWith("/admin/gallery"))
      return "Gallery Management";

    if (pathname.startsWith("/admin/contacts"))
      return "Contact Messages";

    if (pathname.startsWith("/admin/newsletter"))
      return "Newsletter";

    if (pathname.startsWith("/admin/settings"))
      return "Website Settings";

    return "Admin Dashboard";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 hidden lg:block border-b border-white/10 bg-[#07101F]/95 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-black text-white">
            {title}
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Welcome back, Administrator
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-80 rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none transition focus:border-yellow-400"
            />
          </div>

          {/* Refresh */}
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            <RefreshCw size={18} />
            Refresh
          </button>

          {/* Notifications */}
          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
            <UserCircle2
              size={40}
              className="text-yellow-400"
            />

            <div>
              <p className="font-semibold text-white">
                Administrator
              </p>

              <p className="text-xs text-slate-400">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
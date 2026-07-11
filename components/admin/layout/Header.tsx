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
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07101F]/95 backdrop-blur-xl">

      <div className="flex items-center justify-between px-4 py-4 md:px-8 md:py-5">

        {/* Left */}

        <div>

          <h1 className="text-xl font-black text-white md:text-3xl">
            {title}
          </h1>

          <p className="mt-1 hidden text-sm text-slate-400 md:block">
            Welcome back, Administrator
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-2 md:gap-5">

          {/* Search */}

          <div className="relative hidden xl:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-80 rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-yellow-400"
            />

          </div>

          {/* Refresh */}

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-3 py-3 font-semibold text-black transition hover:bg-yellow-300 md:px-5"
          >

            <RefreshCw size={18} />

            <span className="hidden lg:block">
              Refresh
            </span>

          </button>

          {/* Notifications */}

          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:h-12 md:w-12">

            <Bell size={20} className="text-white" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-2 py-2 md:px-4">

            <UserCircle2
              size={38}
              className="text-yellow-400"
            />

            <div className="hidden lg:block">

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
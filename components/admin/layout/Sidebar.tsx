"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  BookOpen,
  Users,
  Newspaper,
  Images,
  Mail,
  Settings,
  Bell,
  LogOut,
  Plane,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Packages",
    href: "/admin/packages",
    icon: Package,
  },
  {
    title: "Bookings",
    href: "/admin/bookings",
    icon: BookOpen,
  },
  {
    title: "Customers",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "News",
    href: "/admin/news",
    icon: Newspaper,
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: Images,
  },
  {
    title: "Contact Messages",
    href: "/admin/contacts",
    icon: Mail,
  },
  {
    title: "Newsletter",
    href: "/admin/newsletter",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  return (<>
  {/* ==========================
      MOBILE HEADER
  ========================== */}

  <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#07101F] px-5 md:hidden">

    <button
      onClick={() => setMobileOpen(true)}
      className="rounded-xl p-2 text-white hover:bg-white/10"
    >
      <Menu size={26} />
    </button>

    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">

        <Plane
          size={20}
          className="text-black"
        />

      </div>

      <div>

        <h1 className="text-lg font-black text-yellow-400">
          M.Y HAMDALA
        </h1>

      </div>

    </div>

    <div className="w-10" />

  </header>

  {/* ==========================
      MOBILE OVERLAY
  ========================== */}

  {mobileOpen && (

    <div
      onClick={closeDrawer}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
    />

  )}

  {/* ==========================
      SIDEBAR
  ========================== */}

  <aside
  className={`
fixed inset-y-0 left-0 z-50
flex flex-col

h-screen
w-[85vw]
max-w-[320px]

border-r border-white/10
bg-[#07101F]
shadow-2xl

transform transition-transform duration-300 ease-in-out

${mobileOpen ? "translate-x-0" : "-translate-x-full"}

lg:translate-x-0
lg:w-72
lg:shrink-0
`}
>
    <div>

      {/* ==========================
          HEADER
      ========================== */}

      <div className="border-b border-white/10 p-8">

        <div className="mb-6 flex items-center justify-between md:hidden">

          <button
            onClick={closeDrawer}
            className="rounded-xl p-2 text-white hover:bg-white/10"
          >

            <X size={24} />

          </button>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400">

            <Plane
              size={30}
              className="text-black"
            />

          </div>

          <div>

            <h1 className="text-2xl font-black text-yellow-400">

              M.Y HAMDALA

            </h1>

            <p className="text-sm text-slate-400">

              Travel ERP

            </p>

          </div>

        </div>

      </div>

      {/* ==========================
          ADMIN CARD
      ========================== */}

      <div className="m-6 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-5">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black text-black">

            A

          </div>

          <div>

            <h2 className="font-bold text-white">

              Administrator

            </h2>

            <p className="text-sm text-slate-400">

              Super Admin

            </p>

            <div className="mt-2 flex items-center gap-2 text-xs text-green-400">

              <ShieldCheck size={14} />

              Verified Access

            </div>

          </div>

        </div>

      </div>

      {/* ==========================
          MENU
      ========================== */}

      <nav className="px-4">        {menus.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(
              item.href + "/"
            );

          return (

            <Link
              key={item.href}
              href={item.href}
              onClick={closeDrawer}
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 ${
                active
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >

              <Icon size={20} />

              <span className="font-medium">

                {item.title}

              </span>

            </Link>

          );

        })}

      </nav>

    </div>

    {/* ==========================
        FOOTER
    ========================== */}

    <div className="border-t border-white/10 p-6">

      <div className="mb-5 rounded-2xl bg-green-500/10 p-4">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-400" />

          <div>

            <p className="font-semibold text-green-400">

              System Online

            </p>

            <p className="text-xs text-slate-400">

              Railway Connected

            </p>

          </div>

        </div>

      </div>

      <button
        onClick={logout}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
      >

        <LogOut size={18} />

        Logout

      </button>

    </div>

  </aside>

</>
  );
}
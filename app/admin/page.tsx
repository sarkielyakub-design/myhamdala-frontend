"use client";

import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Package,
  BookOpen,
  Users,
  CreditCard,
  RefreshCw,
  LogOut,
  ShieldCheck,
  Search,
  Bell,
  Menu,
  X,
  Plane,
} from "lucide-react";

import API from "@/lib/api";

import CreatePackage from "./components/admin/CreatePackage";
import PackageList from "./components/admin/PackageList";
import BookingList from "./components/admin/BookingList";
import DashboardStats from "./components/admin/DashboardStats";
import UserList from "./components/admin/UserList";
import PaymentList from "./components/admin/PaymentList";

export default function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const [packages, setPackages] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);

  const [analytics, setAnalytics] = useState({
    total_bookings: 0,
    paid: 0,
    pending: 0,
    conversion_rate: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<any>({});
  const [editingId, setEditingId] = useState<number | null>(null);

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // 🔥 SAFE DATA
  const safeData = (res: any, fallback: any) => {
    if (!res) return fallback;

    if (res.data?.data !== undefined) {
      return res.data.data;
    }

    if (res.data !== undefined) {
      return res.data;
    }

    return fallback;
  };

  // 🔥 FETCH
  const fetchData = async () => {
    try {
      setLoading(true);

      const [
        pkgRes,
        bookRes,
        analyticsRes,
        usersRes,
        paymentsRes,
      ] = await Promise.all([
        API.get("/admin/packages"),
        API.get("/admin/bookings"),
        API.get("/admin/analytics"),
        API.get("/admin/users"),
        API.get("/admin/payments"),
      ]);

      setPackages(safeData(pkgRes, []));
      setBookings(safeData(bookRes, []));
      setUsers(safeData(usersRes, []));
      setPayments(safeData(paymentsRes, []));

      const analyticsData = safeData(analyticsRes, {});

      setAnalytics({
        total_bookings: analyticsData.total_bookings || 0,
        paid: analyticsData.paid || 0,
        pending: analyticsData.pending || 0,
        conversion_rate: analyticsData.conversion_rate || 0,
        revenue: analyticsData.revenue || 0,
      });
    } catch (err: any) {
      console.error(err);

      if (err?.response?.status === 401) {
        alert("Session expired");

        localStorage.removeItem("token");

        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  // 🔥 LOAD
  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 EDIT
  const handleEdit = (pkg: any) => {
    setForm({
      title: pkg.title,
      description: pkg.description,
      price: pkg.price,
      flight_name: pkg.flight_name,
      flight_from: pkg.flight_from,
      flight_to: pkg.flight_to,
      departure_date: pkg.departure_date,
      return_date: pkg.return_date,
      hotel_name: pkg.hotel_name,
      hotel_rating: pkg.hotel_rating,
      category: pkg.category,
      duration_days: pkg.duration_days,
      total_slots: pkg.total_slots,
    });

    setEditingId(pkg.id);

    setTab("packages");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "packages",
      label: "Packages",
      icon: Package,
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: BookOpen,
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
    },
    {
      id: "users",
      label: "Users",
      icon: Users,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300/10 blur-[120px]" />

      </div>

      {/* 🔥 MOBILE SIDEBAR */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl md:hidden">

          <div className="w-72 h-full bg-[#0B1120] border-r border-white/10 p-6">

            <div className="flex justify-between items-center mb-10">

              <div>
                <h1 className="text-2xl font-black text-yellow-400">
                  M.Y HAMDALA
                </h1>

                <p className="text-xs text-gray-500">
                  TRAVEL ADMIN
                </p>
              </div>

              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>

            </div>

            <nav className="space-y-3">

              {menus.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTab(item.id);
                      setMobileOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                      tab === item.id
                        ? "bg-yellow-500 text-black"
                        : "hover:bg-white/10 text-gray-300"
                    }`}
                  >
                    <Icon size={20} />

                    {item.label}
                  </button>
                );
              })}

            </nav>

          </div>

        </div>
      )}

      {/* 🔥 SIDEBAR */}
      <aside className="hidden md:flex w-80 bg-white/[0.03] backdrop-blur-3xl border-r border-white/10 flex-col justify-between p-6">

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="mb-10">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center">

                <Plane className="text-black" />

              </div>

              <div>

                <h1 className="text-3xl font-black text-yellow-400">
                  M.Y HAMDALA
                </h1>

                <p className="text-gray-500 text-sm">
                  Travel ERP System
                </p>

              </div>

            </div>

          </div>

          {/* ADMIN CARD */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/20 rounded-3xl p-5 mb-10">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center font-black text-2xl">
                A
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  Administrator
                </h2>

                <p className="text-gray-400 text-sm">
                  Super Admin
                </p>

                <div className="flex items-center gap-2 mt-2 text-green-400 text-xs">

                  <ShieldCheck size={14} />

                  Verified Access

                </div>

              </div>

            </div>

          </div>

          {/* NAVIGATION */}
          <nav className="space-y-3">

            {menus.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`group w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${
                    tab === item.id
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-2xl"
                      : "hover:bg-white/10 text-gray-300"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <Icon size={20} />

                    <span className="font-medium">
                      {item.label}
                    </span>

                  </div>

                  <span className="opacity-50 group-hover:translate-x-1 transition">
                    →
                  </span>

                </button>
              );
            })}

          </nav>

        </div>

        {/* BOTTOM */}
        <div>

          {/* SYSTEM */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-5 mb-5">

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-green-400" />

              <div>

                <p className="font-semibold text-green-400">
                  System Online
                </p>

                <p className="text-xs text-gray-400">
                  Secure travel management active
                </p>

              </div>

            </div>

          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 transition-all py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
          >
            <LogOut size={18} />

            Logout
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            ©️ {new Date().getFullYear()} M.Y HAMDALA
          </p>

        </div>

      </aside>

      {/* 🔥 MAIN */}
      <main className="flex-1 overflow-auto">

        {/* 🔥 TOPBAR */}
        <div className="sticky top-0 z-30 bg-[#050816]/70 backdrop-blur-2xl border-b border-white/10 px-5 md:px-10 py-5">

          <div className="flex items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden"
              >
                <Menu />
              </button>

              <div>

                <h1 className="text-3xl font-bold capitalize">
                  {tab}
                </h1>

                <p className="text-sm text-gray-400">
                  Manage bookings, payments and packages
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              {/* SEARCH */}
              <div className="hidden md:flex relative">

                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  placeholder="Search..."
                  className="bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 w-80 outline-none focus:border-yellow-500"
                />

              </div>

              {/* REFRESH */}
              <button
                onClick={fetchData}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-2xl font-semibold flex items-center gap-2 transition-all"
              >
                <RefreshCw size={18} />

                Refresh
              </button>

              {/* NOTIFICATION */}
              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10">

                <Bell size={18} />

              </button>

            </div>

          </div>

        </div>

        {/* 🔥 CONTENT */}
        <div className="p-5 md:p-10">

          {loading ? (

            <div className="flex flex-col items-center justify-center h-[70vh]">

              <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />

              <p className="mt-5 text-gray-400">
                Loading premium dashboard...
              </p>

            </div>

          ) : (

            <>
              {/* DASHBOARD */}
              {tab === "dashboard" && (
                <DashboardStats analytics={analytics} />
              )}

              {/* PACKAGES */}
              {tab === "packages" && (
                <div className="space-y-8">

                  <CreatePackage
                    onCreated={fetchData}
                    form={form}
                    setForm={setForm}
                    editingId={editingId}
                    setEditingId={setEditingId}
                  />

                  <PackageList
                    packages={packages}
                    refresh={fetchData}
                    onEdit={handleEdit}
                  />

                </div>
              )}

              {/* BOOKINGS */}
              {tab === "bookings" && (
                <BookingList bookings={bookings} />
              )}

              {/* USERS */}
              {tab === "users" && (
                <UserList users={users} />
              )}

              {/* PAYMENTS */}
              {tab === "payments" && (
                <PaymentList payments={payments} />
              )}
            </>

          )}

        </div>

      </main>

    </div>
  );
}
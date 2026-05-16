"use client";

import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Package,
  BookOpen,
  RefreshCw,
  LogOut,
  ShieldCheck,
  Search,
} from "lucide-react";

import API from "@/lib/api";

import CreatePackage from "./components/admin/CreatePackage";
import PackageList from "./components/admin/PackageList";
import BookingList from "./components/admin/BookingList";
import DashboardStats from "./components/admin/DashboardStats";

export default function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");

  const [packages, setPackages] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  const [analytics, setAnalytics] = useState({
    total_bookings: 0,
    paid: 0,
    pending: 0,
    conversion_rate: 0,
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
    if (res.data?.data !== undefined) return res.data.data;
    if (res.data !== undefined) return res.data;
    return fallback;
  };

  // 🔥 FETCH
  const fetchData = async () => {
    try {
      setLoading(true);

      const [pkgRes, bookRes, analyticsRes] = await Promise.all([
        API.get("/admin/packages"),
        API.get("/admin/bookings"),
        API.get("/admin/analytics"),
      ]);

      setPackages(safeData(pkgRes, []));
      setBookings(safeData(bookRes, []));

      const analyticsData = safeData(analyticsRes, {});

      setAnalytics({
        total_bookings: analyticsData.total_bookings || 0,
        paid: analyticsData.paid || 0,
        pending: analyticsData.pending || 0,
        conversion_rate: analyticsData.conversion_rate || 0,
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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#050816] via-[#0B1120] to-black text-white">

      {/* SIDEBAR */}
      <aside className="hidden md:flex w-72 bg-black/40 backdrop-blur-2xl border-r border-white/10 p-6 flex-col justify-between">

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="mb-10">

            <h1 className="text-3xl font-extrabold text-yellow-400">
              M.Y HAMDALA
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              TRAVEL & TOUR ADMIN
            </p>

          </div>

          {/* PROFILE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-8">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xl">
                A
              </div>

              <div>
                <h3 className="font-semibold">
                  Administrator
                </h3>

                <p className="text-xs text-gray-400">
                  Super Admin
                </p>
              </div>

            </div>

          </div>

          {/* NAVIGATION */}
          <nav className="space-y-3">

            {/* DASHBOARD */}
            <button
              onClick={() => setTab("dashboard")}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                tab === "dashboard"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </button>

            {/* PACKAGES */}
            <button
              onClick={() => setTab("packages")}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                tab === "packages"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              <Package size={20} />
              Packages
            </button>

            {/* BOOKINGS */}
            <button
              onClick={() => setTab("bookings")}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
                tab === "bookings"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              <BookOpen size={20} />
              Bookings
            </button>

          </nav>

        </div>

        {/* BOTTOM */}
        <div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-5 flex items-center gap-3">

            <ShieldCheck className="text-green-400" />

            <div>
              <p className="text-sm font-medium text-green-400">
                System Active
              </p>

              <p className="text-xs text-gray-400">
                Secure connection enabled
              </p>
            </div>

          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <LogOut size={18} />
            Logout
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            ©️ {new Date().getFullYear()} M.Y HAMDALA
          </p>

        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-5 md:p-10 overflow-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

          {/* TITLE */}
          <div>

            <h1 className="text-4xl font-bold capitalize">
              {tab}
            </h1>

            <p className="text-gray-400 mt-2">
              Manage bookings, packages and travel operations
            </p>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* SEARCH */}
            <div className="relative">

              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />

              <input
                placeholder="Search..."
                className="bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 w-full sm:w-72 outline-none focus:border-yellow-500 transition"
              />

            </div>

            {/* REFRESH */}
            <button
              onClick={fetchData}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
            >
              <RefreshCw size={18} />
              Refresh
            </button>

          </div>

        </div>

        {/* LOADING */}
        {loading ? (

          <div className="flex flex-col items-center justify-center h-[60vh]">

            <div className="w-14 h-14 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />

            <p className="mt-4 text-gray-400">
              Loading Dashboard...
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

          </>
        )}

      </main>

    </div>
  );
}
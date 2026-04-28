"use client";

import { useEffect, useState } from "react";
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
 // 🔥 NEW: EDIT STATES
  const [form, setForm] = useState<any>({});
  const [editingId, setEditingId] = useState<number | null>(null);

  // 🚀 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // 🧠 SAFE DATA EXTRACTOR (PRO)
  const safeData = (res: any, fallback: any) => {
    if (!res) return fallback;
    if (res.data && res.data.data !== undefined) return res.data.data;
    if (res.data !== undefined) return res.data;
    return fallback;
  };

  // 🚀 FETCH DATA (PRO MAX SAFE)
  const fetchData = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // ❌ NO TOKEN
      if (!token) {
        window.location.href = "/login";
        return;
      }

      // 🔥 SAFE PARALLEL CALLS (NO FULL CRASH)
      const [pkgRes, bookRes, analyticsRes] = await Promise.allSettled([
        API.get("/admin/packages"),
        API.get("/admin/bookings"),
        API.get("/admin/analytics"),
      ]);

      // 📦 PACKAGES
      useEffect(() => {
  const fetchPackages = async () => {
    try {
      const res = await API.get("/packages");

      console.log("🔥 RAW:", res.data);

      // ✅ FIX HERE
     

    } catch (err) {
      console.error(err);
      setPackages([]);
    }
  };

  fetchPackages();
}, []);
      // 📘 BOOKINGS
      if (bookRes.status === "fulfilled") {
        setBookings(safeData(bookRes.value, []));
      } else {
        console.error("❌ Bookings error:", bookRes.reason);
        setBookings([]);
      }

      // 📊 ANALYTICS
      if (analyticsRes.status === "fulfilled") {
        setAnalytics(safeData(analyticsRes.value, {}));
      } else {
        console.error("❌ Analytics error:", analyticsRes.reason);
      }

    } catch (err: any) {
      console.error("🔥 Admin fetch error:", err?.response?.data || err);

      if (err?.response?.status === 401) {
        alert("⚠️ Session expired. Please login again.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  // 🚀 INITIAL LOAD
useEffect(() => {
  const fetchData = async () => {
    try {
     const res = await API.get("/admin/packages");

const safeData = Array.isArray(res.data?.data)
  ? res.data.data
  : [];

setPackages(safeData);
    } catch (err) {
      console.error("ADMIN ERROR:", err);
      setError("Not authorized or failed to load");
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
 // ✅ EDIT HANDLER (🔥 KEY FIX)
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

    // scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-white">

      {/* 🔥 SIDEBAR */}
      <aside className="w-64 bg-[#121826] border-r border-white/10 p-6 flex flex-col justify-between">

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            M.Y HAMDALA
          </h2>

          <p className="text-xs text-gray-500 mb-8">
            TRAVEL AND TOURS
          </p>

          <nav className="space-y-3">

            <button
              onClick={() => setTab("dashboard")}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                tab === "dashboard"
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              📊 Dashboard
            </button>

            <button
              onClick={() => setTab("packages")}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                tab === "packages"
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              📦 Packages
            </button>

            <button
              onClick={() => setTab("bookings")}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                tab === "bookings"
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              📘 Bookings
            </button>

          </nav>
        </div>

        <div className="space-y-4">

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 transition py-2 rounded-lg text-sm font-semibold"
          >
            🚪 Logout
          </button>

          <div className="text-center text-xs text-gray-500">
            System Secure • Online
          </div>

          <div className="text-xs text-gray-500 text-center">
            ©️ {new Date().getFullYear()} M.Y HAMDALA
          </div>

        </div>

      </aside>

      {/* 🔥 MAIN */}
      <main className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-3xl font-bold capitalize">{tab}</h1>
            <p className="text-gray-400 text-sm">
              Manage your travel system
            </p>
          </div>

          <div className="flex items-center gap-3">

            <div className="bg-[#121826] px-4 py-2 rounded-lg border border-white/10">
              <span className="text-green-400 text-sm">
                ● System Active
              </span>
            </div>

            <button
              onClick={fetchData}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
            >
              🔄 Refresh
            </button>

          </div>

        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex items-center justify-center h-64 text-gray-400">
            Loading dashboard...
          </div>
        ) : (
          <>
            {tab === "dashboard" && (
              <DashboardStats analytics={analytics} />
            )}

            {tab === "packages" && (
              <div className="space-y-6">

                {/* 🔥 PASS EDIT STATE */}
                <CreatePackage
                  onCreated={fetchData}
                  form={form}
                  setForm={setForm}
                  editingId={editingId}
                  setEditingId={setEditingId}
                />

                {/* 🔥 PASS onEdit */}
                <PackageList
                  packages={packages}
                  refresh={fetchData}
                  onEdit={handleEdit}
                />

              </div>
            )}

            {tab === "bookings" && (
              <BookingList bookings={bookings} />
            )}
          </>
        )}

      </main>

    </div>
  );
}

function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

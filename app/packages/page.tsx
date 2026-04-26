"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function PackagesPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // 📦 FETCH PACKAGES
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await API.get("/packages");

        const data = res.data.data; // ✅ IMPORTANT
        setPackages(data);
        setFiltered(data);

      } catch (err) {
        console.error("Error loading packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // 🔍 SEARCH FILTER
 useEffect(() => {
  const safePackages = Array.isArray(packages) ? packages : [];

  const result = safePackages.filter((pkg) => {
    const title = String(pkg?.title || "").toLowerCase();
    const query = String(search || "").toLowerCase();

    return title.includes(query);
  });

  setFiltered(result);
}, [search, packages]);
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* 🏷️ HEADER */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 M.Y Hamdala Travel Packages
      </h1>

      {/* 🔍 SEARCH */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search packages..."
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-yellow-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ⏳ LOADING */}
      {loading && (
        <p className="text-center text-gray-400">Loading packages...</p>
      )}

      {/* ❌ EMPTY */}
      {!loading && filtered.length === 0 && (
        <p className="text-center text-gray-400">No packages found</p>
      )}

      {/* 📦 GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/10 hover:scale-105 transition"
          >
            {/* 🖼️ IMAGE */}
            {pkg.image_url && (
              <img
                src={`https://travel-backend-oo52.onrender.com${pkg.image_url}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}

            {/* 📝 CONTENT */}
            <h2 className="text-xl font-semibold mb-2">
              {pkg.title}
            </h2>

            <p className="text-gray-300 text-sm mb-3">
              {pkg.description}
            </p>

            <p className="text-yellow-400 font-bold text-lg">
              ₦{pkg.price}
            </p>

            {/* 🔘 BUTTON */}
            <button className="mt-4 w-full py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:scale-105 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
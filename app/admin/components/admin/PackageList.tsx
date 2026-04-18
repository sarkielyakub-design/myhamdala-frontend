"use client";

import API from "@/lib/api";

export default function PackageList({
  packages,
  refresh,
  onEdit, // ✅ receive edit handler
}: any) {

  const deletePackage = async (id: number) => {
    if (!confirm("Delete this package?")) return;

    try {
      await API.delete(`/admin/packages/${id}`);
      refresh();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete package");
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {packages.map((p: any) => {
        const total = p.total_slots || 0;
        const booked = p.booked_slots || 0;
        const available = total - booked;

        const percentage = total
          ? Math.round((booked / total) * 100)
          : 0;

        return (
          <div
            key={p.id}
            className="bg-[#121826] rounded-2xl overflow-hidden border border-white/10 hover:shadow-xl transition"
          >

            {/* 🖼 IMAGE */}
            <div className="relative">
              <img
                src={`const BASE_URL = "https://travel-backend-oo52.onrender.com";{p.image_url}`}
                className="h-44 w-full object-cover"
              />

              {/* 💰 PRICE */}
              <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded-full text-yellow-400 text-sm">
                ₦{Number(p.price).toLocaleString()}
              </div>

              {/* 🏷 CATEGORY */}
              <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded bg-white/10">
                {p.category || "standard"}
              </div>
            </div>

            {/* 📦 CONTENT */}
            <div className="p-5 space-y-2">

              <h3 className="text-lg font-bold">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                {p.description}
              </p>

              {/* ✈️ FLIGHT */}
              <p className="text-sm text-gray-300">
                ✈️ {p.flight_from || "-"} → {p.flight_to || "-"}
              </p>

              {/* 📅 DATE */}
              <p className="text-sm text-gray-300">
                📅 {p.departure_date || "-"} → {p.return_date || "-"}
              </p>

              {/* 🏨 HOTEL */}
              <p className="text-sm text-gray-300">
                🏨 {p.hotel_name || "-"} ⭐{p.hotel_rating || "3"}
              </p>

              {/* 📊 SLOT PROGRESS */}
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{available} available</span>
                  <span>{booked}/{total}</span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className={`h-2 rounded ${
                      percentage > 80
                        ? "bg-red-500"
                        : percentage > 50
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* 🔘 ACTIONS */}
              <div className="flex gap-2 mt-4">

                {/* ✅ EDIT BUTTON */}
                <button
                  onClick={() => onEdit(p)}
                  className="bg-blue-500 px-3 py-1 rounded text-sm hover:scale-105 transition"
                >
                  Edit
                </button>

                {/* ❌ DELETE */}
                <button
                  onClick={() => deletePackage(p.id)}
                  className="bg-red-500 px-3 py-1 rounded text-sm hover:scale-105 transition"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}
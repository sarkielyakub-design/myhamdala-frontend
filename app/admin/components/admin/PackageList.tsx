"use client";

import API from "@/lib/api";

import {
  Plane,
  Hotel,
  CalendarDays,
  Pencil,
  Trash2,
  Users,
  Star,
  MapPin,
} from "lucide-react";

export default function PackageList({
  packages,
  refresh,
  onEdit,
}: any) {

  // 🔥 IMAGE FIX
  const getImage = (path: string | null) => {
    if (!path) return "/images/makkah.jpg";

    if (path.startsWith("http")) return path;

    return `https://travel-backend-oo52.onrender.com${path}`;
  };

  // 🔥 DELETE
  const deletePackage = async (id: number) => {
    const ok = confirm("Delete this package?");

    if (!ok) return;

    try {
      await API.delete(`/admin/packages/${id}`);

      refresh();

    } catch (err) {
      console.error(err);

      alert("Failed to delete package");
    }
  };

  return (
    <div className="space-y-8">

      {/* 🔥 HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <div>

          <h2 className="text-3xl font-bold">
            Travel Packages
          </h2>

          <p className="text-gray-400 mt-1">
            Manage Umrah, Hajj and premium travel packages
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 px-5 py-3 rounded-2xl">
          <span className="text-yellow-400 font-semibold">
            {packages.length} Packages Available
          </span>
        </div>

      </div>

      {/* 🔥 EMPTY */}
      {packages.length === 0 && (
        <div className="bg-[#121826] border border-white/10 rounded-3xl p-12 text-center">

          <div className="text-6xl mb-4">
            📦
          </div>

          <h3 className="text-2xl font-bold mb-2">
            No Packages Yet
          </h3>

          <p className="text-gray-400">
            Create your first travel package
          </p>

        </div>
      )}

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >

              {/* 🔥 IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={getImage(p.image_url)}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* PRICE */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10">

                  <p className="text-yellow-400 font-bold">
                    ₦{Number(p.price).toLocaleString()}
                  </p>

                </div>

                {/* CATEGORY */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase
                  ${
                    p.category === "premium"
                      ? "bg-yellow-500 text-black"
                      : p.category === "standard"
                      ? "bg-green-500 text-black"
                      : "bg-blue-500 text-white"
                  }
                `}>
                  {p.category || "standard"}
                </div>

                {/* TITLE */}
                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="text-2xl font-bold text-white">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-1 text-yellow-400">

                    <Star size={16} fill="currentColor" />

                    <span className="text-sm">
                      4.9 Premium Rating
                    </span>

                  </div>

                </div>

              </div>

              {/* 🔥 BODY */}
              <div className="p-6 space-y-5">

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                {/* DETAILS */}
                <div className="space-y-3">

                  {/* FLIGHT */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">

                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Plane className="text-blue-400" size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Flight Route
                      </p>

                      <p>
                        {p.flight_from || "-"} → {p.flight_to || "-"}
                      </p>
                    </div>

                  </div>

                  {/* DATE */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">

                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      <CalendarDays
                        className="text-yellow-400"
                        size={18}
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Travel Date
                      </p>

                      <p>
                        {p.departure_date || "-"} → {p.return_date || "-"}
                      </p>
                    </div>

                  </div>

                  {/* HOTEL */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">

                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Hotel className="text-green-400" size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Hotel
                      </p>

                      <p>
                        {p.hotel_name || "-"} ⭐
                        {p.hotel_rating || 3}
                      </p>
                    </div>

                  </div>

                </div>

                {/* 🔥 SLOT */}
                <div className="bg-black/30 rounded-2xl p-4 border border-white/5">

                  <div className="flex justify-between items-center mb-3">

                    <div className="flex items-center gap-2 text-sm">

                      <Users
                        size={16}
                        className="text-green-400"
                      />

                      <span className="text-gray-300">
                        Available Slots
                      </span>

                    </div>

                    <span className="text-sm text-yellow-400 font-semibold">
                      {available}/{total}
                    </span>

                  </div>

                  {/* BAR */}
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">

                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        percentage > 80
                          ? "bg-red-500"
                          : percentage > 50
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    {booked} seats booked
                  </p>

                </div>

                {/* 🔥 ACTIONS */}
                <div className="grid grid-cols-2 gap-3">

                  {/* EDIT */}
                  <button
                    onClick={() => onEdit(p)}
                    className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Pencil size={18} />
                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => deletePackage(p.id)}
                    className="bg-red-500 hover:bg-red-600 transition-all duration-300 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}
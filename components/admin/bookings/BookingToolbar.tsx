"use client";

import {
  Search,
  RefreshCw,
  Filter,
} from "lucide-react";

export default function BookingToolbar() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-3 pl-11 pr-4 text-white"
          />

        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-3 text-white">

            <RefreshCw size={18} />

            Refresh

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-3 text-white">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

    </div>
  );
}
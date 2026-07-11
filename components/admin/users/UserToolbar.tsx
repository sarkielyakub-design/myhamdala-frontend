"use client";

import {
  Search,
  RefreshCw,
  Filter,
} from "lucide-react";

interface Props {
  search?: string;
  onSearch?: (value: string) => void;
  onRefresh?: () => void;
}

export default function UserToolbar({
  search = "",
  onSearch,
  onRefresh,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearch?.(e.target.value)
            }
            placeholder="Search customer..."
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-3 pl-11 pr-4 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:outline-none"
          />

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-3">

          <button
            onClick={onRefresh}
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-3 text-white transition hover:bg-white/10"
          >

            <RefreshCw size={18} />

            Refresh

          </button>

          <select
            className="rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-3 text-white outline-none"
          >
            <option>All Customers</option>
            <option>Verified</option>
            <option>Unverified</option>
            <option>Administrators</option>
          </select>

          <button
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-3 text-white transition hover:bg-white/10"
          >

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

    </div>
  );
}
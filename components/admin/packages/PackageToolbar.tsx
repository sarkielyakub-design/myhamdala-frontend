"use client";

import {
  Plus,
  Search,
  Download,
  RefreshCw,
  Filter,
} from "lucide-react";

import Link from "next/link";

export default function PackageToolbar() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex flex-1 flex-wrap gap-4">

          {/* Search */}

          <div className="relative min-w-[280px] flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search packages..."
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#0B1220]
                py-3
                pl-11
                pr-4
                text-white
                placeholder:text-slate-500
                outline-none
                focus:border-yellow-400
              "
            />

          </div>

          {/* Category */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              px-5
              py-3
              text-white
              outline-none
              focus:border-yellow-400
            "
          >
            <option>All Categories</option>
            <option>Umrah</option>
            <option>Hajj</option>
            <option>Holiday</option>
            <option>Tour</option>
          </select>

          {/* Status */}

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              px-5
              py-3
              text-white
              outline-none
              focus:border-yellow-400
            "
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Featured</option>
          </select>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-3">

          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              px-5
              py-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <RefreshCw size={18} />

            Refresh
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              px-5
              py-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <Filter size={18} />

            Filters
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              px-5
              py-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <Download size={18} />

            Export
          </button>

          <Link
            href="/admin/packages/create"
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-yellow-400
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:bg-yellow-300
            "
          >
            <Plus size={18} />

            New Package
          </Link>

        </div>

      </div>

    </div>
  );
}
"use client";

import Link from "next/link";

import {
  Search,
  Filter,
  RefreshCw,
  Download,
  Plus,
} from "lucide-react";

export default function GalleryToolbar() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex flex-1 flex-wrap gap-4">

          {/* Search */}

          <div className="relative min-w-[300px] flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search gallery..."
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
            "
          >
            <option>All Categories</option>
            <option>Hajj</option>
            <option>Umrah</option>
            <option>Tours</option>
            <option>Events</option>
            <option>Office</option>
            <option>Customers</option>
          </select>

          {/* Featured */}

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
            "
          >
            <option>All Images</option>
            <option>Featured</option>
            <option>Normal</option>
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
              hover:bg-white/10
            "
          >
            <Filter size={18} />

            Filter
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
              hover:bg-white/10
            "
          >
            <Download size={18} />

            Export
          </button>

          <Link
            href="/admin/gallery/create"
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
              hover:bg-yellow-300
            "
          >
            <Plus size={18} />

            Upload Images
          </Link>

        </div>

      </div>

    </div>
  );
}
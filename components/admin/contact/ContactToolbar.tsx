"use client";

import {
  Search,
  RefreshCw,
  Filter,
} from "lucide-react";

export default function ContactToolbar() {

  return (

    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        <div className="flex flex-1 flex-wrap gap-4">

          <div className="relative min-w-[300px] flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              placeholder="Search messages..."
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
                outline-none
                focus:border-yellow-400
              "
            />

          </div>

          <select
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              px-5
              py-3
              text-white
            "
          >
            <option>All Messages</option>
            <option>Unread</option>
            <option>Read</option>
            <option>Replied</option>
            <option>Archived</option>
          </select>

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
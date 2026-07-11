"use client";

import { Search } from "lucide-react";

interface Props {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "Search...",
}: Props) {

  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        placeholder={placeholder}
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
  );
}
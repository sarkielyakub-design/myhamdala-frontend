"use client";

import { Search, Filter, RotateCcw } from "lucide-react";

export default function NewsSearch() {
  return (
    <section className="bg-slate-50 py-12">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
          "
        >

          {/* Header */}

          <div className="mb-8 flex items-center gap-3">

            <Filter
              size={24}
              className="text-blue-700"
            />

            <h2 className="text-2xl font-bold text-slate-900">
              Search Articles
            </h2>

          </div>

          {/* Filters */}

          <div className="grid gap-6 lg:grid-cols-5">

            {/* Search */}

            <div className="lg:col-span-2">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Search
              </label>

              <div className="relative">

                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search news..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    py-3
                    pl-11
                    pr-4
                    outline-none
                    transition
                    focus:border-blue-700
                  "
                />

              </div>

            </div>

            {/* Category */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>

              <select
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-700
                "
              >
                <option>All Categories</option>
                <option>Umrah</option>
                <option>Hajj</option>
                <option>Visa</option>
                <option>Travel Tips</option>
                <option>Airline Updates</option>
              </select>

            </div>

            {/* Sort */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Sort
              </label>

              <select
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-700
                "
              >
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>

            </div>

            {/* Buttons */}

            <div className="flex items-end gap-3">

              <button
                className="
                  flex-1
                  rounded-xl
                  bg-blue-700
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-800
                "
              >
                Search
              </button>

              <button
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-300
                  transition
                  hover:bg-slate-100
                "
              >
                <RotateCcw size={20} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
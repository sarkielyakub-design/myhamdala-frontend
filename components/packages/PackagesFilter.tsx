"use client";

import {
  Search,
  Filter,
  Calendar,
  RotateCcw,
} from "lucide-react";

export default function PackagesFilter() {
  return (
    <section className="bg-slate-50 py-16">

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

            <h2
              className="
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Search & Filter Packages
            </h2>

          </div>

          {/* Filters */}

          <div
            className="
              grid
              gap-6
              lg:grid-cols-6
            "
          >

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
                  placeholder="Search packages..."
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
                  transition
                  focus:border-blue-700
                "
              >
                <option>All</option>
                <option>Premium</option>
                <option>Standard</option>
                <option>Economy</option>
              </select>

            </div>

            {/* Duration */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Duration
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
                  transition
                  focus:border-blue-700
                "
              >
                <option>All</option>
                <option>7 Days</option>
                <option>10 Days</option>
                <option>14 Days</option>
                <option>21 Days</option>
              </select>

            </div>

            {/* Departure */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Departure
              </label>

              <div className="relative">

                <Calendar
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="date"
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
"use client";

import { useState } from "react";

import {
  Save,
  Plane,
  Hotel,
  DollarSign,
  Calendar,
  Users,
  Star,
  MapPin,
  ImagePlus,
} from "lucide-react";

export default function PackageForm() {
  const [featured, setFeatured] = useState(false);

  const [active, setActive] = useState(true);

  return (
    <form className="space-y-8">

      {/* =========================
          BASIC INFORMATION
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-2xl font-black text-white">
          Basic Information
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Package Title
            </label>

            <input
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white outline-none focus:border-yellow-400"
              placeholder="Premium Umrah Package"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Category
            </label>

            <select className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white">

              <option>Umrah</option>

              <option>Hajj</option>

              <option>Holiday</option>

              <option>Tour</option>

            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm text-slate-400">
            Description
          </label>

          <textarea
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

        </div>

      </section>

      {/* =========================
          FLIGHT DETAILS
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Plane className="text-yellow-400" />

          <h2 className="text-2xl font-black text-white">
            Flight Information
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-4">

          <input
            placeholder="Airline"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Departure Airport"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Arrival Airport"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            type="number"
            placeholder="Duration (Hours)"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

        </div>

      </section>

      {/* =========================
          HOTEL
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Hotel className="text-blue-400" />

          <h2 className="text-2xl font-black text-white">
            Hotel Information
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <input
            placeholder="Hotel Name"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Rating"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Distance from Haram"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

        </div>

      </section>

      {/* =========================
          PRICING
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <DollarSign className="text-green-400" />

          <h2 className="text-2xl font-black text-white">
            Pricing
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <input
            type="number"
            placeholder="Price"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            type="number"
            placeholder="Discount"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            type="number"
            placeholder="Available Slots"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

        </div>

      </section>

      {/* =========================
          DATES
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Calendar className="text-purple-400" />

          <h2 className="text-2xl font-black text-white">
            Schedule
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <input
            type="date"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            type="date"
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

        </div>

      </section>

      {/* =========================
          SETTINGS
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-2xl font-black text-white">
          Package Settings
        </h2>

        <div className="space-y-6">

          <label className="flex items-center justify-between rounded-2xl bg-[#0B1220] p-5">

            <div className="flex items-center gap-3">

              <Star className="text-yellow-400" />

              <span className="text-white">
                Featured Package
              </span>

            </div>

            <input
              type="checkbox"
              checked={featured}
              onChange={() =>
                setFeatured(!featured)
              }
            />

          </label>

          <label className="flex items-center justify-between rounded-2xl bg-[#0B1220] p-5">

            <div className="flex items-center gap-3">

              <Users className="text-green-400" />

              <span className="text-white">
                Active Package
              </span>

            </div>

            <input
              type="checkbox"
              checked={active}
              onChange={() =>
                setActive(!active)
              }
            />

          </label>

        </div>

      </section>

      {/* =========================
          IMAGES
      ========================== */}

      <section className="rounded-3xl border border-dashed border-yellow-500/30 bg-[#111827] p-10 text-center">

        <ImagePlus
          className="mx-auto text-yellow-400"
          size={60}
        />

        <h2 className="mt-6 text-2xl font-bold text-white">
          Upload Package Images
        </h2>

        <p className="mt-3 text-slate-400">
          Drag & drop images here or click to browse.
        </p>

        <input
          type="file"
          multiple
          className="mt-8"
        />

      </section>

      {/* =========================
          SUBMIT
      ========================== */}

      <div className="flex justify-end">

        <button
          className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-10 py-4 text-lg font-bold text-black transition hover:bg-yellow-300"
        >

          <Save size={22} />

          Save Package

        </button>

      </div>

    </form>
  );
}
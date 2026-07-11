"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Save,
  UploadCloud,
  ImagePlus,
} from "lucide-react";

import API from "@/lib/api";

interface Props {
  packageData?: any;
  onSuccess?: () => void;
}

export default function CreatePackage({
  packageData,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  // ==========================
  // IMAGE
  // ==========================

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState<string>(
      packageData?.image_url || ""
    );

  // ==========================
  // FORM
  // ==========================

  const [form, setForm] = useState({
    title: packageData?.title ?? "",
    description: packageData?.description ?? "",

    category:
      packageData?.category ?? "Umrah",

    price:
      packageData?.price ?? "",

    flight_name:
      packageData?.flight_name ?? "",

    flight_from:
      packageData?.flight_from ?? "",

    flight_to:
      packageData?.flight_to ?? "",

    departure_date:
      packageData?.departure_date ?? "",

    return_date:
      packageData?.return_date ?? "",

    hotel_name:
      packageData?.hotel_name ?? "",

    hotel_rating:
      packageData?.hotel_rating ?? "5",

    duration_days:
      packageData?.duration_days ?? 7,

    total_slots:
      packageData?.total_slots ?? 100,

    booked_slots:
      packageData?.booked_slots ?? 0,
  });

  // ==========================
  // INPUT CHANGE
  // ==========================

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // ==========================
  // IMAGE CHANGE
  // ==========================

  function handleImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);

    setPreview(
      URL.createObjectURL(file)
    );
  }

  // ==========================
  // SUBMIT
  // ==========================

  async function submit() {
    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(form).forEach(
        ([key, value]) => {
          formData.append(
            key,
            String(value)
          );
        }
      );

      if (imageFile) {
        formData.append(
          "file",
          imageFile
        );
      }

      if (packageData?.id) {
        await API.put(
          `/admin/packages/${packageData.id}`,
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );
      } else {
        await API.post(
          "/admin/packages",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );
      }

      alert(
        packageData
          ? "Package updated successfully."
          : "Package created successfully."
      );

      onSuccess?.();

    } catch (error) {
      console.error(error);

      alert(
        "Unable to save package."
      );
    } finally {
      setLoading(false);
    }
  }

  return (<div className="space-y-8">

  {/* ==========================
      PACKAGE IMAGE
  ========================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-white">

      <ImagePlus className="text-yellow-400" />

      Package Image

    </h2>

    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

      <div className="relative h-72 overflow-hidden rounded-3xl border border-dashed border-white/20 bg-[#0B1220]">

        {preview ? (

          <Image
            src={preview}
            alt="Package"
            fill
            className="object-cover"
          />

        ) : (

          <div className="flex h-full flex-col items-center justify-center gap-4 text-slate-500">

            <UploadCloud size={70} />

            <span>No Image Selected</span>

          </div>

        )}

      </div>

      <div className="flex flex-col justify-center">

        <label className="mb-3 text-lg font-semibold text-white">

          Upload Package Image

        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white file:mr-4 file:rounded-xl file:border-0 file:bg-yellow-400 file:px-5 file:py-3 file:font-semibold file:text-black hover:file:bg-yellow-300"
        />

        <p className="mt-4 text-sm text-slate-400">

          Recommended size:
          1200 × 800 pixels

        </p>

      </div>

    </div>

  </div>

  {/* ==========================
      PACKAGE INFORMATION
  ========================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 text-2xl font-black text-white">

      Package Information

    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Package Title

        </label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="2027 Premium Umrah Package"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Package Category

        </label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        >

          <option value="Umrah">
            Umrah
          </option>

          <option value="Hajj">
            Hajj
          </option>

          <option value="Flight">
            Flight Ticket
          </option>

          <option value="Visa">
            Visa Processing
          </option>

          <option value="Holiday">
            Holiday Package
          </option>

          <option value="Business">
            Business Travel
          </option>

        </select>

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Package Price (₦)

        </label>

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="2500000"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Duration (Days)

        </label>

        <input
          type="number"
          name="duration_days"
          value={form.duration_days}
          onChange={handleChange}
          placeholder="14"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Total Seats

        </label>

        <input
          type="number"
          name="total_slots"
          value={form.total_slots}
          onChange={handleChange}
          placeholder="100"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Hotel Rating

        </label>

        <select
          name="hotel_rating"
          value={form.hotel_rating}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        >

          <option value="3">⭐⭐⭐ 3 Star</option>

          <option value="4">⭐⭐⭐⭐ 4 Star</option>

          <option value="5">⭐⭐⭐⭐⭐ 5 Star</option>

          <option value="Luxury">
            Luxury
          </option>

        </select>

      </div>

    </div>

  </div>  {/* ==========================
      FLIGHT INFORMATION
  ========================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 text-2xl font-black text-white">
      Flight Information
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Airline
        </label>

        <input
          name="flight_name"
          value={form.flight_name}
          onChange={handleChange}
          placeholder="Saudi Airlines"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Departure Airport
        </label>

        <input
          name="flight_from"
          value={form.flight_from}
          onChange={handleChange}
          placeholder="Nnamdi Azikiwe International Airport, Abuja"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Arrival Airport
        </label>

        <input
          name="flight_to"
          value={form.flight_to}
          onChange={handleChange}
          placeholder="King Abdulaziz International Airport, Jeddah"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Departure Date
        </label>

        <input
          type="date"
          name="departure_date"
          value={form.departure_date}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Return Date
        </label>

        <input
          type="date"
          name="return_date"
          value={form.return_date}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />
      </div>

    </div>

  </div>

  {/* ==========================
      HOTEL INFORMATION
  ========================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 text-2xl font-black text-white">
      Hotel Information
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Hotel Name
        </label>

        <input
          name="hotel_name"
          value={form.hotel_name}
          onChange={handleChange}
          placeholder="Swissôtel Makkah / Anwar Al Madinah Mövenpick"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Hotel Rating
        </label>

        <select
          name="hotel_rating"
          value={form.hotel_rating}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        >
          <option value="3">⭐⭐⭐ 3 Star</option>
          <option value="4">⭐⭐⭐⭐ 4 Star</option>
          <option value="5">⭐⭐⭐⭐⭐ 5 Star</option>
          <option value="Luxury">Luxury</option>
        </select>

      </div>

    </div>

  </div>

  {/* ==========================
      PACKAGE DESCRIPTION
  ========================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 text-2xl font-black text-white">
      Package Description
    </h2>

    <textarea
      rows={8}
      name="description"
      value={form.description}
      onChange={handleChange}
      placeholder="Describe everything included in this package, such as visa processing, accommodation, flights, meals, airport transfers, Ziyarah, guides, transport, luggage allowance, and any additional services..."
      className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-5 text-white"
    />

  </div>

  {/* ==========================
      ACTIONS
  ========================== */}

  <div className="flex justify-end">

    <button
      onClick={submit}
      disabled={loading}
      className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-60"
    >

      <Save size={20} />

      {loading
        ? "Saving..."
        : packageData
        ? "Update Package"
        : "Create Package"}

    </button>

  </div>

</div>
  );
}
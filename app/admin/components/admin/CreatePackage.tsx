"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function CreatePackage({ onCreated }: any) {
  const initialForm = {
    title: "",
    description: "",
    price: "",
    flight_name: "",
    flight_from: "",
    flight_to: "",
    departure_date: "",
    return_date: "",
    hotel_name: "",
    hotel_rating: "3",
    category: "standard",
    duration_days: "",
    total_slots: "",
    booked_slots: "0",
  };

  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 📸 UPLOAD
  const handleUpload = (files: FileList) => {
    const arr = Array.from(files);

    setImages(arr);

    const previewUrls = arr.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(previewUrls);
  };

  // ❌ REMOVE IMAGE
  const removeImage = (index: number) => {
    URL.revokeObjectURL(previews[index]);

    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // 🚀 CREATE PACKAGE
  const createPackage = async (e?: any) => {
  e?.preventDefault();

  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      alert("❌ Not authenticated");
      window.location.href = "/login";
      return;
    }

    // 🔥 SAFE DATA (NO MORE 422 EVER)
    const safeForm = {
      title: form.title?.trim() || "Untitled Package",
      description: form.description?.trim() || "No description",
      price: Number(form.price) || 0,

      flight_name: form.flight_name || "",
      flight_from: form.flight_from || "",
      flight_to: form.flight_to || "",

      departure_date: form.departure_date || "",
      return_date: form.return_date || "",

      hotel_name: form.hotel_name || "",
      hotel_rating: form.hotel_rating || "3",

      category: form.category || "standard",

      duration_days: Number(form.duration_days) || 0,
      total_slots: Number(form.total_slots) || 0,
      booked_slots: 0,
    };

    const formData = new FormData();

    // ✅ APPEND ALL FIELDS CLEANLY
    Object.entries(safeForm).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    // 📸 FILE
    if (images.length > 0) {
      formData.append("file", images[0]);
    }

    // 🔍 DEBUG (VERY IMPORTANT)
    console.log("🔥 FINAL FORM DATA:");
    for (let [k, v] of formData.entries()) {
      console.log(k, v);
    }

    // 🚀 REQUEST
    const res = await fetch(
  "http://127.0.0.1:8000/api/v1/admin/packages",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }
);

let data: any = {};

try {
  data = await res.json();
} catch (e) {
  console.warn("⚠️ Response is not JSON");
}

if (!res.ok) {
  console.error("🔥 BACKEND ERROR:", data);

  // 🔐 AUTH ERROR
  if (res.status === 401) {
    alert("Session expired. Login again.");
    localStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }

  // 🧠 VALIDATION ERROR (422)
  if (res.status === 422) {
    alert(
      data?.detail
        ? JSON.stringify(data.detail, null, 2)
        : "Validation error (422)"
    );
    return;
  }

  // ❌ OTHER ERRORS
  alert(data?.detail || "Request failed");
  return;
}

// ✅ SUCCESS
alert("✅ Package Created Successfully");

// 🔄 RESET FORM
setForm(initialForm);
setImages([]);
setPreviews([]);

// 🔄 REFRESH LIST
onCreated && onCreated();  // 🔄 RESET FORM
    setForm(initialForm);
    setImages([]);
    setPreviews([]);

    // 🔄 REFRESH LIST
    onCreated && onCreated();

  } catch (err: any) {
  console.log("🔥 FULL ERROR:", err);

  // 🔥 HANDLE FASTAPI VALIDATION ERRORS PROPERLY
  if (err?.detail && Array.isArray(err.detail)) {
    const messages = err.detail
      .map((e: any) => {
        const field = e.loc?.join(" → ") || "field";
        return `❌ ${field}: ${e.msg}`;
      })
      .join("\n");

    alert(messages);
  } else if (err?.detail) {
    // 🔥 NORMAL ERROR STRING
    alert(`❌ ${err.detail}`);
  } else {
    alert("❌ Something went wrong");
  }
}
finally {
  setLoading(false);
}
};
  return (
    <div className="bg-[#121826] p-6 rounded-2xl mb-8 border border-white/10 shadow-lg space-y-6">

      <h2 className="text-xl font-semibold text-yellow-400">
        Create Package
      </h2>

      {/* BASIC */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
  placeholder="Title"
  value={form.title}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, title: value }));
  }}
  className="input"
/>

<input
  type="number"
  placeholder="Price (₦)"
  value={form.price}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, price: value }));
  }}
  className="input"
/>
      </div>

      {/* DESCRIPTION */}
      <textarea
  placeholder="Description"
  value={form.description}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, description: value }));
  }}
  className="input"
/>
      {/* FLIGHT */}
      <div className="grid md:grid-cols-3 gap-4">
       <select
  value={form.flight_name}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, flight_name: value }));
  }}
  className="input"
>
          <option value="">Airline</option>
          <option>Saudi Airline</option>
          <option>Emirates</option>
          <option>Qatar Airways</option>
          <option>EgyptAir</option>
          <option>Air Peace</option>
        </select>

        <input
  placeholder="From"
  value={form.flight_from}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, flight_from: value }));
  }}
  className="input"
/>

<input
  placeholder="To"
  value={form.flight_to}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, flight_to: value }));
  }}
  className="input"
/>
      </div>

      {/* DATES */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
  type="date"
  value={form.departure_date}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, departure_date: value }));
  }}
  className="input"
/>

<input
  type="date"
  value={form.return_date}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, return_date: value }));
  }}
  className="input"
/>
      </div>

      {/* HOTEL */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
  placeholder="Hotel Name"
  value={form.hotel_name}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, hotel_name: value }));
  }}
  className="input"
/>

<select
  value={form.hotel_rating}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, hotel_rating: value }));
  }}
  className="input"
>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div className="flex gap-3">
        {["premium", "standard", "budget"].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() =>
              setForm({ ...form, category: cat })
            }
            className={`px-4 py-2 rounded-full ${
              form.category === cat
                ? "bg-yellow-500 text-black"
                : "bg-white/10"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* SLOTS + PROGRESS */}
<div className="space-y-3">

  <div className="grid md:grid-cols-3 gap-4">

    <input
  type="number"
  placeholder="Duration (days)"
  value={form.duration_days}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, duration_days: value }));
  }}
  className="input"
/>

<input
  type="number"
  placeholder="Total Slots"
  value={form.total_slots}
  onChange={(e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, total_slots: value }));
  }}
  className="input"
/>

    <input
      type="number"
      value={form.booked_slots || "0"}
      disabled
      className="input opacity-50"
    />

  </div>

  {/* 🔥 PROGRESS BAR */}
  <div className="mt-2">
    <div className="flex justify-between text-sm text-gray-400 mb-1">
      <span>🪑 Seats</span>
      <span>
        {form.booked_slots || 0} / {form.total_slots || 0}
      </span>
    </div>

    <div className="w-full bg-white/10 rounded-full h-2">
      <div
        className="bg-yellow-500 h-2 rounded-full transition-all"
        style={{
          width: `${
            form.total_slots
              ? (Number(form.booked_slots) /
                  Number(form.total_slots)) *
                100
              : 0
          }%`,
        }}
      />
    </div>
  </div>

</div>
      {/* IMAGE */}
      <div className="border-2 border-dashed border-yellow-400/30 p-4 rounded-xl">
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            e.target.files && handleUpload(e.target.files)
          }
        />

        <div className="grid grid-cols-3 gap-3 mt-3">
          {previews.map((p, i) => (
            <div key={i} className="relative">
              <img
                src={p}
                className="h-24 w-full object-cover rounded"
              />

              <button
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 bg-red-500 px-2 rounded text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
  type="button" // ✅ VERY IMPORTANT
  onClick={createPackage}
  disabled={loading}
  className="w-full bg-yellow-500 py-3 rounded-xl text-black font-bold"
>
  {loading ? "Creating..." : "Create Package 🚀"}
</button>
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          background: black;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
        }
        .input:focus {
          border-color: #facc15;
          outline: none;
        }
      `}</style>
    </div>
  );
}
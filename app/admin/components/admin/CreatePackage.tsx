"use client";

import { useState } from "react";

import {
  Upload,
  Plane,
  Hotel,
  CalendarDays,
  Clock3,
  Users,
  Star,
  Trash2,
  Sparkles,
} from "lucide-react";
import API from "@/lib/api";

export default function CreatePackage({
  onCreated,
}: any) {

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
    hotel_rating: "5",
    category: "premium",
    duration_days: "",
    total_slots: "",
    booked_slots: "0",
  };

  const [form, setForm] = useState(initialForm);

  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  // 🔥 IMAGE UPLOAD
  const handleUpload = (files: FileList) => {

    const arr = Array.from(files);

    setImages(arr);

    const previewUrls = arr.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(previewUrls);
  };

  // 🔥 REMOVE
  const removeImage = (index: number) => {

    URL.revokeObjectURL(previews[index]);

    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setPreviews((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // 🔥 CREATE PACKAGE
  const createPackage = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Not authenticated");
        return;
      }

      const safeForm = {
        title: form.title || "Untitled",
        description: form.description || "No description",
        price: Number(form.price) || 0,

        flight_name: form.flight_name || "",
        flight_from: form.flight_from || "",
        flight_to: form.flight_to || "",

        departure_date: form.departure_date || "",
        return_date: form.return_date || "",

        hotel_name: form.hotel_name || "",
        hotel_rating: form.hotel_rating || "5",

        category: form.category || "premium",

        duration_days: Number(form.duration_days) || 0,

        total_slots: Number(form.total_slots) || 0,

        booked_slots: 0,
      };

      const formData = new FormData();

      Object.entries(safeForm).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      if (images.length > 0) {
        formData.append("file", images[0]);
      }

     const res = await API.post("/admin/packages", formData, {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});

      const data = res.data;

      if (!res.status || res.status >= 400) {
        alert(data?.detail || "Creation failed");
        return;
      }

      alert("✅ Package Created");

      setForm(initialForm);

      setImages([]);
      setPreviews([]);

      if (onCreated) {
        onCreated(data);
      }

    } catch (err) {

      console.error(err);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#121826]/80 backdrop-blur-2xl shadow-2xl p-8">

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-black flex items-center justify-center shadow-lg">
              <Sparkles size={28} />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-yellow-400">
                Create Travel Package
              </h2>

              <p className="text-gray-400">
                Build premium Umrah & Hajj experiences
              </p>

            </div>

          </div>

        </div>

        {/* CATEGORY BADGE */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-4 h-fit">

          <p className="text-sm text-gray-400">
            Current Package Type
          </p>

          <h3 className="text-green-400 font-bold uppercase mt-1">
            {form.category}
          </h3>

        </div>

      </div>

      {/* FORM */}
      <div className="relative z-10 space-y-8">

        {/* BASIC */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="label">
              Package Title
            </label>

            <input
              placeholder="Premium Ramadan Umrah"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Price (₦)
            </label>

            <input
              type="number"
              placeholder="2500000"
              value={form.price}
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value,
                })
              }
              className="input"
            />
          </div>

        </div>

        {/* DESCRIPTION */}
        <div>

          <label className="label">
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Describe package..."
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="input"
          />

        </div>

        {/* FLIGHT */}
        <div className="grid md:grid-cols-3 gap-5">

          <div>
            <label className="label flex items-center gap-2">
              <Plane size={16} />
              Airline
            </label>

            <select
              value={form.flight_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  flight_name: e.target.value,
                })
              }
              className="input"
            >
              <option>Saudi Airline</option>
              <option>Qatar Airways</option>
              <option>Emirates</option>
              <option>EgyptAir</option>
              <option>Air Peace</option>
            </select>

          </div>

          <div>
            <label className="label">
              Flight From
            </label>

            <input
              placeholder="Kano"
              value={form.flight_from}
              onChange={(e) =>
                setForm({
                  ...form,
                  flight_from: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Flight To
            </label>

            <input
              placeholder="Madinah"
              value={form.flight_to}
              onChange={(e) =>
                setForm({
                  ...form,
                  flight_to: e.target.value,
                })
              }
              className="input"
            />
          </div>

        </div>

        {/* DATES */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="label flex items-center gap-2">
              <CalendarDays size={16} />
              Departure Date
            </label>

            <input
              type="date"
              value={form.departure_date}
              onChange={(e) =>
                setForm({
                  ...form,
                  departure_date: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Return Date
            </label>

            <input
              type="date"
              value={form.return_date}
              onChange={(e) =>
                setForm({
                  ...form,
                  return_date: e.target.value,
                })
              }
              className="input"
            />
          </div>

        </div>

        {/* HOTEL */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="label flex items-center gap-2">
              <Hotel size={16} />
              Hotel Name
            </label>

            <input
              placeholder="Swissotel Makkah"
              value={form.hotel_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  hotel_name: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <div>
            <label className="label flex items-center gap-2">
              <Star size={16} />
              Hotel Rating
            </label>

            <select
              value={form.hotel_rating}
              onChange={(e) =>
                setForm({
                  ...form,
                  hotel_rating: e.target.value,
                })
              }
              className="input"
            >
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </select>

          </div>

        </div>

        {/* CATEGORY */}
        <div>

          <label className="label mb-4 block">
            Package Category
          </label>

          <div className="flex flex-wrap gap-4">

            {["premium", "standard", "budget"].map((cat) => (

              <button
                key={cat}
                onClick={() =>
                  setForm({
                    ...form,
                    category: cat,
                  })
                }
                type="button"
                className={`px-6 py-3 rounded-2xl font-semibold uppercase transition-all duration-300 ${
                  form.category === cat
                    ? "bg-yellow-500 text-black shadow-lg"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

        </div>

        {/* SLOT */}
        <div className="grid md:grid-cols-3 gap-5">

          <div>
            <label className="label flex items-center gap-2">
              <Clock3 size={16} />
              Duration
            </label>

            <input
              type="number"
              placeholder="14"
              value={form.duration_days}
              onChange={(e) =>
                setForm({
                  ...form,
                  duration_days: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <div>
            <label className="label flex items-center gap-2">
              <Users size={16} />
              Total Slots
            </label>

            <input
              type="number"
              placeholder="100"
              value={form.total_slots}
              onChange={(e) =>
                setForm({
                  ...form,
                  total_slots: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Booked Slots
            </label>

            <input
              value={form.booked_slots}
              disabled
              className="input opacity-50"
            />
          </div>

        </div>

        {/* IMAGE */}
        <div>

          <label className="label mb-4 block">
            Upload Package Image
          </label>

          <div className="border-2 border-dashed border-yellow-500/20 rounded-3xl p-8 bg-black/20">

            <div className="flex flex-col items-center text-center">

              <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center mb-5">
                <Upload className="text-yellow-400" size={34} />
              </div>

              <h3 className="text-xl font-bold mb-2">
                Upload Images
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                PNG, JPG, WEBP supported
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files &&
                  handleUpload(e.target.files)
                }
              />

            </div>

            {/* PREVIEW */}
            {previews.length > 0 && (

              <div className="grid md:grid-cols-3 gap-5 mt-8">

                {previews.map((p, i) => (

                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-2xl"
                  >

                    <img
                      src={p}
                      className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    <button
                      onClick={() => removeImage(i)}
                      className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 transition p-2 rounded-xl"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

        {/* BUTTON */}
        <button
          type="button"
          onClick={createPackage}
          disabled={loading}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-[1.01] transition-all duration-300 py-5 rounded-3xl text-black font-bold text-lg shadow-2xl"
        >
          {loading
            ? "Creating Package..."
            : "Create Premium Package 🚀"}
        </button>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          color: white;
          transition: 0.3s;
        }

        .input:focus {
          outline: none;
          border-color: #facc15;
          box-shadow: 0 0 0 4px rgba(250,204,21,0.1);
        }

        .label {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 10px;
        }
      `}</style>

    </div>
  );
}
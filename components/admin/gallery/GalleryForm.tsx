"use client";

import { useMemo, useState } from "react";

import {
  Save,
  ImagePlus,
  Star,
  Type,
} from "lucide-react";

interface Props {
  image?: any;
}

export default function GalleryForm({
  image,
}: Props) {

  const [form, setForm] = useState({
    title: image?.title || "",
    category: image?.category || "General",
    featured: image?.featured || false,
    active: image?.active ?? true,
  });

  const [file, setFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState(image?.image_url || "");

  const imagePreview = useMemo(() => {

    if (file) {
      return URL.createObjectURL(file);
    }

    return preview;

  }, [file, preview]);

  return (

    <form className="space-y-8">

      {/* ========================================= */}
      {/* Gallery Information */}
      {/* ========================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-black text-white">

            Gallery Information

          </h2>

          <p className="mt-2 text-slate-400">

            Upload and organize gallery images.

          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-slate-400">

              Image Title

            </label>

            <div className="relative">

              <Type
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                placeholder="Enter image title"
                className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-12 pr-4 text-white outline-none focus:border-yellow-400"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">

              Category

            </label>

            <select
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white outline-none focus:border-yellow-400"
            >

              <option value="General">
                General
              </option>

              <option value="Hajj">
                Hajj
              </option>

              <option value="Umrah">
                Umrah
              </option>

              <option value="Visa">
                Visa
              </option>

              <option value="Tours">
                Tours
              </option>

              <option value="Hotels">
                Hotels
              </option>

              <option value="Flights">
                Flights
              </option>

              <option value="Events">
                Events
              </option>

              <option value="Office">
                Office
              </option>

            </select>

          </div>

        </div>

      </section>

      {/* ========================================= */}
      {/* Upload Image */}
      {/* ========================================= */}

      <section className="rounded-3xl border border-dashed border-yellow-500/40 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-black text-white">

            Upload Image

          </h2>

          <p className="mt-2 text-slate-400">

            Upload a JPG, PNG or WEBP image.

          </p>

        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-yellow-500/30 bg-[#0B1220] p-10 transition hover:border-yellow-400">

          {imagePreview ? (

            <img
              src={imagePreview}
              alt="Preview"
              className="mb-6 h-72 w-full rounded-2xl object-cover"
            />

          ) : (

            <ImagePlus
              size={70}
              className="mb-6 text-yellow-400"
            />

          )}

          <h3 className="text-xl font-bold text-white">

            Click to Upload

          </h3>

          <p className="mt-2 text-slate-400">

            PNG • JPG • WEBP

          </p>

          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) => {

              if (!e.target.files?.length)
                return;

              const selected =
                e.target.files[0];

              setFile(selected);

              setPreview(
                URL.createObjectURL(selected)
              );

            }}
          />

        </label>

      </section>      {/* ========================================= */}
      {/* Settings */}
      {/* ========================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-black text-white">
            Gallery Settings
          </h2>

          <p className="mt-2 text-slate-400">
            Configure how this gallery image appears on the website.
          </p>

        </div>

        <div className="space-y-5">

          {/* Featured */}

          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1220] p-5">

            <div className="flex items-center gap-3">

              <Star
                size={20}
                className="text-yellow-400"
              />

              <div>

                <h3 className="font-semibold text-white">
                  Featured Image
                </h3>

                <p className="text-sm text-slate-400">
                  Display on homepage gallery.
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={form.featured}
              onChange={() =>
                setForm({
                  ...form,
                  featured: !form.featured,
                })
              }
            />

          </label>

          {/* Active */}

          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1220] p-5">

            <div>

              <h3 className="font-semibold text-white">
                Active
              </h3>

              <p className="text-sm text-slate-400">
                Show this image on the public website.
              </p>

            </div>

            <input
              type="checkbox"
              checked={form.active}
              onChange={() =>
                setForm({
                  ...form,
                  active: !form.active,
                })
              }
            />

          </label>

        </div>

      </section>

      {/* ========================================= */}
      {/* Save */}
      {/* ========================================= */}

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={loading}
          onClick={async (e) => {

            e.preventDefault();

            if (!form.title.trim()) {
              alert("Title is required.");
              return;
            }

            if (!image && !file) {
              alert("Please select an image.");
              return;
            }

            try {

              setLoading(true);

              const formData = new FormData();

              formData.append(
                "title",
                form.title
              );

              formData.append(
                "category",
                form.category
              );

              formData.append(
                "featured",
                String(form.featured)
              );

              formData.append(
                "active",
                String(form.active)
              );

              if (file) {
                formData.append(
                  "file",
                  file
                );
              }

              const token =
                localStorage.getItem("token");

              const url = image
                ? `${process.env.NEXT_PUBLIC_API_URL}/gallery/${image.id}`
                : `${process.env.NEXT_PUBLIC_API_URL}/gallery`;

              const method = image
                ? "PUT"
                : "POST";

              const response = await fetch(
                url,
                {
                  method,
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                  body: formData,
                }
              );

              const result =
                await response.json();

              if (!response.ok) {
                throw new Error(
                  result.detail ||
                  "Something went wrong."
                );
              }

              alert(result.message);

            } catch (error: any) {

              alert(
                error.message ||
                "Failed to save gallery image."
              );

            } finally {

              setLoading(false);

            }

          }}
          className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
        >

          <Save size={20} />

          {loading
            ? "Saving..."
            : image
            ? "Update Gallery"
            : "Save Gallery Image"}

        </button>

      </div>

    </form>

  );

}
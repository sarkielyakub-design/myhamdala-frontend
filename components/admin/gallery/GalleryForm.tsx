"use client";

import { useState } from "react";

import {
  Save,
  ImagePlus,
  FolderOpen,
  Tag,
  Star,
  FileText,
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
    description: image?.description || "",
    category: image?.category || "",
    alt_text: image?.alt_text || "",
    tags: image?.tags || "",
    featured: image?.featured || false,
  });

  return (

    <form className="space-y-8">

      {/* Basic Information */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-black text-white">
            Gallery Information
          </h2>

          <p className="mt-2 text-slate-400">
            Add information about this gallery image.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Title
            </label>

            <div className="relative">

              <Type
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={form.title}
                onChange={(e)=>
                  setForm({
                    ...form,
                    title:e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-12 pr-4 text-white"
                placeholder="Image title"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Category
            </label>

            <select
              value={form.category}
              onChange={(e)=>
                setForm({
                  ...form,
                  category:e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            >

              <option value="">
                Select Category
              </option>

              <option>
                Hajj
              </option>

              <option>
                Umrah
              </option>

              <option>
                Tours
              </option>

              <option>
                Events
              </option>

              <option>
                Office
              </option>

              <option>
                Customers
              </option>

            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm text-slate-400">
            Description
          </label>

          <textarea
            rows={5}
            value={form.description}
            onChange={(e)=>
              setForm({
                ...form,
                description:e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            placeholder="Describe this image..."
          />

        </div>

      </section>

      {/* Upload */}

      <section className="rounded-3xl border-2 border-dashed border-yellow-500/30 bg-[#111827] p-12 text-center">

        <ImagePlus
          size={60}
          className="mx-auto text-yellow-400"
        />

        <h2 className="mt-6 text-2xl font-bold text-white">
          Upload Image
        </h2>

        <p className="mt-3 text-slate-400">
          Drag & drop or choose an image.
        </p>

        <input
          type="file"
          className="mt-8"
        />

      </section>

      {/* SEO */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <FileText className="text-green-400"/>

          <h2 className="text-2xl font-black text-white">
            SEO Information
          </h2>

        </div>

        <div className="space-y-6">

          <input
            value={form.alt_text}
            onChange={(e)=>
              setForm({
                ...form,
                alt_text:e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            placeholder="Alt Text"
          />

          <input
            value={form.tags}
            onChange={(e)=>
              setForm({
                ...form,
                tags:e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            placeholder="Tags (comma separated)"
          />

        </div>

      </section>

      {/* Featured */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <label className="flex items-center justify-between rounded-2xl bg-[#0B1220] p-5">

          <div className="flex items-center gap-3">

            <Star className="text-yellow-400"/>

            <span className="text-white">
              Featured Image
            </span>

          </div>

          <input
            type="checkbox"
            checked={form.featured}
            onChange={()=>
              setForm({
                ...form,
                featured:!form.featured,
              })
            }
          />

        </label>

      </section>

      {/* Save */}

      <button
        className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-black hover:bg-yellow-300"
      >

        <Save size={20}/>

        Save Gallery Image

      </button>

    </form>

  );

}
"use client";

import { useState } from "react";

import {
  Save,
  ImagePlus,
  Link2,
  Type,
  FileText,
  Video,
  Eye,
} from "lucide-react";

interface Props {
  hero?: any;
}

export default function HeroForm({
  hero,
}: Props) {

  const [form, setForm] = useState({
    title: hero?.title || "",
    subtitle: hero?.subtitle || "",
    button_text: hero?.button_text || "",
    button_link: hero?.button_link || "",
    secondary_button_text:
      hero?.secondary_button_text || "",
    secondary_button_link:
      hero?.secondary_button_link || "",
    video_url: hero?.video_url || "",
    active: hero?.is_active ?? true,
  });

  return (

    <form className="space-y-8">

      {/* Hero Text */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Type className="text-yellow-400" />

          <h2 className="text-2xl font-black text-white">
            Hero Content
          </h2>

        </div>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Main Title
            </label>

            <input
              value={form.title}
              onChange={(e)=>
                setForm({
                  ...form,
                  title:e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Subtitle
            </label>

            <textarea
              rows={5}
              value={form.subtitle}
              onChange={(e)=>
                setForm({
                  ...form,
                  subtitle:e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            />

          </div>

        </div>

      </section>

      {/* Buttons */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Link2 className="text-green-400" />

          <h2 className="text-2xl font-black text-white">
            Buttons
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <input
            placeholder="Primary Button Text"
            value={form.button_text}
            onChange={(e)=>
              setForm({
                ...form,
                button_text:e.target.value,
              })
            }
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Primary Button Link"
            value={form.button_link}
            onChange={(e)=>
              setForm({
                ...form,
                button_link:e.target.value,
              })
            }
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Secondary Button Text"
            value={form.secondary_button_text}
            onChange={(e)=>
              setForm({
                ...form,
                secondary_button_text:e.target.value,
              })
            }
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

          <input
            placeholder="Secondary Button Link"
            value={form.secondary_button_link}
            onChange={(e)=>
              setForm({
                ...form,
                secondary_button_link:e.target.value,
              })
            }
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
          />

        </div>

      </section>

      {/* Background */}

      <section className="rounded-3xl border border-dashed border-yellow-500/30 bg-[#111827] p-10 text-center">

        <ImagePlus
          size={60}
          className="mx-auto text-yellow-400"
        />

        <h2 className="mt-6 text-2xl font-bold text-white">
          Hero Background
        </h2>

        <p className="mt-2 text-slate-400">
          Upload homepage hero image.
        </p>

        <input
          type="file"
          className="mt-8"
        />

      </section>

      {/* Video */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Video className="text-red-400" />

          <h2 className="text-2xl font-black text-white">
            Hero Video
          </h2>

        </div>

        <input
          placeholder="YouTube URL"
          value={form.video_url}
          onChange={(e)=>
            setForm({
              ...form,
              video_url:e.target.value,
            })
          }
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </section>

      {/* Status */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <label className="flex items-center justify-between rounded-2xl bg-[#0B1220] p-5">

          <div className="flex items-center gap-3">

            <Eye className="text-green-400"/>

            <span className="text-white">
              Hero Active
            </span>

          </div>

          <input
            type="checkbox"
            checked={form.active}
            onChange={()=>
              setForm({
                ...form,
                active:!form.active,
              })
            }
          />

        </label>

      </section>

      {/* Save */}

      <button
        className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-black"
      >

        <Save size={20}/>

        Save Hero

      </button>

    </form>

  );

}
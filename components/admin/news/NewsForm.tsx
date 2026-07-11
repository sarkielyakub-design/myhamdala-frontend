"use client";

import { useState } from "react";

import {
  Save,
  Send,
  ImagePlus,
  Calendar,
  Globe,
  Star,
  Tag,
  FileText,
  User,
} from "lucide-react";
import NewsEditor from "./NewsEditor";

interface Props {
  article?: any;
}

export default function NewsForm({
  article,
}: Props) {
  const [featured, setFeatured] = useState(
    article?.featured ?? false
  );
  return (
    <form className="space-y-8">

      {/* =========================
          BASIC INFORMATION
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-black text-white">
            Article Information
          </h2>

          <p className="mt-2 text-slate-400">
            Basic details about this news article.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Title
            </label>
<input
  defaultValue={article?.title ?? ""}
  className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
  placeholder="Saudi Arabia Announces New Umrah Rules"
/>
          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Slug
            </label>

  <input
  defaultValue={article?.slug ?? ""}
  className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
  placeholder="saudi-arabia-announces-new-umrah-rules"
/>
          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm text-slate-400">
            Short Excerpt
          </label>

          <textarea
  rows={4}
  defaultValue={article?.excerpt ?? ""}
  className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
  placeholder="Brief summary shown on the News page..."
/>

        </div>

      </section>

      {/* =========================
          CONTENT
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <FileText className="text-yellow-400" />

          <h2 className="text-2xl font-black text-white">
            Article Content
          </h2>

        </div>
<textarea
  rows={18}
  defaultValue={article?.content ?? ""}
  className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-6 text-white"
  placeholder="Write the full article here..."
/>

      </section>

      {/* =========================
          CATEGORY
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="grid gap-6 lg:grid-cols-3">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Category
            </label>

            <select className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white">

              <option>Travel News</option>
              <option>Hajj</option>
              <option>Umrah</option>
              <option>Visa</option>
              <option>Promotion</option>
              <option>Company News</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Tags
            </label>

            <input
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
              placeholder="Umrah, Saudi Arabia, Travel"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Author
            </label>

            <select className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white">

              <option>Administrator</option>
              <option>Editor</option>

            </select>

          </div>

        </div>

      </section>

      {/* =========================
          FEATURED IMAGE
      ========================== */}

      <section className="rounded-3xl border border-dashed border-yellow-500/30 bg-[#111827] p-10 text-center">

        <ImagePlus
          className="mx-auto text-yellow-400"
          size={60}
        />

        <h2 className="mt-6 text-2xl font-bold text-white">
          Featured Image
        </h2>

        <p className="mt-3 text-slate-400">
          Upload the main image for this article.
        </p>

        <input
          type="file"
          className="mt-8"
        />

      </section>

      {/* =========================
          SEO
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Globe className="text-green-400" />

          <h2 className="text-2xl font-black text-white">
            SEO Settings
          </h2>

        </div>

        <div className="space-y-6">

          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            placeholder="SEO Title"
          />

          <NewsEditor />

          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            placeholder="SEO Keywords"
          />

        </div>

      </section>

      {/* =========================
          SETTINGS
      ========================== */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-2xl font-black text-white">
          Publishing Settings
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          <label className="flex items-center justify-between rounded-2xl bg-[#0B1220] p-5">

            <div className="flex items-center gap-3">

              <Star className="text-yellow-400" />

              <span className="text-white">
                Featured Article
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

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Publish Date
            </label>

            <input
              type="datetime-local"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
            />

          </div>

        </div>

      </section>

      {/* =========================
          ACTIONS
      ========================== */}

      <div className="flex flex-wrap justify-end gap-4">

        <button
          type="button"
          className="flex items-center gap-2 rounded-2xl border border-white/10 px-8 py-4 text-white"
        >

          <Save size={20} />

          Save Draft

        </button>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-black hover:bg-yellow-300"
        >

          <Send size={20} />

          Publish Article

        </button>

      </div>

    </form>
  );
}
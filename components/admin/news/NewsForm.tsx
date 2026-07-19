"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Save,
  Send,
  ImagePlus,
  Tag,
  FileText,
} from "lucide-react";

import NewsEditor from "./NewsEditor";

interface Props {
  article?: any;
}

export default function NewsForm({
  article,
}: Props) {
  const [title, setTitle] = useState(
    article?.title ?? ""
  );

  const [slug, setSlug] = useState(
    article?.slug ?? ""
  );

  const [excerpt, setExcerpt] = useState(
    article?.excerpt ?? ""
  );

  const [category, setCategory] = useState(
    article?.category ?? "Travel News"
  );

  const [tags, setTags] = useState(
    article?.tags ?? ""
  );

  const [featured, setFeatured] = useState(
    article?.featured ?? false
  );

  const [image, setImage] =
    useState<File | null>(null);

  const [preview, setPreview] = useState(
    article?.image ?? ""
  );

  // ==========================
  // AUTO SLUG
  // ==========================

  useEffect(() => {
    if (article?.slug) return;

    const generated = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");

    setSlug(generated);

  }, [title, article]);

  // ==========================
  // IMAGE PREVIEW
  // ==========================

  const imagePreview = useMemo(() => {

    if (image) {
      return URL.createObjectURL(image);
    }

    return preview;

  }, [image, preview]);

  return (

    <form className="space-y-8">

      {/* ================================================= */}
      {/* PAGE HEADER                                       */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-black text-white">

              {article
                ? "Edit News Article"
                : "Create News Article"}

            </h1>

            <p className="mt-2 text-slate-400">

              Publish travel updates, visa announcements,
              Hajj, Umrah and company news.

            </p>

          </div>

          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3">

            <span className="font-semibold text-green-400">

              {article
                ? "Editing Existing Article"
                : "Creating New Article"}

            </span>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* ARTICLE INFORMATION                              */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <FileText
            className="text-yellow-400"
            size={26}
          />

          <div>

            <h2 className="text-2xl font-bold text-white">

              Article Information

            </h2>

            <p className="text-slate-400">

              Basic information about this article.

            </p>

          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Article Title

            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Saudi Arabia Announces New Umrah Rules"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              URL Slug

            </label>

            <input
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm font-medium text-slate-300">

            Short Summary

          </label>

          <textarea
            rows={5}
            value={excerpt}
            onChange={(e) =>
              setExcerpt(e.target.value)
            }
            placeholder="Write a short summary for this article..."
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
          />

        </div>

      </section>

      {/* ================================================= */}
      {/* CATEGORY & TAGS                                  */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <Tag
            className="text-yellow-400"
            size={24}
          />

          <div>

            <h2 className="text-2xl font-bold text-white">

              Category & Tags

            </h2>

            <p className="text-slate-400">

              Organize your article.

            </p>

          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Category

            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white"
            >

              <option>Travel News</option>
              <option>Hajj</option>
              <option>Umrah</option>
              <option>Visa</option>
              <option>Promotion</option>
              <option>Company News</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Tags

            </label>

            <input
              value={tags}
              onChange={(e) =>
                setTags(e.target.value)
              }
              placeholder="Hajj, Saudi Arabia, Visa"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
            />

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FEATURED IMAGE                                   */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-bold text-white">

            Featured Image

          </h2>

          <p className="mt-2 text-slate-400">

            Upload the image that will appear on the news page.

          </p>

        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-yellow-500/40 bg-[#0B1220] p-10 transition hover:border-yellow-400">

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

            Click to Upload Image

          </h3>

          <p className="mt-2 text-slate-400">

            PNG, JPG or WEBP • Max 5MB

          </p>

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.length) {
                setImage(e.target.files[0]);
              }
            }}
          />

        </label>

      </section>      {/* ================================================= */}
      {/* ARTICLE CONTENT                                  */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <FileText
            size={26}
            className="text-yellow-400"
          />

          <div>

            <h2 className="text-2xl font-bold text-white">

              Article Content

            </h2>

            <p className="text-slate-400">

              Write the complete news article.

            </p>

          </div>

        </div>

        <NewsEditor />

      </section>

      {/* ================================================= */}
      {/* PUBLISHING                                       */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-bold text-white">

            Publishing

          </h2>

          <p className="mt-2 text-slate-400">

            Configure how this article will appear.

          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Status

            </label>

            <select className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white">

              <option value="draft">
                Draft
              </option>

              <option value="published">
                Published
              </option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Publish Date

            </label>

            <input
              type="datetime-local"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Featured

            </label>

            <label className="flex h-[58px] items-center justify-between rounded-2xl border border-white/10 bg-[#0B1220] px-5">

              <span className="text-white">

                Show on Homepage

              </span>

              <input
                type="checkbox"
                checked={featured}
                onChange={() =>
                  setFeatured(!featured)
                }
              />

            </label>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* LIVE PREVIEW                                     */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">

          Live Preview

        </h2>

        <div className="overflow-hidden rounded-3xl bg-[#0B1220]">

          {imagePreview ? (

            <img
              src={imagePreview}
              className="h-72 w-full object-cover"
              alt=""
            />

          ) : (

            <div className="flex h-72 items-center justify-center text-slate-500">

              No Image Selected

            </div>

          )}

          <div className="p-8">

            <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black">

              {category}

            </span>

            <h2 className="mt-5 text-3xl font-black text-white">

              {title || "Article Title"}

            </h2>

            <p className="mt-4 text-slate-400">

              {excerpt ||
                "Your article summary will appear here..."}

            </p>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* ACTION BUTTONS                                   */}
      {/* ================================================= */}

      <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-end gap-4 rounded-t-3xl border-t border-white/10 bg-[#040816]/95 px-6 py-5 backdrop-blur">

        <button
          type="button"
          className="flex items-center gap-2 rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
        >

          <Save size={20} />

          Save Draft

        </button>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-black transition hover:bg-yellow-300"
        >

          <Send size={20} />

          Publish Article

        </button>

      </div>

    </form>

  );
}
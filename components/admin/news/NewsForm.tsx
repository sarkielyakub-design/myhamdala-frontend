"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FileText,
  ImagePlus,
  Loader2,
  Save,
  Send,
} from "lucide-react";

import NewsEditor from "./NewsEditor";

import {
  createNews,
  updateNews,
} from "@/lib/api";

interface NewsFormProps {
  article?: any;
}

export default function NewsForm({
  article,
}: NewsFormProps) {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [title, setTitle] =
    useState(article?.title ?? "");

  const [summary, setSummary] =
    useState(article?.summary ?? "");

  const [content, setContent] =
    useState(article?.content ?? "");

  const [category, setCategory] =
    useState(article?.category ?? "General");

  const [featured, setFeatured] =
    useState(article?.featured ?? false);

  const [published, setPublished] =
    useState(article?.published ?? true);

  const [image, setImage] =
    useState<File | null>(null);

  const [preview] =
    useState(article?.image_url ?? "");

  const imagePreview = useMemo(() => {

    if (image) {
      return URL.createObjectURL(image);
    }

    return preview;

  }, [image, preview]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required.");
      return;
    }

    if (!content.trim()) {
      alert("Content is required.");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "summary",
        summary
      );

      formData.append(
        "content",
        content
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "featured",
        String(featured)
      );

      formData.append(
        "published",
        String(published)
      );

      if (image) {
        formData.append(
          "file",
          image
        );
      }

      if (article?.id) {

        await updateNews(
          article.id,
          formData
        );

      } else {

        await createNews(
          formData
        );

      }

      router.push("/admin/news");

      router.refresh();

    } catch (error) {

      console.error(error);

      alert("Failed to save news article.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >      {/* ================================================= */}
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
              Hajj, Umrah, promotions and company news.

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

              Enter the basic details for this news article.

            </p>

          </div>

        </div>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Article Title

            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Enter article title..."
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">

              Summary

            </label>

            <textarea
              rows={5}
              value={summary}
              onChange={(e) =>
                setSummary(e.target.value)
              }
              placeholder="Write a short summary..."
              className="w-full rounded-2xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition focus:border-yellow-400"
            />

          </div>

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

              <option value="General">
                General
              </option>

              <option value="Travel News">
                Travel News
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

              <option value="Promotion">
                Promotion
              </option>

              <option value="Announcement">
                Announcement
              </option>

            </select>

          </div>

        </div>

      </section>
            {/* ================================================= */}
      {/* FEATURED IMAGE                                   */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8 flex items-center gap-3">

          <ImagePlus
            size={26}
            className="text-yellow-400"
          />

          <div>

            <h2 className="text-2xl font-bold text-white">

              Featured Image

            </h2>

            <p className="text-slate-400">

              Upload the image that will appear with this news article.

            </p>

          </div>

        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-yellow-500/40 bg-[#0B1220] p-10 transition hover:border-yellow-400">

          {imagePreview ? (

            <img
              src={imagePreview}
              alt="Preview"
              className="mb-6 h-80 w-full rounded-2xl object-cover"
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

            PNG, JPG, JPEG or WEBP

          </p>

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {

              if (!e.target.files?.length) return;

              setImage(
                e.target.files[0]
              );

            }}
          />

        </label>

      </section>

      {/* ================================================= */}
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

       <NewsEditor
    value={content}
    onChange={setContent}
/>
      </section>

      {/* ================================================= */}
      {/* PUBLISHING OPTIONS                               */}
      {/* ================================================= */}

      <section className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-bold text-white">

            Publishing Options

          </h2>

          <p className="mt-2 text-slate-400">

            Configure how this article will be published.

          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1220] p-5">

            <span className="text-white">

              Publish Article

            </span>

            <input
              type="checkbox"
              checked={published}
              onChange={() =>
                setPublished(!published)
              }
            />

          </label>

          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1220] p-5">

            <span className="text-white">

              Featured Article

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

      </section>      {/* ================================================= */}
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
              alt={title}
              className="h-80 w-full object-cover"
            />

          ) : (

            <div className="flex h-80 items-center justify-center text-slate-500">

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

            <p className="mt-4 whitespace-pre-line text-slate-400">

              {summary || "Article summary will appear here..."}

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
          onClick={() => router.back()}
          disabled={loading}
          className="flex items-center gap-2 rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/10 disabled:opacity-50"
        >

          <Save size={20} />

          Cancel

        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
        >

          {loading ? (

            <>
              <Loader2
                size={20}
                className="animate-spin"
              />

              Saving...

            </>

          ) : (

            <>
              <Send size={20} />

              {article
                ? "Update Article"
                : "Publish Article"}

            </>

          )}

        </button>

      </div>

    </form>

  );

}
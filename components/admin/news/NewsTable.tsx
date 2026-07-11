"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
  Star,
  Calendar,
  User,
} from "lucide-react";

interface Props {
  news: any[];
}

export default function NewsTable({
  news,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            News Articles
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Manage all published and draft articles.
          </p>

        </div>

        <span className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black">
          {news.length} Articles
        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">Article</th>

              <th className="px-6 py-4">Category</th>

              <th className="px-6 py-4">Author</th>

              <th className="px-6 py-4">Views</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Published</th>

              <th className="px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {news.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="py-20 text-center text-slate-500"
                >
                  No news articles available.
                </td>

              </tr>

            ) : (

              news.map((article: any) => (

                <tr
                  key={article.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  {/* Article */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="relative h-20 w-28 overflow-hidden rounded-2xl">

                        <Image
                          src={
                            article.featured_image ||
                            "/images/news-placeholder.jpg"
                          }
                          alt={article.title}
                          fill
                          className="object-cover"
                        />

                      </div>

                      <div>

                        <h3 className="font-bold text-white">

                          {article.title}

                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm text-slate-400">

                          {article.excerpt}

                        </p>

                        {article.featured && (

                          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">

                            <Star size={12} />

                            Featured

                          </span>

                        )}

                      </div>

                    </div>

                  </td>

                  {/* Category */}

                  <td className="px-6 py-5">

                    <span className="rounded-full bg-blue-500/20 px-3 py-2 text-sm text-blue-400">

                      {article.category || "General"}

                    </span>

                  </td>

                  {/* Author */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <User
                        size={16}
                        className="text-yellow-400"
                      />

                      {article.author || "Administrator"}

                    </div>

                  </td>

                  {/* Views */}

                  <td className="px-6 py-5">

                    <span className="font-semibold text-green-400">

                      {Number(
                        article.views || 0
                      ).toLocaleString()}

                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${
                        article.status === "published"
                          ? "bg-green-500/20 text-green-400"
                          : article.status === "draft"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >

                      {article.status}

                    </span>

                  </td>

                  {/* Published */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <Calendar
                        size={16}
                        className="text-purple-400"
                      />

                      {article.created_at
                        ? new Date(
                            article.created_at
                          ).toLocaleDateString()
                        : "--"}

                    </div>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex gap-2">

                      <Link
                        href={`/news/${article.slug}`}
                        target="_blank"
                        className="rounded-xl bg-blue-500/20 p-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                      >

                        <Eye size={18} />

                      </Link>

                      <Link
                        href={`/admin/news/edit/${article.id}`}
                        className="rounded-xl bg-yellow-500/20 p-3 text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                      >

                        <Pencil size={18} />

                      </Link>

                      <button
                        className="rounded-xl bg-red-500/20 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                      >

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
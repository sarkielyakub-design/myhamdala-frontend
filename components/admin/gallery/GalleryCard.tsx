"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
  Copy,
  Star,
  Calendar,
  Folder,
} from "lucide-react";

interface Props {
  image: any;
}

export default function GalleryCard({
  image,
}: Props) {

  return (

    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition hover:border-yellow-400">

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={
            image.image ||
            image.image_url ||
            "/images/gallery-placeholder.jpg"
          }
          alt={image.title || "Gallery"}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {image.featured && (

          <div className="absolute right-3 top-3 rounded-full bg-yellow-400 p-2">

            <Star
              size={16}
              className="text-black"
            />

          </div>

        )}

      </div>

      {/* Content */}

      <div className="space-y-4 p-5">

        <div>

          <h3 className="truncate text-lg font-bold text-white">

            {image.title || "Untitled"}

          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-slate-400">

            {image.description || "No description"}

          </p>

        </div>

        {/* Category */}

        <div className="flex items-center gap-2">

          <Folder
            size={16}
            className="text-yellow-400"
          />

          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">

            {image.category || "General"}

          </span>

        </div>

        {/* Date */}

        <div className="flex items-center gap-2 text-sm text-slate-400">

          <Calendar
            size={15}
            className="text-purple-400"
          />

          {image.created_at
            ? new Date(
                image.created_at
              ).toLocaleDateString()
            : "--"}

        </div>

        {/* Actions */}

        <div className="flex justify-between pt-3">

          <Link
            href={`/gallery/${image.id}`}
            target="_blank"
            className="rounded-xl bg-blue-500/20 p-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
          >
            <Eye size={18} />
          </Link>

          <Link
            href={`/admin/gallery/edit/${image.id}`}
            className="rounded-xl bg-yellow-500/20 p-3 text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
          >
            <Pencil size={18} />
          </Link>

          <button
            className="rounded-xl bg-green-500/20 p-3 text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            <Copy size={18} />
          </button>

          <button
            className="rounded-xl bg-red-500/20 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>

  );

}
import Link from "next/link";

import {
  Images,
  Plus,
  ImageIcon,
  FolderOpen,
} from "lucide-react";

export default function GalleryHero() {

  return (

    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B1220] via-[#111827] to-[#1E293B] p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">

            <Images
              size={38}
              className="text-black"
            />

          </div>

          <h1 className="text-5xl font-black text-white">
            Gallery Management
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Upload and organize photos from Hajj, Umrah, tours,
            company events and customer experiences.
          </p>

        </div>

        <Link
          href="/admin/gallery/create"
          className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
        >

          <Plus size={20} />

          Upload Images

        </Link>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <ImageIcon className="text-blue-400" />

          <h2 className="mt-4 text-4xl font-black text-white">
            Photos
          </h2>

          <p className="mt-2 text-slate-400">
            All uploaded gallery images.
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <FolderOpen className="text-green-400" />

          <h2 className="mt-4 text-4xl font-black text-white">
            Categories
          </h2>

          <p className="mt-2 text-slate-400">
            Organize images into albums.
          </p>

        </div>

      </div>

    </section>

  );

}
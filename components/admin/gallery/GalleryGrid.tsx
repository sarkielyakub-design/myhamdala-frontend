"use client";

import GalleryCard from "./GalleryCard";

interface Props {
  gallery: any[];
}

export default function GalleryGrid({
  gallery,
}: Props) {

  if (gallery.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-[#111827] py-24 text-center">

        <h2 className="text-3xl font-black text-white">
          No Images Found
        </h2>

        <p className="mt-3 text-slate-400">
          Upload your first gallery image to get started.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {gallery.map((item: any) => (

        <GalleryCard
          key={item.id}
          image={item}
        />

      ))}

    </div>
  );
}
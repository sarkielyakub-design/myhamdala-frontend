"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Calendar,
  Images,
  ZoomIn,
} from "lucide-react";

import GalleryLightbox from "./GalleryLightbox";

interface Props {
  image: any;
}

export default function GalleryCard({
  image,
}: Props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="
          group
          cursor-pointer
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-xl
        "
      >

        <div className="relative h-80 overflow-hidden">

          <Image
            src={image.image_url}
            alt={image.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-transparent
              to-transparent
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Zoom */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
          >

            <div
              className="
                rounded-full
                bg-white
                p-4
              "
            >

              <ZoomIn
                size={28}
                className="text-blue-700"
              />

            </div>

          </div>

          {/* Category */}

          <span
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-blue-700
              px-4
              py-2
              text-sm
              font-semibold
              text-white
            "
          >
            {image.category}
          </span>

        </div>

        {/* Body */}

        <div className="p-6">

          <h3
            className="
              line-clamp-2
              text-xl
              font-bold
              text-slate-900
            "
          >
            {image.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-2
              text-slate-600
            "
          >
            {image.description}
          </p>

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-slate-500
              "
            >

              <Calendar size={16} />

              {image.created_at}

            </div>

            <Images
              size={20}
              className="text-blue-700"
            />

          </div>

        </div>

      </article>

      <GalleryLightbox
        open={open}
        onClose={() => setOpen(false)}
        image={image}
      />
    </>
  );
}
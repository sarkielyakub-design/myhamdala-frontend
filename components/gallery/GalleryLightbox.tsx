"use client";

import Image from "next/image";

import {
  X,
  Calendar,
  Download,
  Share2,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  image: any;
}

export default function GalleryLightbox({
  open,
  onClose,
  image,
}: Props) {

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/90
        p-6
      "
    >

      {/* Close */}

      <button
        onClick={onClose}
        className="
          absolute
          right-6
          top-6
          rounded-full
          bg-white
          p-3
          transition
          hover:bg-slate-200
        "
      >
        <X size={24} />
      </button>

      <div
        className="
          w-full
          max-w-6xl
          overflow-hidden
          rounded-3xl
          bg-white
        "
      >

        <div className="grid lg:grid-cols-2">

          {/* Image */}

          <div className="relative h-[500px]">

            <Image
              src={image.image_url}
              alt={image.title}
              fill
              className="object-cover"
            />

          </div>

          {/* Content */}

          <div className="flex flex-col p-10">

            <span
              className="
                w-fit
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-700
              "
            >
              {image.category}
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                text-slate-900
              "
            >
              {image.title}
            </h2>

            <p
              className="
                mt-6
                leading-8
                text-slate-600
              "
            >
              {image.description}
            </p>

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-slate-500
              "
            >

              <Calendar size={18} />

              {image.created_at}

            </div>

            {/* Actions */}

            <div className="mt-auto pt-12">

              <div className="grid gap-4 md:grid-cols-2">

                <a
                  href={image.image_url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-blue-700
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-800
                  "
                >
                  <Download size={20} />

                  Download
                </a>

                <button
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-300
                    py-4
                    font-semibold
                    transition
                    hover:bg-slate-100
                  "
                >
                  <Share2 size={20} />

                  Share
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
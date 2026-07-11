"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Camera,
  ArrowRight,
} from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

interface GalleryProps {
  gallery: GalleryItem[];
}

export default function Gallery({
  gallery,
}: GalleryProps) {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-blue-700
            "
          >

            <Camera size={18} />

            Gallery

          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              lg:text-5xl
            "
          >
            Explore Our
            <span className="block text-blue-700">
              Travel Memories
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Discover unforgettable moments from our
            Umrah, Hajj and international travel
            experiences with M.Y Hamdala Travel & Tour.
          </p>

        </div>

        {/* Gallery Grid */}

        <div
          className="
            mt-20
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >          {gallery.map((item) => (
            <div
              key={item.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image_url}
                  alt={item.title}
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
                    via-black/20
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Title on Hover */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    translate-y-6
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    line-clamp-3
                    leading-7
                    text-slate-600
                  "
                >
                  {item.description}
                </p>

              </div>

            </div>
          ))}        </div>

        {/* ===========================
              VIEW ALL GALLERY
        =========================== */}

        <div className="mt-16 flex justify-center">

          <Link
            href="/gallery"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-blue-700
              px-8
              py-4
              text-lg
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-blue-800
              hover:gap-5
            "
          >

            View Full Gallery

            <ArrowRight size={22} />

          </Link>

        </div>

      </div>

    </section>
  );
}
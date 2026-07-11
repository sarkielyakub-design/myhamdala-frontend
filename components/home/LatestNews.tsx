"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

interface News {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image_url: string;
  created_at: string;
  slug?: string;
}

interface LatestNewsProps {
  news: News[];
}

export default function LatestNews({
  news,
}: LatestNewsProps) {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              rounded-full
              bg-blue-100
              px-6
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[4px]
              text-blue-700
            "
          >
            Latest News
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              text-slate-900
              lg:text-6xl
            "
          >
            Travel News &
            <span className="block text-blue-700">
              Updates
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
            Stay informed with our latest travel news,
            visa updates, Umrah announcements and
            international travel information.
          </p>

        </div>

        {/* =======================
              NEWS GRID
        ======================= */}

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >        {news.map((article) => (
          <div
            key={article.id}
            className="
              group
              overflow-hidden
              rounded-[32px]
              bg-white
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >

            {/* Image */}

            <div className="relative h-72 overflow-hidden">

              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Date */}

              <div
                className="
                  absolute
                  top-5
                  left-5
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  shadow-lg
                "
              >

                <CalendarDays
                  size={16}
                  className="text-blue-700"
                />

                <span className="text-sm font-semibold text-slate-700">

                  {new Date(article.created_at).toLocaleDateString()}

                </span>

              </div>

            </div>

            {/* Content */}

            <div className="p-8">

              <h3
                className="
                  line-clamp-2
                  text-2xl
                  font-black
                  text-slate-900
                "
              >

                {article.title}

              </h3>

              <p
                className="
                  mt-5
                  line-clamp-3
                  leading-8
                  text-slate-600
                "
              >

                {article.excerpt}

              </p>

              <Link
                href={`/news/${article.slug ?? article.id}`}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  font-bold
                  text-blue-700
                  transition-all
                  duration-300
                  hover:gap-5
                "
              >

                Read More

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>
        ))}

        </div>        {/* =====================================
                BOTTOM CTA
        ===================================== */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-blue-900
            via-blue-800
            to-slate-900
            p-12
            text-white
          "
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="font-bold uppercase tracking-[4px] text-yellow-400">
                Stay Updated
              </span>

              <h2 className="mt-5 text-4xl font-black lg:text-5xl">
                Never Miss
                <span className="block">
                  Important Travel Updates
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Follow our latest announcements, visa updates,
                Hajj and Umrah news, travel advisories and
                exclusive offers from M.Y Hamdala Travel & Tour.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5 lg:items-end">

              <Link
                href="/news"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-yellow-400
                  px-8
                  py-4
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-yellow-300
                "
              >
                View All News

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-blue-900
                "
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
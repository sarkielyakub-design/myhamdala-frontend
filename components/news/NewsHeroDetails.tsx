import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  User,
  Clock3,
  ArrowLeft,
} from "lucide-react";

interface Props {
  article: any;
}

export default function NewsHeroDetails({
  article,
}: Props) {

  if (!article) return null;

  return (
    <section className="relative h-[700px] overflow-hidden">

      {/* Background */}

      <Image
        src={article.image_url}
        alt={article.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />

      <div className="absolute inset-0">

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            flex-col
            justify-end
            px-6
            pb-20
          "
        >

          {/* Back */}

          <Link
            href="/news"
            className="
              mb-8
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-5
              py-3
              text-white
              backdrop-blur
              transition
              hover:bg-white/20
            "
          >
            <ArrowLeft size={18} />

            Back to News
          </Link>

          {/* Category */}

          <span
            className="
              inline-flex
              w-fit
              rounded-full
              bg-blue-700
              px-5
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[2px]
              text-white
            "
          >
            {article.category}
          </span>

          {/* Title */}

          <h1
            className="
              mt-6
              max-w-5xl
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >
            {article.title}
          </h1>

          {/* Excerpt */}

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-200
            "
          >
            {article.excerpt}
          </p>

          {/* Meta */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-8
              text-white
            "
          >

            <div className="flex items-center gap-3">

              <User
                size={20}
                className="text-yellow-400"
              />

              <span>{article.author}</span>

            </div>

            <div className="flex items-center gap-3">

              <Calendar
                size={20}
                className="text-yellow-400"
              />

              <span>{article.published_at}</span>

            </div>

            <div className="flex items-center gap-3">

              <Clock3
                size={20}
                className="text-yellow-400"
              />

              <span>
                {article.read_time || 5} min read
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
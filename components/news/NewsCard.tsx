import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  User,
  ArrowRight,
  Clock3,
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  category: string;
  author: string;
  published_at: string;
}

interface Props {
  article: Article;
  featured?: boolean;
}

export default function NewsCard({
  article,
  featured = false,
}: Props) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-3xl bg-white shadow-lg">

        <div className="grid lg:grid-cols-2">

          {/* Image */}

          <div className="relative h-[420px]">

            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover"
            />

            <span
              className="
                absolute
                left-6
                top-6
                rounded-full
                bg-blue-700
                px-5
                py-2
                text-sm
                font-semibold
                text-white
              "
            >
              {article.category}
            </span>

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-10">

            <div className="flex flex-wrap gap-6 text-sm text-slate-500">

              <span className="flex items-center gap-2">

                <User size={16} />

                {article.author}

              </span>

              <span className="flex items-center gap-2">

                <Calendar size={16} />

                {article.published_at}

              </span>

              <span className="flex items-center gap-2">

                <Clock3 size={16} />

                5 min read

              </span>

            </div>

            <h2 className="mt-6 text-4xl font-black text-slate-900">

              {article.title}

            </h2>

            <p className="mt-6 leading-8 text-slate-600">

              {article.excerpt}

            </p>

            <Link
              href={`/news/${article.slug}`}
              className="
                mt-8
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                bg-blue-700
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-800
              "
            >
              Read Article

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </article>
    );
  }

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={article.image_url}
          alt={article.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-blue-700
            px-4
            py-2
            text-xs
            font-semibold
            text-white
          "
        >
          {article.category}
        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex flex-wrap gap-4 text-sm text-slate-500">

          <span className="flex items-center gap-1">

            <User size={15} />

            {article.author}

          </span>

          <span className="flex items-center gap-1">

            <Calendar size={15} />

            {article.published_at}

          </span>

        </div>

        <h3
          className="
            mt-5
            line-clamp-2
            text-2xl
            font-bold
            text-slate-900
          "
        >
          {article.title}
        </h3>

        <p
          className="
            mt-4
            line-clamp-3
            leading-7
            text-slate-600
          "
        >
          {article.excerpt}
        </p>

        <Link
          href={`/news/${article.slug}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-semibold
            text-blue-700
            transition
            hover:gap-3
          "
        >
          Read More

          <ArrowRight size={18} />

        </Link>

      </div>

    </article>
  );
}
import {
  Tag,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

import ShareButtons from "./SharedButtons";

interface Props {
  article: any;
}

export default function NewsContent({
  article,
}: Props) {

  if (!article) return null;

  return (
    <article className="rounded-3xl bg-white p-8 shadow-sm">

      {/* Reading Header */}

      <div className="mb-10 flex items-center gap-3">

        <BookOpen
          size={28}
          className="text-blue-700"
        />

        <h2 className="text-3xl font-black text-slate-900">
          Article
        </h2>

      </div>

      {/* Article Content */}

      <div
        className="
          prose
          prose-lg
          max-w-none
          prose-headings:font-black
          prose-headings:text-slate-900
          prose-p:text-slate-700
          prose-p:leading-9
          prose-a:text-blue-700
          prose-strong:text-slate-900
          prose-blockquote:border-l-4
          prose-blockquote:border-blue-700
          prose-blockquote:bg-blue-50
          prose-blockquote:py-3
          prose-blockquote:px-6
          prose-ul:marker:text-blue-700
        "
        dangerouslySetInnerHTML={{
          __html: article.content,
        }}
      />

      {/* Travel Tips */}

      <div
        className="
          mt-12
          rounded-3xl
          border-l-4
          border-blue-700
          bg-blue-50
          p-8
        "
      >

        <h3 className="text-2xl font-bold text-slate-900">
          Travel Tip
        </h3>

        <p className="mt-4 leading-8 text-slate-700">
          Always verify your passport validity,
          visa requirements and airline baggage
          policy before travelling to avoid
          unnecessary delays.
        </p>

      </div>

      {/* Tags */}

      <div className="mt-12">

        <div className="flex items-center gap-3">

          <Tag
            size={22}
            className="text-blue-700"
          />

          <h3 className="text-xl font-bold">
            Tags
          </h3>

        </div>

        <div className="mt-5 flex flex-wrap gap-3">

          {(article.tags || [
            "Umrah",
            "Travel",
            "Visa",
          ]).map((tag: string) => (

            <span
              key={tag}
              className="
                rounded-full
                bg-slate-100
                px-5
                py-2
                text-sm
                font-semibold
                text-slate-700
              "
            >
              #{tag}
            </span>

          ))}

        </div>

      </div>

      {/* Checklist */}

      <div
        className="
          mt-12
          rounded-3xl
          bg-slate-50
          p-8
        "
      >

        <h3 className="text-2xl font-bold text-slate-900">
          Before You Travel
        </h3>

        <div className="mt-6 space-y-4">

          {[
            "Check passport validity",
            "Confirm visa approval",
            "Prepare travel insurance",
            "Keep digital copies of important documents",
            "Arrive early at the airport",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <CheckCircle2
                size={20}
                className="text-green-600"
              />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Share */}

      <div className="mt-12 border-t border-slate-200 pt-10">

        <ShareButtons article={article} />

      </div>

    </article>
  );
}
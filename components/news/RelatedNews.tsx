import NewsCard from "./NewsCard";

interface Props {
  news: any[];
  currentId: number;
}

export default function RelatedNews({
  news,
  currentId,
}: Props) {

  const related = news
    .filter((item) => item.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            Continue Reading
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              text-slate-900
            "
          >
            Related Articles
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Discover more travel news, visa updates,
            Umrah guidance and useful tips from
            M.Y Hamdala Travel & Tour.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {related.map((article) => (

            <NewsCard
              key={article.id}
              article={article}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
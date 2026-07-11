import NewsCard from "./NewsCard";

interface NewsItem {
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
  news: NewsItem[];
}

export default function NewsGrid({ news }: Props) {
  if (!news || news.length === 0) {
    return (
      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center">

            <h2 className="text-3xl font-bold text-slate-900">
              No News Available
            </h2>

            <p className="mt-4 text-slate-600">
              There are no published articles yet.
            </p>

          </div>

        </div>
      </section>
    );
  }

  const featured = news[0];
  const articles = news.slice(1);

  return (
    <section className="bg-slate-50 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Featured Article */}

        <NewsCard
          article={featured}
          featured
        />

        {/* Other Articles */}

        {articles.length > 0 && (
          <>
            <div className="mt-20 mb-10">

              <h2 className="text-4xl font-black text-slate-900">
                Latest Articles
              </h2>

              <p className="mt-3 text-slate-600">
                Stay informed with the latest travel updates,
                visa information and pilgrimage news.
              </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {articles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                />
              ))}

            </div>
          </>
        )}

      </div>

    </section>
  );
}
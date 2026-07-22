export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import NewsHeroDetails from "@/components/news/NewsHeroDetails";
import NewsContent from "@/components/news/NewsContent";
import NewsSidebar from "@/components/news/NewsSidebar";
import RelatedNews from "@/components/news/RelatedNews";

import {
  getNewsArticle,
  getPublicNews,
} from "@/lib/api";
interface Props {
  params: {
    slug: string;
  };
}

export default async function NewsDetailsPage({
  params,
}: Props) {

  const article = await getNewsArticle(params.slug);

  const allNews = await getPublicNews();

  return (
    <>
      <Navbar />

      <NewsHeroDetails article={article} />

      <section className="bg-slate-50 py-20">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            px-6
            lg:grid-cols-3
          "
        >

          <div className="lg:col-span-2">

            <NewsContent
              article={article}
            />

          </div>

          <NewsSidebar
            article={article}
          />

        </div>

      </section>

      <RelatedNews
        news={allNews}
        currentId={article.id}
      />

      <Footer />
    </>
  );
}
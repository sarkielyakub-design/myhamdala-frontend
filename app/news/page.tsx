export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import NewsHero from "@/components/news/NewsHero";
import NewsSearch from "@/components/news/NewsSearch";
import NewsCategories from "@/components/news/NewsCategories";
import NewsGrid from "@/components/news/NewsGrid";

import { getPublicNews } from "@/lib/api";

export default async function NewsPage() {
  const news = await getPublicNews();

  return (
    <>
      <Navbar />

      <NewsHero />

      <NewsSearch />

      <NewsCategories />

      <NewsGrid news={news} />

      <Footer />
    </>
  );
}
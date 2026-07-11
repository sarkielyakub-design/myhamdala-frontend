"use client";

import { useEffect, useState } from "react";

import NewsStats from "@/components/admin/news/NewsStats";
import NewsToolbar from "@/components/admin/news/NewsToolbar";
import NewsTable from "@/components/admin/news/NewsTable";

import { getNews } from "@/lib/api";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();
        setNews(data || []);
      } catch (error) {
        console.error(error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <NewsStats news={news} />

      <NewsToolbar />

      <NewsTable news={news} />
    </div>
  );
}
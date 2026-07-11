import NewsletterHero from "@/components/admin/newsletter/NewsletterHero";
import NewsletterStats from "@/components/admin/newsletter/NewsletterStats";
import NewsletterToolbar from "@/components/admin/newsletter/NewsletterToolbar";
import NewsletterTable from "@/components/admin/newsletter/NewsletterTable";

import { getNewsletterSubscribers } from "@/lib/api";

export default async function NewsletterPage() {

  const subscribers =
    await getNewsletterSubscribers();

  return (
    <div className="space-y-8">

      <NewsletterHero />

      <NewsletterStats
        subscribers={subscribers}
      />

      <NewsletterToolbar />

      <NewsletterTable
        subscribers={subscribers}
      />

    </div>
  );
}
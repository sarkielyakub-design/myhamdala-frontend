import {
  Newspaper,
  Eye,
  FileText,
  Archive,
} from "lucide-react";

interface Props {
  news?: any[];
}

export default function NewsStats({
  news = [],
}: Props) {
  const published = news.filter(
    (item: any) => item.status === "published"
  ).length;

  const drafts = news.filter(
    (item: any) => item.status === "draft"
  ).length;

  const views = news.reduce(
    (total: number, item: any) =>
      total + Number(item.views || 0),
    0
  );

  const cards = [
    {
      title: "Total Articles",
      value: news.length,
      icon: Newspaper,
      color: "bg-blue-600",
    },
    {
      title: "Published",
      value: published,
      icon: FileText,
      color: "bg-green-600",
    },
    {
      title: "Drafts",
      value: drafts,
      icon: Archive,
      color: "bg-yellow-500",
    },
    {
      title: "Views",
      value: views.toLocaleString(),
      icon: Eye,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-[#111827] p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-black text-white">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon
                  size={24}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
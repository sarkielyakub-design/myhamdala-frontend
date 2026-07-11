import {
  Images,
  Star,
  FolderOpen,
  Eye,
} from "lucide-react";

interface Props {
  gallery: any[];
}

export default function GalleryStats({
  gallery,
}: Props) {

  const featured = gallery.filter(
    (item: any) => item.featured
  ).length;

  const categories = new Set(
    gallery.map(
      (item: any) =>
        item.category || "General"
    )
  ).size;

  const views = gallery.reduce(
    (total: number, item: any) =>
      total + Number(item.views || 0),
    0
  );

  const cards = [
    {
      title: "Total Images",
      value: gallery.length,
      icon: Images,
      color: "bg-blue-600",
    },
    {
      title: "Featured",
      value: featured,
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Categories",
      value: categories,
      icon: FolderOpen,
      color: "bg-green-600",
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
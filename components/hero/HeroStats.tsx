import {
  Image,
  Type,
  MousePointerClick,
  Eye,
} from "lucide-react";

interface Props {
  hero: any;
}

export default function HeroStats({
  hero,
}: Props) {

  const cards = [
    {
      title: "Hero Status",
      value: hero?.is_active ? "Active" : "Inactive",
      icon: Eye,
      color: "bg-green-600",
    },
    {
      title: "Background",
      value: hero?.background_image ? "Uploaded" : "None",
      icon: Image,
      color: "bg-blue-600",
    },
    {
      title: "Title",
      value: hero?.title ? "Available" : "Empty",
      icon: Type,
      color: "bg-yellow-500",
    },
    {
      title: "Buttons",
      value: "2",
      icon: MousePointerClick,
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

                <h2 className="mt-3 text-2xl font-black text-white">
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
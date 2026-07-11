import {
  Users,
  Mail,
  UserCheck,
  UserX,
} from "lucide-react";

interface Props {
  subscribers: any[];
}

export default function NewsletterStats({
  subscribers,
}: Props) {

  const active = subscribers.filter(
    (s: any) => s.status === "active"
  ).length;

  const inactive = subscribers.filter(
    (s: any) => s.status === "inactive"
  ).length;

  const today = subscribers.filter((s: any) => {

    if (!s.created_at) return false;

    return (
      new Date(s.created_at).toDateString() ===
      new Date().toDateString()
    );

  }).length;

  const cards = [
    {
      title: "Subscribers",
      value: subscribers.length,
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Active",
      value: active,
      icon: UserCheck,
      color: "bg-green-600",
    },
    {
      title: "Inactive",
      value: inactive,
      icon: UserX,
      color: "bg-red-600",
    },
    {
      title: "Today",
      value: today,
      icon: Mail,
      color: "bg-yellow-500",
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

                <h2 className="mt-3 text-4xl font-black text-white">
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
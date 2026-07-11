import {
  Package,
  Star,
  Plane,
  CircleDollarSign,
} from "lucide-react";

interface Props {
  packages: any[];
}

export default function PackageStats({
  packages,
}: Props) {

  const featured =
    packages.filter(
      (p: any) => p.featured
    ).length;

  const active =
    packages.filter(
      (p: any) => p.is_active
    ).length;

  const totalValue =
    packages.reduce(
      (sum: number, p: any) =>
        sum + Number(p.price || 0),
      0
    );

  const cards = [
    {
      title: "Total Packages",
      value: packages.length,
      icon: Package,
      color: "bg-blue-600",
    },
    {
      title: "Featured",
      value: featured,
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Active",
      value: active,
      icon: Plane,
      color: "bg-green-500",
    },
    {
      title: "Total Value",
      value: `₦${totalValue.toLocaleString()}`,
      icon: CircleDollarSign,
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
                  size={26}
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
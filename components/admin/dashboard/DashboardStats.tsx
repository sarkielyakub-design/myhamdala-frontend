import {
  Package,
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface Props {
  analytics?: any;
}

export default function DashboardStats({
  analytics = {},
}: Props) {
  const cards = [
    {
      title: "Revenue",
      value: `₦${Number(
        analytics.revenue
      ).toLocaleString()}`,
      icon: DollarSign,
      color: "bg-green-500",
      change: "+12%",
      trend: "up",
    },
    {
      title: "Bookings",
      value: analytics.total_bookings,
      icon: BookOpen,
      color: "bg-blue-600",
      change: "+8%",
      trend: "up",
    },
    {
      title: "Paid",
      value: analytics.paid,
      icon: Package,
      color: "bg-yellow-500",
      change: "+5%",
      trend: "up",
    },
    {
      title: "Pending",
      value: analytics.pending,
      icon: Users,
      color: "bg-red-500",
      change: "-2%",
      trend: "down",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#111827]
              p-6
              transition
              hover:-translate-y-1
              hover:border-yellow-400/30
            "
          >

            <div className="flex items-start justify-between">

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
                  className="text-white"
                  size={26}
                />
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <span className="text-sm text-slate-500">
                Last 30 days
              </span>

              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  card.trend === "up"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}

                {card.change}

              </div>

            </div>

          </div>
        );

      })}

    </div>
  );
}
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

interface Props {
  bookings: any[];
}

export default function BookingStats({
  bookings,
}: Props) {

  const paid = bookings.filter(
    (b: any) => b.status === "paid"
  ).length;

  const pending = bookings.filter(
    (b: any) => b.status === "pending"
  ).length;

  const cancelled = bookings.filter(
    (b: any) => b.status === "cancelled"
  ).length;

  const cards = [
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: BookOpen,
      color: "bg-blue-600",
    },
    {
      title: "Paid",
      value: paid,
      icon: CheckCircle2,
      color: "bg-green-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "bg-yellow-500",
    },
    {
      title: "Cancelled",
      value: cancelled,
      icon: XCircle,
      color: "bg-red-600",
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
                  className="text-white"
                  size={24}
                />

              </div>

            </div>

          </div>
        );

      })}

    </div>
  );
}
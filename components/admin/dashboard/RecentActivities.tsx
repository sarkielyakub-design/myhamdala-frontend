import {
  BookOpen,
  CreditCard,
  UserPlus,
  Newspaper,
  Package,
  Clock3,
} from "lucide-react";

interface Activity {
  id: number;
  type: string;
  title: string;
  description: string;
  created_at: string;
}

interface Props {
  activities?: Activity[];
}

export default function RecentActivities({
  activities = [],
}: Props) {

  const demoActivities =
    activities.length > 0
      ? activities
      : [
          {
            id: 1,
            type: "booking",
            title: "New Booking",
            description:
              "Ahmed Musa booked Premium Umrah Package.",
            created_at: "5 minutes ago",
          },
          {
            id: 2,
            type: "payment",
            title: "Payment Received",
            description:
              "₦2,500,000 payment confirmed.",
            created_at: "15 minutes ago",
          },
          {
            id: 3,
            type: "user",
            title: "New Customer",
            description:
              "A new customer account was created.",
            created_at: "30 minutes ago",
          },
          {
            id: 4,
            type: "package",
            title: "Package Updated",
            description:
              "Ramadan Umrah package updated.",
            created_at: "1 hour ago",
          },
          {
            id: 5,
            type: "news",
            title: "News Published",
            description:
              "Travel advisory published.",
            created_at: "2 hours ago",
          },
        ];

  const getIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <BookOpen className="text-blue-400" size={20} />;

      case "payment":
        return <CreditCard className="text-green-400" size={20} />;

      case "user":
        return <UserPlus className="text-purple-400" size={20} />;

      case "package":
        return <Package className="text-yellow-400" size={20} />;

      case "news":
        return <Newspaper className="text-pink-400" size={20} />;

      default:
        return <Clock3 size={20} />;
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-black text-white">
          Recent Activities
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Latest actions performed in the system.
        </p>

      </div>

      <div className="space-y-6">

        {demoActivities.map((activity) => (

          <div
            key={activity.id}
            className="flex gap-4"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">

              {getIcon(activity.type)}

            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-white">
                {activity.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {activity.description}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                {activity.created_at}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
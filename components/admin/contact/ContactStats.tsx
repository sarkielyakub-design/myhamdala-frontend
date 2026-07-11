import {
  Mail,
  Eye,
  Reply,
  Archive,
} from "lucide-react";

interface Props {
  contacts: any[];
}

export default function ContactStats({
  contacts,
}: Props) {

  const unread = contacts.filter(
    (c: any) =>
      c.status === "unread"
  ).length;

  const replied = contacts.filter(
    (c: any) =>
      c.status === "replied"
  ).length;

  const archived = contacts.filter(
    (c: any) =>
      c.status === "archived"
  ).length;

  const cards = [
    {
      title: "Total Messages",
      value: contacts.length,
      icon: Mail,
      color: "bg-blue-600",
    },
    {
      title: "Unread",
      value: unread,
      icon: Eye,
      color: "bg-yellow-500",
    },
    {
      title: "Replied",
      value: replied,
      icon: Reply,
      color: "bg-green-600",
    },
    {
      title: "Archived",
      value: archived,
      icon: Archive,
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
"use client";

import {
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
} from "lucide-react";

interface Props {
  users: any[];
}

export default function UserStats({
  users = [],
}: Props) {

  const verified = users.filter(
    (user) => user.is_verified
  ).length;

  const unverified = users.filter(
    (user) => !user.is_verified
  ).length;

  const admins = users.filter(
    (user) => user.is_admin
  ).length;

  const cards = [
    {
      title: "Total Customers",
      value: users.length,
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Verified",
      value: verified,
      icon: UserCheck,
      color: "bg-green-600",
    },
    {
      title: "Unverified",
      value: unverified,
      icon: UserX,
      color: "bg-yellow-500",
    },
    {
      title: "Administrators",
      value: admins,
      icon: ShieldCheck,
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
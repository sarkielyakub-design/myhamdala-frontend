"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  analytics?: {
    paid?: number;
    pending?: number;
    confirmed?: number;
    cancelled?: number;
  };
}

export default function BookingChart({
  analytics,
}: Props) {

  const data = [
    {
      name: "Paid",
      value: analytics?.paid ?? 48,
      color: "#22C55E",
    },
    {
      name: "Pending",
      value: analytics?.pending ?? 22,
      color: "#EAB308",
    },
    {
      name: "Confirmed",
      value: analytics?.confirmed ?? 15,
      color: "#3B82F6",
    },
    {
      name: "Cancelled",
      value: analytics?.cancelled ?? 5,
      color: "#EF4444",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-black text-white">
          Booking Status
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Overview of all booking statuses
        </p>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}

            </Pie>

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Summary */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        {data.map((item) => (

          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl bg-black/20 p-4"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-slate-300">
                {item.name}
              </span>

            </div>

            <span className="font-bold text-white">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
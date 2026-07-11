"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 1200000 },
  { month: "Feb", revenue: 1800000 },
  { month: "Mar", revenue: 1500000 },
  { month: "Apr", revenue: 2400000 },
  { month: "May", revenue: 2700000 },
  { month: "Jun", revenue: 3200000 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black text-white">
            Revenue Overview
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Monthly revenue generated from bookings
          </p>

        </div>

        <div className="rounded-xl bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
          +18.4%
        </div>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="revenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#EAB308"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#EAB308"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#EAB308"
              strokeWidth={4}
              fill="url(#revenue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
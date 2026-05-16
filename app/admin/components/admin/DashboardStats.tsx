"use client";

import {
  TrendingUp,
  CreditCard,
  Clock3,
  Users,
  Activity,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function DashboardStats({ analytics }: any) {

  const stats = [
    {
      title: "Total Bookings",
      value: analytics.total_bookings || 0,
      icon: <Users size={28} />,
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-500/10",
      text: "text-blue-400",
    },
    {
      title: "Paid Bookings",
      value: analytics.paid || 0,
      icon: <CreditCard size={28} />,
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-500/10",
      text: "text-green-400",
    },
    {
      title: "Pending Payments",
      value: analytics.pending || 0,
      icon: <Clock3 size={28} />,
      color: "from-yellow-500 to-orange-400",
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
    },
    {
      title: "Conversion Rate",
      value: `${analytics.conversion_rate || 0}%`,
      icon: <TrendingUp size={28} />,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      text: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-8">

      {/* 🔥 HERO HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121826] via-[#111827] to-black p-8 shadow-2xl">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-black flex items-center justify-center text-2xl font-bold shadow-lg">
                🕋
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                  M.Y HAMDALA
                </h1>

                <p className="text-gray-400 text-sm">
                  Travel & Tour Management System
                </p>
              </div>

            </div>

            <p className="text-gray-300 max-w-2xl leading-relaxed">
              Monitor packages, bookings, payments and customer activities
              across your Umrah & Hajj travel operations in real-time.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start lg:items-end gap-4">

            <div className="bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-2xl flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <div>
                <p className="text-green-400 font-semibold">
                  System Active
                </p>

                <p className="text-xs text-gray-400">
                  Secure & Operational
                </p>
              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

              <p className="text-xs text-gray-400 mb-1">
                Current Revenue
              </p>

              <h2 className="text-3xl font-bold text-yellow-400">
                ₦7,500,000
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >

            {/* GLOW */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${s.color}`} />

            <div className="relative z-10">

              {/* TOP */}
              <div className="flex justify-between items-start mb-6">

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.bg} ${s.text}`}>
                  {s.icon}
                </div>

                <ArrowUpRight className="text-gray-500 group-hover:text-white transition" />

              </div>

              {/* VALUE */}
              <h2 className="text-4xl font-extrabold mb-2">
                {s.value}
              </h2>

              {/* LABEL */}
              <p className="text-gray-400 text-sm">
                {s.title}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* 🔥 ANALYTICS */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* CONVERSION */}
        <div className="lg:col-span-2 bg-[#121826]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h3 className="text-xl font-bold">
                Booking Conversion
              </h3>

              <p className="text-sm text-gray-400">
                User booking performance overview
              </p>
            </div>

            <div className="bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-xl text-sm font-semibold">
              {analytics.conversion_rate || 0}% Success
            </div>

          </div>

          {/* BAR */}
          <div className="w-full h-5 bg-black/40 rounded-full overflow-hidden">

            <div
              className="h-5 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 transition-all duration-700"
              style={{
                width: `${analytics.conversion_rate || 0}%`,
              }}
            />

          </div>

          <div className="flex justify-between mt-3 text-sm text-gray-400">
            <span>0%</span>
            <span>100%</span>
          </div>

          {/* INSIGHTS */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-1">
                Total Users
              </p>

              <h4 className="text-2xl font-bold">
                {analytics.total_bookings || 0}
              </h4>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-1">
                Successful
              </p>

              <h4 className="text-2xl font-bold text-green-400">
                {analytics.paid || 0}
              </h4>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-1">
                Pending
              </p>

              <h4 className="text-2xl font-bold text-yellow-400">
                {analytics.pending || 0}
              </h4>
            </div>

          </div>

        </div>

        {/* ACTIVITY */}
        <div className="bg-[#121826]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">

          <div className="flex items-center gap-3 mb-6">

            <Activity className="text-green-400" />

            <div>
              <h3 className="text-xl font-bold">
                Live Insights
              </h3>

              <p className="text-sm text-gray-400">
                Real-time system updates
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-green-400 text-sm font-semibold">
                ✔ Booking Growth
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Travel bookings are increasing steadily this month.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-yellow-400 text-sm font-semibold">
                ⚠ Pending Payments
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Some users have pending transactions requiring attention.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-blue-400 text-sm font-semibold">
                🚀 Premium Packages
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Premium Umrah packages are currently top-performing.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
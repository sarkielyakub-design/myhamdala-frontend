"use client";

export default function DashboardStats({ analytics }: any) {

  const stats = [
    {
      title: "Total Bookings",
      value: analytics.total_bookings || 0,
      icon: "📊",
      color: "text-blue-400",
    },
    {
      title: "Paid",
      value: analytics.paid || 0,
      icon: "💰",
      color: "text-green-400",
    },
    {
      title: "Pending",
      value: analytics.pending || 0,
      icon: "⏳",
      color: "text-yellow-400",
    },
    {
      title: "Conversion",
      value: `${analytics.conversion_rate || 0}%`,
      icon: "📈",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-8">

      {/* 🏢 HEADER */}
      <div className="bg-[#121826] p-6 rounded-2xl border border-white/10 shadow-lg flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
            M.Y HAMDALA TRAVEL AND TOURS
          </h1>
          <p className="text-gray-400 text-sm">
            Admin Dashboard Overview
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-400">System Status</p>
          <p className="text-green-400 font-semibold">● Online</p>
        </div>

      </div>

      {/* 📊 STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#121826] p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all"
          >

            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl">{s.icon}</span>
              <span className={`text-sm ${s.color}`}>
                {s.title}
              </span>
            </div>

            <h2 className="text-3xl font-bold">
              {s.value}
            </h2>

          </div>
        ))}

      </div>

      {/* 📈 PROGRESS + INSIGHT */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* CONVERSION BAR */}
        <div className="bg-[#121826] p-6 rounded-2xl border border-white/10">

          <h3 className="mb-4 text-gray-300">
            Conversion Performance
          </h3>

          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-yellow-500 h-3 rounded-full transition-all"
              style={{
                width: `${analytics.conversion_rate || 0}%`,
              }}
            />
          </div>

          <p className="text-sm text-gray-400 mt-2">
            {analytics.conversion_rate || 0}% of users completed booking
          </p>

        </div>

        {/* QUICK INSIGHT */}
        <div className="bg-[#121826] p-6 rounded-2xl border border-white/10">

          <h3 className="mb-4 text-gray-300">
            Insights
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Total bookings growing steadily</li>
            <li>• Monitor pending payments</li>
            <li>• Optimize premium packages</li>
          </ul>

        </div>

      </div>

    </div>
  );
}
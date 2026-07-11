import Link from "next/link";

import {
  Eye,
  Calendar,
  Plane,
} from "lucide-react";

interface Props {
  bookings: any[];
}

export default function RecentBookings({
  bookings,
}: Props) {

  const recent = bookings.slice(0, 6);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Recent Bookings
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest customer bookings
          </p>

        </div>

        <Link
          href="/admin/bookings"
          className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black"
        >
          View All
        </Link>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">
                Customer
              </th>

              <th className="px-6 py-4">
                Package
              </th>

              <th className="px-6 py-4">
                Departure
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {recent.map((booking) => (

              <tr
                key={booking.id}
                className="border-b border-white/5 hover:bg-white/5"
              >

                {/* Customer */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 font-bold text-black">

                      {booking.first_name?.charAt(0)}
                      {booking.surname?.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">

                        {booking.first_name} {booking.surname}

                      </h3>

                      <p className="text-sm text-slate-400">

                        {booking.passport_number}

                      </p>

                    </div>

                  </div>

                </td>

                {/* Package */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <Plane
                      size={16}
                      className="text-yellow-400"
                    />

                    {booking.package_title ||
                      "Umrah Package"}

                  </div>

                </td>

                {/* Date */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <Calendar
                      size={16}
                      className="text-blue-400"
                    />

                    {booking.departure_date ||
                      "--"}

                  </div>

                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-2 text-xs font-semibold ${
                      booking.status === "paid"
                        ? "bg-green-500/20 text-green-400"
                        : booking.status === "confirmed"
                        ? "bg-blue-500/20 text-blue-400"
                        : booking.status === "cancelled"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >

                    {booking.status}

                  </span>

                </td>

                {/* Action */}

                <td className="px-6 py-5">

                  <Link
                    href={`/admin/bookings/${booking.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-yellow-400 hover:text-black"
                  >

                    <Eye size={16} />

                    View

                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
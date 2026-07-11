"use client";

import Link from "next/link";

import {
  Eye,
  Pencil,
  Printer,
  Mail,
  MessageCircle,
  CheckCircle2,
  Clock3,
  XCircle,
  IdCard,
} from "lucide-react";

interface Props {
  bookings: any[];
}

export default function BookingTable({
  bookings,
}: Props) {

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827']">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Booking Management
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            View and manage all customer bookings
          </p>

        </div>

        <span className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black">
          {bookings.length} Bookings
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">Customer</th>

              <th className="px-6 py-4">Package</th>

              <th className="px-6 py-4">Reference</th>

              <th className="px-6 py-4">Payment</th>

              <th className="px-6 py-4">Passport</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {bookings.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="py-20 text-center text-slate-500"
                >
                  No bookings found.
                </td>

              </tr>

            ) : (

              bookings.map((booking: any) => (

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

                          {booking.phone}

                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Package */}

                  <td className="px-6 py-5">

                    <div>

                      <h3 className="font-semibold text-white">

                        {booking.package_title ||
                          "Premium Umrah"}

                      </h3>

                      <p className="text-sm text-slate-400">

                        {booking.departure_date}

                      </p>

                    </div>

                  </td>

                  {/* Reference */}

                  <td className="px-6 py-5">

                    <span className="font-mono text-yellow-400">

                      {booking.reference ||
                        booking.booking_reference ||
                        "-"}

                    </span>

                  </td>

                  {/* Payment */}

                  <td className="px-6 py-5">

                    {booking.payment_status === "paid" ? (

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-2 text-xs text-green-400">

                        <CheckCircle2 size={14} />

                        Paid

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-2 text-xs text-yellow-400">

                        <Clock3 size={14} />

                        Pending

                      </span>

                    )}

                  </td>

                  {/* Passport */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <IdCard
                        size={18}
                        className="text-blue-400"
                      />

                      <span className="text-white">

                        {booking.passport_number}

                      </span>

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${
                        booking.status === "approved"
                          ? "bg-green-500/20 text-green-400"
                          : booking.status === "cancelled"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >

                      {booking.status}

                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex flex-wrap gap-2">

                      <Link
                        href={`/admin/bookings/${booking.id}`}
                        className="rounded-xl bg-blue-500/20 p-3 text-blue-400 hover:bg-blue-500 hover:text-white"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/admin/bookings/edit/${booking.id}`}
                        className="rounded-xl bg-yellow-500/20 p-3 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button className="rounded-xl bg-green-500/20 p-3 text-green-400 hover:bg-green-500 hover:text-white">
                        <Printer size={18} />
                      </button>

                      <button className="rounded-xl bg-purple-500/20 p-3 text-purple-400 hover:bg-purple-500 hover:text-white">
                        <Mail size={18} />
                      </button>

                      <button className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400 hover:bg-emerald-500 hover:text-white">
                        <MessageCircle size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
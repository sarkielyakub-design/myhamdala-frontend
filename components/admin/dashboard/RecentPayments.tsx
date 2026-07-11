import Link from "next/link";

import {
  Eye,
  CreditCard,
  Calendar,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

interface Props {
  payments: any[];
}

export default function RecentPayments({
  payments,
}: Props) {
  const recent = payments.slice(0, 6);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <div>
          <h2 className="text-2xl font-black text-white">
            Recent Payments
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest payment transactions
          </p>
        </div>

        <Link
          href="/admin/payments"
          className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
        >
          View All
        </Link>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 text-left text-sm text-slate-400">
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Method</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {recent.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-slate-500"
                >
                  No payment records found.
                </td>
              </tr>
            ) : (
              recent.map((payment: any) => (
                <tr
                  key={payment.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  {/* Customer */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 font-bold text-white">
                        {payment.customer_name
                          ?.charAt(0)
                          ?.toUpperCase() || "C"}
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {payment.customer_name ||
                            `${payment.first_name ?? ""} ${payment.surname ?? ""}`.trim() ||
                            "Unknown Customer"}
                        </h3>

                        <p className="text-sm text-slate-400">
                          {payment.reference ||
                            payment.transaction_reference ||
                            "No Reference"}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Amount */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 font-bold text-green-400">
                      <CreditCard size={16} />

                      ₦
                      {Number(
                        payment.amount || 0
                      ).toLocaleString()}
                    </div>
                  </td>

                  {/* Method */}

                  <td className="px-6 py-5">
                    <span className="rounded-xl bg-blue-500/10 px-3 py-2 text-sm text-blue-400">
                      {payment.payment_method ||
                        payment.method ||
                        "Online"}
                    </span>
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    {payment.status === "paid" ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-2 text-xs font-semibold text-green-400">
                        <CheckCircle2 size={14} />
                        Paid
                      </span>
                    ) : payment.status === "pending" ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-2 text-xs font-semibold text-yellow-400">
                        <Clock3 size={14} />
                        Pending
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-2 text-xs font-semibold text-red-400">
                        <XCircle size={14} />
                        Failed
                      </span>
                    )}
                  </td>

                  {/* Date */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar size={16} />

                      {payment.created_at
                        ? new Date(
                            payment.created_at
                          ).toLocaleDateString()
                        : "--"}
                    </div>
                  </td>

                  {/* Action */}

                  <td className="px-6 py-5">
                    <Link
                      href={`/admin/payments/${payment.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      <Eye size={16} />

                      View
                    </Link>
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
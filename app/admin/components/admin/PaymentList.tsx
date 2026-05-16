"use client";

import {
  CheckCircle2,
  Clock3,
  CreditCard,
  Receipt,
  Search,
  Wallet,
  XCircle,
} from "lucide-react";

import { useMemo, useState } from "react";

export default function PaymentList({ payments }: any) {
  const [search, setSearch] = useState("");

  // 🔥 FILTER
  const filteredPayments = useMemo(() => {
    return payments.filter((p: any) => {
      const q = search.toLowerCase();

      return (
        p.reference?.toLowerCase().includes(q) ||
        p.email?.toLowerCase().includes(q) ||
        p.status?.toLowerCase().includes(q)
      );
    });
  }, [payments, search]);

  // 🔥 STATS
  const totalRevenue = payments.reduce(
    (acc: number, item: any) =>
      item.status === "paid"
        ? acc + Number(item.amount || 0)
        : acc,
    0
  );

  const paidCount = payments.filter(
    (p: any) => p.status === "paid"
  ).length;

  const pendingCount = payments.filter(
    (p: any) => p.status !== "paid"
  ).length;

  return (
    <div className="space-y-8">

      {/* 🔥 HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

        <div>
          <h1 className="text-3xl font-bold">
            Payment Management
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor customer transactions, payment references and revenue.
          </p>
        </div>

        {/* 🔍 SEARCH */}
        <div className="relative w-full lg:w-80">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />

          <input
            placeholder="Search payment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-yellow-500 transition"
          />

        </div>

      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TOTAL */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/20 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Total Revenue
              </p>

              <h2 className="text-3xl font-black mt-2 text-yellow-400">
                ₦{Number(totalRevenue).toLocaleString()}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

              <Wallet className="text-yellow-400" />

            </div>

          </div>

        </div>

        {/* PAID */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-300/5 border border-green-500/20 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Paid Transactions
              </p>

              <h2 className="text-3xl font-black mt-2 text-green-400">
                {paidCount}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">

              <CheckCircle2 className="text-green-400" />

            </div>

          </div>

        </div>

        {/* PENDING */}
        <div className="bg-gradient-to-br from-red-500/10 to-red-300/5 border border-red-500/20 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Pending Payments
              </p>

              <h2 className="text-3xl font-black mt-2 text-red-400">
                {pendingCount}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">

              <Clock3 className="text-red-400" />

            </div>

          </div>

        </div>

      </div>

      {/* 🔥 PAYMENTS LIST */}
      <div className="space-y-5">

        {filteredPayments.length === 0 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-gray-400">
            No payment found
          </div>
        )}

        {filteredPayments.map((p: any) => {

          const isPaid = p.status === "paid";

          return (
            <div
              key={p.id}
              className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:border-yellow-500/30 transition-all duration-300"
            >

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                {/* 🔥 LEFT */}
                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      isPaid
                        ? "bg-green-500/20"
                        : "bg-yellow-500/20"
                    }`}
                  >

                    <CreditCard
                      className={
                        isPaid
                          ? "text-green-400"
                          : "text-yellow-400"
                      }
                    />

                  </div>

                  {/* DETAILS */}
                  <div className="space-y-2">

                    <div className="flex items-center gap-3 flex-wrap">

                      <h2 className="text-xl font-bold">
                        {p.reference}
                      </h2>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isPaid
                            ? "bg-green-500/20 text-green-400 border border-green-500/20"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
                        }`}
                      >
                        {p.status}
                      </span>

                    </div>

                    <p className="text-gray-400 text-sm">
                      📧 {p.email || "No email"}
                    </p>

                    <div className="flex flex-wrap gap-5 pt-2 text-sm text-gray-400">

                      <div className="flex items-center gap-2">

                        <Receipt size={15} />

                        Payment ID: {p.id}

                      </div>

                      {p.created_at && (
                        <div>
                          📅{" "}
                          {new Date(
                            p.created_at
                          ).toLocaleDateString()}
                        </div>
                      )}

                    </div>

                  </div>

                </div>

                {/* 🔥 RIGHT */}
                <div className="flex flex-col lg:items-end gap-3">

                  <div className="text-right">

                    <p className="text-gray-400 text-sm">
                      Amount
                    </p>

                    <h2 className="text-3xl font-black text-yellow-400">
                      ₦
                      {Number(p.amount || 0).toLocaleString()}
                    </h2>

                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm ${
                      isPaid
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >

                    {isPaid ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <XCircle size={16} />
                    )}

                    {isPaid
                      ? "Transaction Successful"
                      : "Awaiting Payment"}

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
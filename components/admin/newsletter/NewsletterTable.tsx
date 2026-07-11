"use client";

import Link from "next/link";

import {
  Eye,
  Trash2,
  Mail,
  Calendar,
  Globe,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface Props {
  subscribers: any[];
}

export default function NewsletterTable({
  subscribers,
}: Props) {

  return (

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Newsletter Subscribers
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Manage all newsletter subscribers.
          </p>

        </div>

        <span className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black">

          {subscribers.length} Subscribers

        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">
                Subscriber
              </th>

              <th className="px-6 py-4">
                Country
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4">
                Joined
              </th>

              <th className="px-6 py-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {subscribers.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-20 text-center text-slate-500"
                >

                  No subscribers found.

                </td>

              </tr>

            ) : (

              subscribers.map((subscriber: any) => (

                <tr
                  key={subscriber.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  {/* Subscriber */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 font-bold text-black">

                        {(subscriber.name || subscriber.email)
                          ?.charAt(0)
                          ?.toUpperCase()}

                      </div>

                      <div>

                        <h3 className="font-semibold text-white">

                          {subscriber.name || "Newsletter User"}

                        </h3>

                        <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">

                          <Mail
                            size={14}
                            className="text-yellow-400"
                          />

                          {subscriber.email}

                        </div>

                      </div>

                    </div>

                  </td>

                  {/* Country */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-white">

                      <Globe
                        size={16}
                        className="text-blue-400"
                      />

                      {subscriber.country || "Nigeria"}

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    {subscriber.status === "active" ? (

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-2 text-xs font-semibold text-green-400">

                        <CheckCircle2 size={14} />

                        Active

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-2 text-xs font-semibold text-red-400">

                        <XCircle size={14} />

                        Inactive

                      </span>

                    )}

                  </td>

                  {/* Date */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-slate-300">

                      <Calendar
                        size={16}
                        className="text-purple-400"
                      />

                      {subscriber.created_at
                        ? new Date(
                            subscriber.created_at
                          ).toLocaleDateString()
                        : "--"}

                    </div>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex gap-2">

                      <Link
                        href={`/admin/newsletter/${subscriber.id}`}
                        className="rounded-xl bg-blue-500/20 p-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                      >

                        <Eye size={18} />

                      </Link>

                      <button
                        className="rounded-xl bg-red-500/20 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                      >

                        <Trash2 size={18} />

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
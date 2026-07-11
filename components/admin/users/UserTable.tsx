"use client";

import Link from "next/link";

import {
  Eye,
  Mail,
  Phone,
  MessageCircle,
  ShieldCheck,
  ShieldX,
} from "lucide-react";

interface Props {
  users: any[];
}

export default function UserTable({
  users = [],
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827']">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Customers
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Manage registered customers and contact them.
          </p>

        </div>

        <span className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black">

          {users.length} Customers

        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">Customer</th>

              <th className="px-6 py-4">Email</th>

              <th className="px-6 py-4">Phone</th>

              <th className="px-6 py-4">Role</th>

              <th className="px-6 py-4">Verified</th>

              <th className="px-6 py-4">Joined</th>

              <th className="px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {users.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="py-20 text-center text-slate-500"
                >

                  No customers found.

                </td>

              </tr>

            ) : (

              users.map((user: any) => (                <tr
                  key={user.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  {/* Customer */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black text-black">

                        {user.name
                          ?.charAt(0)
                          ?.toUpperCase()}

                      </div>

                      <div>

                        <h3 className="font-bold text-white">

                          {user.name}

                        </h3>

                        <p className="mt-1 text-sm text-slate-400">

                          ID #{user.id}

                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Email */}

                  <td className="px-6 py-5">

                    <span className="text-slate-300">

                      {user.email}

                    </span>

                  </td>

                  {/* Phone */}

                  <td className="px-6 py-5">

                    <span className="text-slate-300">

                      {user.phone || "--"}

                    </span>

                  </td>

                  {/* Role */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${
                        user.is_admin
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >

                      {user.is_admin
                        ? "Administrator"
                        : "Customer"}

                    </span>

                  </td>

                  {/* Verification */}

                  <td className="px-6 py-5">

                    {user.is_verified ? (

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-2 text-xs font-semibold text-green-400">

                        <ShieldCheck size={14} />

                        Verified

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-2 text-xs font-semibold text-red-400">

                        <ShieldX size={14} />

                        Pending

                      </span>

                    )}

                  </td>

                  {/* Joined */}

                  <td className="px-6 py-5">

                    <span className="text-slate-300">

                      {user.created_at
                        ? new Date(
                            user.created_at
                          ).toLocaleDateString()
                        : "--"}

                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex flex-wrap gap-2">

                      <Link
                        href={`/admin/users/${user.id}`}
                        className="rounded-xl bg-blue-500/20 p-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                      >

                        <Eye size={18} />

                      </Link>

                      <a
                        href={`mailto:${user.email}`}
                        className="rounded-xl bg-green-500/20 p-3 text-green-400 transition hover:bg-green-500 hover:text-white"
                      >

                        <Mail size={18} />

                      </a>

                      <a
                        href={`tel:${user.phone}`}
                        className="rounded-xl bg-cyan-500/20 p-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                      >

                        <Phone size={18} />

                      </a>

                      <a
                        href={`https://wa.me/${(user.phone || "").replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400 transition hover:bg-emerald-500 hover:text-white"
                      >

                        <MessageCircle size={18} />

                      </a>

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
"use client";

import Link from "next/link";

import {
  Eye,
  Reply,
  Trash2,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock3,
  Archive,
} from "lucide-react";

interface Props {
  contacts: any[];
}

export default function ContactTable({
  contacts,
}: Props) {

  return (

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Contact Messages
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Manage all customer enquiries.
          </p>

        </div>

        <span className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black">

          {contacts.length} Messages

        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">Customer</th>

              <th className="px-6 py-4">Subject</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Received</th>

              <th className="px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {contacts.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-20 text-center text-slate-500"
                >

                  No contact messages found.

                </td>

              </tr>

            ) : (

              contacts.map((contact: any) => (

                <tr
                  key={contact.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  {/* Customer */}

                  <td className="px-6 py-5">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 font-bold text-black">

                        {(contact.name || "U")
                          .charAt(0)
                          .toUpperCase()}

                      </div>

                      <div>

                        <h3 className="font-semibold text-white">

                          {contact.name}

                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">

                          <Mail
                            size={14}
                            className="text-yellow-400"
                          />

                          {contact.email}

                        </div>

                        <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">

                          <Phone
                            size={14}
                            className="text-green-400"
                          />

                          {contact.phone || "--"}

                        </div>

                      </div>

                    </div>

                  </td>

                  {/* Subject */}

                  <td className="px-6 py-5">

                    <h4 className="font-semibold text-white">

                      {contact.subject}

                    </h4>

                    <p className="mt-2 line-clamp-2 text-sm text-slate-400">

                      {contact.message}

                    </p>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    {contact.status === "unread" && (

                      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-2 text-xs font-semibold text-yellow-400">

                        <Clock3 size={14} />

                        Unread

                      </span>

                    )}

                    {contact.status === "read" && (

                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-2 text-xs font-semibold text-blue-400">

                        <Eye size={14} />

                        Read

                      </span>

                    )}

                    {contact.status === "replied" && (

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-2 text-xs font-semibold text-green-400">

                        <CheckCircle2 size={14} />

                        Replied

                      </span>

                    )}

                    {contact.status === "archived" && (

                      <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3 py-2 text-xs font-semibold text-purple-400">

                        <Archive size={14} />

                        Archived

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

                      {contact.created_at
                        ? new Date(
                            contact.created_at
                          ).toLocaleDateString()
                        : "--"}

                    </div>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex gap-2">

                      <Link
                        href={`/admin/contact/${contact.id}`}
                        className="rounded-xl bg-blue-500/20 p-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                      >

                        <Eye size={18} />

                      </Link>

                      <button
                        className="rounded-xl bg-green-500/20 p-3 text-green-400 transition hover:bg-green-500 hover:text-white"
                      >

                        <Reply size={18} />

                      </button>

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
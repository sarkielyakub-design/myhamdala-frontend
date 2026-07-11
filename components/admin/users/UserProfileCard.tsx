"use client";

import {
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  ShieldCheck,
  ShieldX,
  UserCircle2,
  Pencil,
} from "lucide-react";

import Link from "next/link";

interface Props {
  user: any;
}

export default function UserProfileCard({
  user,
}: Props) {

  return (

    <div className="rounded-3xl border border-white/10 bg-[#111827] overflow-hidden">

      {/* ==========================
          HEADER
      ========================== */}

      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-10">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-6">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl font-black text-black">

              {user.name?.charAt(0)?.toUpperCase()}

            </div>

            <div>

              <h1 className="text-4xl font-black text-black">

                {user.name}

              </h1>

              <p className="mt-2 text-lg text-black/80">

                Customer ID #{user.id}

              </p>

            </div>

          </div>

          <Link
            href={`/admin/users/edit/${user.id}`}
            className="flex items-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-900"
          >

            <Pencil size={18} />

            Edit Customer

          </Link>

        </div>

      </div>

      {/* ==========================
          BODY
      ========================== */}

      <div className="grid gap-8 p-8 lg:grid-cols-2">        {/* ==========================
            PERSONAL INFORMATION
        ========================== */}

        <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-8">

          <h2 className="mb-8 text-2xl font-black text-white">
            Personal Information
          </h2>

          <div className="space-y-6">

            <div>

              <p className="text-sm text-slate-500">
                Full Name
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                {user.name}
              </p>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Email Address
              </p>

              <div className="mt-2 flex items-center gap-3 text-white">

                <Mail
                  size={18}
                  className="text-yellow-400"
                />

                {user.email}

              </div>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Phone Number
              </p>

              <div className="mt-2 flex items-center gap-3 text-white">

                <Phone
                  size={18}
                  className="text-green-400"
                />

                {user.phone || "Not Available"}

              </div>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Account Type
              </p>

              <span
                className={`mt-2 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                  user.is_admin
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >

                {user.is_admin
                  ? "Administrator"
                  : "Customer"}

              </span>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Verification
              </p>

              {user.is_verified ? (

                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400">

                  <ShieldCheck size={18} />

                  Verified

                </div>

              ) : (

                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-red-400">

                  <ShieldX size={18} />

                  Not Verified

                </div>

              )}

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Registered
              </p>

              <div className="mt-2 flex items-center gap-3 text-white">

                <Calendar
                  size={18}
                  className="text-cyan-400"
                />

                {user.created_at
                  ? new Date(
                      user.created_at
                    ).toLocaleString()
                  : "--"}

              </div>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Last Updated
              </p>

              <div className="mt-2 flex items-center gap-3 text-white">

                <Calendar
                  size={18}
                  className="text-purple-400"
                />

                {user.updated_at
                  ? new Date(
                      user.updated_at
                    ).toLocaleString()
                  : "--"}

              </div>

            </div>

          </div>

        </div>        {/* ==========================
            QUICK ACTIONS
        ========================== */}

        <div className="space-y-8">

          <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-8">

            <h2 className="mb-8 text-2xl font-black text-white">
              Quick Actions
            </h2>

            <div className="grid gap-4">

              <a
                href={`mailto:${user.email}`}
                className="flex items-center gap-4 rounded-2xl bg-blue-500/20 p-4 text-blue-400 transition hover:bg-blue-500 hover:text-white"
              >

                <Mail size={22} />

                Send Email

              </a>

              <a
                href={`tel:${user.phone}`}
                className="flex items-center gap-4 rounded-2xl bg-cyan-500/20 p-4 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
              >

                <Phone size={22} />

                Call Customer

              </a>

              <a
                href={`https://wa.me/${(user.phone || "").replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-green-500/20 p-4 text-green-400 transition hover:bg-green-500 hover:text-white"
              >

                <MessageCircle size={22} />

                WhatsApp Customer

              </a>

            </div>

          </div>

          {/* Passport */}

          <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-8">

            <h2 className="text-2xl font-black text-white">
              Passport Information
            </h2>

            <div className="mt-6 space-y-4">

              <div>

                <p className="text-sm text-slate-500">
                  Passport Number
                </p>

                <p className="mt-1 text-white">
                  {user.passport_number || "Not Added"}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Passport Expiry
                </p>

                <p className="mt-1 text-white">
                  {user.passport_expiry || "Not Added"}
                </p>

              </div>

            </div>

          </div>

          {/* Address */}

          <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-8">

            <h2 className="text-2xl font-black text-white">
              Address
            </h2>

            <div className="mt-6 space-y-4">

              <p className="text-white">
                {user.address || "No address available"}
              </p>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-sm text-slate-500">
                    City
                  </p>

                  <p className="mt-1 text-white">
                    {user.city || "--"}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Country
                  </p>

                  <p className="mt-1 text-white">
                    {user.country || "--"}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Emergency Contact */}

          <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-8">

            <h2 className="text-2xl font-black text-white">
              Emergency Contact
            </h2>

            <div className="mt-6 space-y-4">

              <div>

                <p className="text-sm text-slate-500">
                  Contact Name
                </p>

                <p className="mt-1 text-white">
                  {user.emergency_contact_name || "Not Added"}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Phone Number
                </p>

                <p className="mt-1 text-white">
                  {user.emergency_contact_phone || "Not Added"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
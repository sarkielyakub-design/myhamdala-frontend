"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
  Plane,
  Hotel,
  Users,
  Star,
} from "lucide-react";

interface Props {
  packages: any[];
}

export default function PackageTable({
  packages,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Packages
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Manage travel packages
          </p>

        </div>

        <span className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black">
          {packages.length} Packages
        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="px-6 py-4">Package</th>

              <th className="px-6 py-4">Category</th>

              <th className="px-6 py-4">Price</th>

              <th className="px-6 py-4">Flight</th>

              <th className="px-6 py-4">Hotel</th>

              <th className="px-6 py-4">Slots</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {packages.length === 0 ? (

              <tr>

                <td
                  colSpan={8}
                  className="py-20 text-center text-slate-500"
                >
                  No packages available.
                </td>

              </tr>

            ) : (

              packages.map((pkg: any) => (

                <tr
                  key={pkg.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  {/* Package */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="relative h-20 w-28 overflow-hidden rounded-2xl">

                        <Image
                          src={
                            pkg.image ||
                            pkg.image_url ||
                            "/images/package-placeholder.jpg"
                          }
                          alt={pkg.title}
                          fill
                          className="object-cover"
                        />

                      </div>

                      <div>

                        <h3 className="font-bold text-white">

                          {pkg.title}

                        </h3>

                        <p className="mt-1 text-sm text-slate-400 line-clamp-2">

                          {pkg.description}

                        </p>

                        {pkg.featured && (

                          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">

                            <Star size={12} />

                            Featured

                          </span>

                        )}

                      </div>

                    </div>

                  </td>

                  {/* Category */}

                  <td className="px-6 py-5">

                    <span className="rounded-full bg-blue-500/20 px-3 py-2 text-sm text-blue-400">

                      {pkg.category}

                    </span>

                  </td>

                  {/* Price */}

                  <td className="px-6 py-5">

                    <span className="font-bold text-green-400">

                      ₦{Number(pkg.price).toLocaleString()}

                    </span>

                  </td>

                  {/* Flight */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-white">

                      <Plane
                        size={16}
                        className="text-yellow-400"
                      />

                      {pkg.flight_name || "--"}

                    </div>

                  </td>

                  {/* Hotel */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-white">

                      <Hotel
                        size={16}
                        className="text-blue-400"
                      />

                      {pkg.hotel_name || "--"}

                    </div>

                  </td>

                  {/* Slots */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <Users
                        size={16}
                        className="text-purple-400"
                      />

                      {pkg.booked_slots || 0} / {pkg.total_slots}

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${
                        pkg.is_active
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >

                      {pkg.is_active
                        ? "Active"
                        : "Inactive"}

                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex gap-2">

                     <Link
  href={`/packages/${pkg.id}`}
  className="rounded-xl bg-blue-500/20 p-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
>
  <Eye size={18} />
</Link>

                      <Link
                        href={`/admin/packages/edit/${pkg.id}`}
                        className="rounded-xl bg-yellow-500/20 p-3 text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                      >

                        <Pencil size={18} />

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
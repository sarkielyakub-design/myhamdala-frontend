"use client";

import CreatePackage from "@/components/admin/packages/CreatePackage";

export default function CreatePackagePage() {
  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h1 className="text-4xl font-black text-white">
          Create Travel Package
        </h1>

        <p className="mt-3 text-slate-400">
          Create Hajj, Umrah, Flight, Visa or Holiday travel packages for customers.
        </p>

      </div>

      <CreatePackage />

    </div>
  );
}
"use client";

import WebsiteSettingsForm from "@/components/admin/settings/WebsiteSettingsForm";

export default function WebsiteSettingsPage() {
  return (
    <div className="space-y-8">

      {/* ===========================
          PAGE HEADER
      =========================== */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-black text-white">
              Website Settings
            </h1>

            <p className="mt-3 max-w-3xl text-slate-400">
              Configure your company information, branding,
              contact details, social media links, SEO,
              business hours, booking links, Google Maps,
              logo and favicon from one place.
            </p>

          </div>

        </div>

      </div>

      {/* ===========================
          SETTINGS FORM
      =========================== */}

      <WebsiteSettingsForm />

    </div>
  );
}
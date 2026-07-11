"use client";

import { useState } from "react";

import {
  IdCard,
  Globe,
  Calendar,
  Upload,
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "lucide-react";

import { useBooking } from "./BookingContext";

export default function PassportForm() {

  const {
    booking,
    updatePassport,
    nextStep,
    previousStep,
  } = useBooking();

  const passport = booking.passport;


  const [errors, setErrors] =
    useState<Record<string, string>>({});

  function validate() {

    const e: Record<string, string> = {};

    if (!passport.passport_number.trim()) {
      e.passport_number =
        "Passport number is required";
    }

    if (!passport.issue_country.trim()) {
      e.issue_country =
        "Issuing country is required";
    }

    if (!passport.issue_date) {
      e.issue_date =
        "Issue date is required";
    }

    if (!passport.expiry_date) {
      e.expiry_date =
        "Expiry date is required";
    }

    if (!passport.passport_file) {
      e.passport_file =
        "Passport upload is required";
    }

    setErrors(e);

    if (Object.keys(e).length === 0) {
      nextStep();
    }
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-900">
          Passport Information
        </h2>

        <p className="mt-2 text-slate-600">
          Upload your passport details exactly as they appear on your travel document.
        </p>

      </div>

      <form className="space-y-8">

        {/* Passport Number */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Passport Number
          </label>

          <div className="relative">

            <BookOpen
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

          <input
  type="text"
  value={passport.passport_number}
  onChange={(e) =>
    updatePassport({
      passport_number: e.target.value,
    })
  }
  placeholder="Passport Number"
  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-700"
/>

{errors.passport_number && (
  <p className="mt-2 text-sm text-red-600">
    {errors.passport_number}
  </p>
)}
          </div>

        </div>

        {/* Dates */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Issue Date
            </label>

            <div className="relative">

              <Calendar
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

            <input
  type="date"
  value={passport.issue_date}
  onChange={(e) =>
    updatePassport({
      issue_date: e.target.value,
    })
  }
  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-700"
/>

{errors.issue_date && (
  <p className="mt-2 text-sm text-red-600">
    {errors.issue_date}
  </p>
)}
            </div>

          </div>

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Expiry Date
            </label>

            <div className="relative">

              <Calendar
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

            <input
  type="date"
  value={passport.expiry_date}
  onChange={(e) =>
    updatePassport({
      expiry_date: e.target.value,
    })
  }
  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-700"
/>

{errors.expiry_date && (
  <p className="mt-2 text-sm text-red-600">
    {errors.expiry_date}
  </p>
)}
            </div>

          </div>

        </div>

        {/* Place & Country */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Place of Issue
            </label>

           <input
  type="text"
  value={passport.place_of_issue ?? ""}
  onChange={(e) =>
    updatePassport({
      place_of_issue: e.target.value,
    })
  }
  placeholder="Abuja"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
/>
          </div>

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Country of Issue
            </label>

            <div className="relative">

              <Globe
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={passport.issue_country}
                onChange={(e) =>
                  updatePassport({
                    issue_country: e.target.value,
                  })
                }
                placeholder="Nigeria"
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-700"
              />

            </div>

          </div>

        </div>

        {/* Uploads */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-3 block font-semibold text-slate-700">
              Passport Photograph
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-8 transition hover:border-blue-700">

              <Upload
                size={40}
                className="text-blue-700"
              />

              <span className="mt-4 font-semibold">
                Upload Passport Photo
              </span>

              <span className="mt-1 text-sm text-slate-500">
                JPG, PNG (Max 5MB)
              </span>

<input
  type="file"
  accept="image/*"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (file) {
      updatePassport({
        passport_photo: file.name,
      } as any);
    }
  }}
/>

{(passport as any).passport_photo && (
  <p className="mt-3 text-sm text-green-600">
    ✓ {(passport as any).passport_photo}
  </p>
)}

            </label>

          </div>

          <div>

            <label className="mb-3 block font-semibold text-slate-700">
              Passport Data Page
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-8 transition hover:border-blue-700">

              <Upload
                size={40}
                className="text-blue-700"
              />

              <span className="mt-4 font-semibold">
                Upload Passport Scan
              </span>

              <span className="mt-1 text-sm text-slate-500">
                PDF, JPG or PNG
              </span>

              <input
                type="file"
                accept=".pdf,image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    updatePassport({
                      passport_file: file.name,
                    });
                  }
                }}
              />

            </label>

          </div>

        </div>

        {/* Navigation */}

        <div className="flex justify-between">
<div className="flex justify-between">

  <button
    type="button"
    onClick={previousStep}
    className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100"
  >
    Back
  </button>

  <button
    type="button"
    onClick={validate}
    className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
  >
    Continue to Emergency Contact
  </button>

</div>
        </div>

      </form>

    </section>
  );
}
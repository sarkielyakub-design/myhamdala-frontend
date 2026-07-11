"use client";

import { useState } from "react";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

import { useBooking } from "./BookingContext";

export default function EmergencyContact() {

  const {
    booking,
    updateEmergency,
    previousStep,
    nextStep,
  } = useBooking();

  const emergency = booking.emergency;

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  function validate() {

    const validationErrors: Record<
      string,
      string
    > = {};

    if (!emergency.name.trim()) {
      validationErrors.name =
        "Emergency contact name is required";
    }

    if (!emergency.relationship.trim()) {
      validationErrors.relationship =
        "Relationship is required";
    }

    if (!emergency.phone.trim()) {
      validationErrors.phone =
        "Phone number is required";
    }

    if (!emergency.address.trim()) {
      validationErrors.address =
        "Address is required";
    }

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length === 0
    ) {
      nextStep();
    }

  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-900">
          Emergency Contact
        </h2>

        <p className="mt-2 text-slate-600">
          Provide someone we can contact in case of an emergency during your journey.
        </p>

      </div>

      <form className="space-y-8">

        {/* ==========================
        NAME
========================== */}

<div className="grid gap-6 md:grid-cols-2">

  {/* Full Name */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Full Name
    </label>

    <div className="relative">

      <User
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={emergency.name}
        onChange={(e) =>
          updateEmergency({
            name: e.target.value,
          })
        }
        placeholder="Emergency Contact Name"
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.name && (

      <p className="mt-2 text-sm text-red-600">

        {errors.name}

      </p>

    )}

  </div>

  {/* Relationship */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Relationship
    </label>

    <div className="relative">

      <Users
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={emergency.relationship}
        onChange={(e) =>
          updateEmergency({
            relationship: e.target.value,
          })
        }
        placeholder="Father, Mother, Wife..."
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.relationship && (

      <p className="mt-2 text-sm text-red-600">

        {errors.relationship}

      </p>

    )}

  </div>

</div>
       {/* ==========================
      PHONE & EMAIL
========================== */}

<div className="grid gap-6 md:grid-cols-2">

  {/* Phone */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Phone Number
    </label>

    <div className="relative">

      <Phone
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="tel"
        value={emergency.phone}
        onChange={(e) =>
          updateEmergency({
            phone: e.target.value,
          })
        }
        placeholder="+234..."
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.phone && (

      <p className="mt-2 text-sm text-red-600">

        {errors.phone}

      </p>

    )}

  </div>

  {/* Email */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Email (Optional)
    </label>

    <div className="relative">

      <Mail
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="email"
        value={emergency.email}
        onChange={(e) =>
          updateEmergency({
            email: e.target.value,
          })
        }
        placeholder="email@example.com"
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.email && (

      <p className="mt-2 text-sm text-red-600">

        {errors.email}

      </p>

    )}

  </div>

</div>

{/* ==========================
        ADDRESS
========================== */}

<div>

  <label className="mb-2 block font-semibold text-slate-700">
    Address
  </label>

  <div className="relative">

    <MapPin
      size={18}
      className="absolute left-4 top-5 text-slate-400"
    />

    <textarea
      rows={4}
      value={emergency.address}
      onChange={(e) =>
        updateEmergency({
          address: e.target.value,
        })
      }
      placeholder="Enter emergency contact address..."
      className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
    />

  </div>

  {errors.address && (

    <p className="mt-2 text-sm text-red-600">

      {errors.address}

    </p>

  )}

</div>
       {/* ==========================
      NAVIGATION
========================== */}

<div className="flex justify-between">

  <button
    type="button"
    onClick={previousStep}
    className="
      rounded-xl
      border
      border-slate-300
      px-8
      py-4
      font-semibold
      transition
      hover:bg-slate-100
    "
  >
    Back
  </button>

  <button
    type="button"
    onClick={validate}
    className="
      rounded-xl
      bg-blue-700
      px-8
      py-4
      font-semibold
      text-white
      transition
      hover:bg-blue-800
    "
  >
    Continue to Review
  </button>

</div>
      </form>

    </section>
  );
}
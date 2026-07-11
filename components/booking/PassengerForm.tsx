"use client";

import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Calendar,
  Globe,
} from "lucide-react";

import { useBooking } from "./BookingContext";

export default function PassengerForm() {

  const {
    booking,
    updatePassenger,
    nextStep,
  } = useBooking();

  const passenger = booking.passenger;

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  function validate() {

    const validationErrors: Record<string, string> = {};

    if (!passenger.title.trim()) {
      validationErrors.title = "Please select a title";
    }

    if (!passenger.gender.trim()) {
      validationErrors.gender = "Please select gender";
    }

    if (!passenger.first_name.trim()) {
      validationErrors.first_name = "First name is required";
    }

    if (!passenger.last_name.trim()) {
      validationErrors.last_name = "Last name is required";
    }

    if (!passenger.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!passenger.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    }

    if (!passenger.dob.trim()) {
      validationErrors.dob = "Date of birth is required";
    }

    if (!passenger.nationality.trim()) {
      validationErrors.nationality =
        "Nationality is required";
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
          Passenger Information
        </h2>

        <p className="mt-2 text-slate-600">
          Please enter the details exactly as they appear on your passport.
        </p>

      </div>

      <form className="space-y-8">

        {/* Title & Gender */}

        <div className="grid gap-6 md:grid-cols-2">

          {/* Title */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Title
            </label>

            <select
              value={passenger.title}
              onChange={(e) =>
                updatePassenger({
                  title: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            >
              <option value="">
                Select Title
              </option>

              <option value="Mr">
                Mr.
              </option>

              <option value="Mrs">
                Mrs.
              </option>

              <option value="Miss">
                Miss
              </option>

              <option value="Dr">
                Dr.
              </option>

            </select>

            {errors.title && (

              <p className="mt-2 text-sm text-red-600">

                {errors.title}

              </p>

            )}

          </div>

          {/* Gender */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Gender
            </label>

            <select
              value={passenger.gender}
              onChange={(e) =>
                updatePassenger({
                  gender: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

            </select>

            {errors.gender && (

              <p className="mt-2 text-sm text-red-600">

                {errors.gender}

              </p>

            )}

          </div>

        </div>

        {/* Continue with Name Section Below */}

        {/* ===========================
        NAME
=========================== */}

<div className="grid gap-6 md:grid-cols-2">

  {/* First Name */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      First Name
    </label>

    <div className="relative">

      <User
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={passenger.first_name}
        onChange={(e) =>
          updatePassenger({
            first_name: e.target.value,
          })
        }
        placeholder="Enter First Name"
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.first_name && (

      <p className="mt-2 text-sm text-red-600">

        {errors.first_name}

      </p>

    )}

  </div>

  {/* Last Name */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Last Name
    </label>

    <div className="relative">

      <User
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={passenger.last_name}
        onChange={(e) =>
          updatePassenger({
            last_name: e.target.value,
          })
        }
        placeholder="Enter Last Name"
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.last_name && (

      <p className="mt-2 text-sm text-red-600">

        {errors.last_name}

      </p>

    )}

  </div>

</div>

{/* Middle Name */}

<div>

  <label className="mb-2 block font-semibold text-slate-700">
    Middle Name (Optional)
  </label>

  <div className="relative">

    <User
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
    />

    <input
      type="text"
      value={passenger.middle_name}
      onChange={(e) =>
        updatePassenger({
          middle_name: e.target.value,
        })
      }
      placeholder="Enter Middle Name"
      className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
    />

  </div>

</div>
       {/* ===========================
      EMAIL & PHONE
=========================== */}

<div className="grid gap-6 md:grid-cols-2">

  {/* Email */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Email Address
    </label>

    <div className="relative">

      <Mail
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="email"
        value={passenger.email}
        onChange={(e) =>
          updatePassenger({
            email: e.target.value,
          })
        }
        placeholder="example@email.com"
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.email && (

      <p className="mt-2 text-sm text-red-600">
        {errors.email}
      </p>

    )}

  </div>

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
        value={passenger.phone}
        onChange={(e) =>
          updatePassenger({
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

</div>

{/* ===========================
      DOB & NATIONALITY
=========================== */}

<div className="grid gap-6 md:grid-cols-2">

  {/* DOB */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Date of Birth
    </label>

    <div className="relative">

      <Calendar
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="date"
        value={passenger.dob}
        onChange={(e) =>
          updatePassenger({
            dob: e.target.value,
          })
        }
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.dob && (

      <p className="mt-2 text-sm text-red-600">
        {errors.dob}
      </p>

    )}

  </div>

  {/* Nationality */}

  <div>

    <label className="mb-2 block font-semibold text-slate-700">
      Nationality
    </label>

    <div className="relative">

      <Globe
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={passenger.nationality}
        onChange={(e) =>
          updatePassenger({
            nationality: e.target.value,
          })
        }
        placeholder="Nationality"
        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-700"
      />

    </div>

    {errors.nationality && (

      <p className="mt-2 text-sm text-red-600">
        {errors.nationality}
      </p>

    )}

  </div>

</div>
        {/* Continue */}

        <div className="flex justify-end">

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
    Continue to Passport Details
</button>
        </div>

      </form>

    </section>
  );
}
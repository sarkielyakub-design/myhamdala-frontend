"use client";

import Link from "next/link";

import {
  Calendar,
  Hotel,
  Plane,
  Users,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";

interface Props {
  package: any;
}

export default function PackageSidebar({
  package: pkg,
}: Props) {

  const availableSlots =
    pkg.total_slots - pkg.booked_slots;

  return (
    <aside
      className="
        lg:sticky
        lg:top-24
        space-y-6
      "
    >

      {/* Booking Card */}

      <div
        className="
          rounded-3xl
          bg-white
          p-8
          shadow-lg
        "
      >

        <p className="text-slate-500">
          Starting From
        </p>

        <h2
          className="
            mt-2
            text-5xl
            font-black
            text-blue-700
          "
        >
          ₦{Number(pkg.price).toLocaleString()}
        </h2>

        <p className="mt-2 text-slate-500">
          Per Person
        </p>

        <div className="my-8 border-t border-slate-200" />

        {/* Information */}

        <div className="space-y-5">

          <div className="flex items-center gap-4">

            <Calendar
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-xs text-slate-500">
                Departure
              </p>

              <p className="font-semibold">
                {pkg.departure_date}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Calendar
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-xs text-slate-500">
                Return
              </p>

              <p className="font-semibold">
                {pkg.return_date}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Plane
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-xs text-slate-500">
                Flight
              </p>

              <p className="font-semibold">
                {pkg.flight_from} → {pkg.flight_to}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Hotel
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-xs text-slate-500">
                Hotel
              </p>

              <p className="font-semibold">
                {pkg.hotel_name}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Users
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-xs text-slate-500">
                Remaining Slots
              </p>

              <p className="font-semibold text-green-600">
                {availableSlots} Available
              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 space-y-4">

          <Link
            href={`/booking?package=${pkg.id}`}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-blue-700
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-800
            "
          >
            Book Now
          </Link>

          <a
            href="https://wa.me/2348034454580"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border-2
              border-green-600
              py-4
              font-semibold
              text-green-600
              transition
              hover:bg-green-50
            "
          >
            <MessageCircle size={20} />

            Chat on WhatsApp
          </a>

        </div>

      </div>

      {/* Trust Card */}

      <div
        className="
          rounded-3xl
          bg-blue-700
          p-8
          text-white
        "
      >

        <ShieldCheck
          size={42}
          className="text-yellow-400"
        />

        <h3 className="mt-6 text-2xl font-bold">
          Safe & Secure Booking
        </h3>

        <p className="mt-4 leading-8 text-blue-100">
          Book confidently with M.Y Hamdala Travel & Tour.
          We provide trusted travel services, verified hotel
          reservations, visa assistance and dedicated customer
          support throughout your journey.
        </p>

        <div className="mt-8 flex items-center gap-3">

          <Phone size={20} />

          <span className="font-semibold">
            +234 803 445 4580
          </span>

        </div>

      </div>

    </aside>
  );
}
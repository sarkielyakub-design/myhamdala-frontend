"use client";

import Link from "next/link";

import {
  Calendar,
  Plane,
  Hotel,
  Users,
  ShieldCheck,
  Phone,
  MessageCircle,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

interface Props {
  package: any;
}

export default function BookingSidebar({
  package: pkg,
}: Props) {
  if (!pkg) return null;

  const availableSeats =
    (pkg.total_slots || 0) -
    (pkg.booked_slots || 0);

  return (
    <aside className="sticky top-28 space-y-6">

      {/* Price Card */}

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white">

          <p className="text-sm uppercase tracking-widest opacity-80">
            Starting From
          </p>

          <h2 className="mt-2 text-5xl font-black">
            ₦{Number(pkg.price || 0).toLocaleString()}
          </h2>

          <p className="mt-2 text-sm opacity-80">
            Per Person
          </p>

        </div>

        <div className="space-y-5 p-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Calendar
                size={20}
                className="text-blue-700"
              />

              <span>Duration</span>

            </div>

            <strong>
              {pkg.duration_days} Days
            </strong>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Plane
                size={20}
                className="text-blue-700"
              />

              <span>Flight</span>

            </div>

            <strong>
              {pkg.flight_from} → {pkg.flight_to}
            </strong>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Hotel
                size={20}
                className="text-blue-700"
              />

              <span>Hotel</span>

            </div>

            <strong>
              {pkg.hotel_name}
            </strong>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Users
                size={20}
                className="text-blue-700"
              />

              <span>Available Seats</span>

            </div>

            <strong className="text-green-600">
              {availableSeats}
            </strong>

          </div>

          <button
            className="
              mt-4
              w-full
              rounded-2xl
              bg-blue-700
              py-4
              text-lg
              font-bold
              text-white
              transition
              hover:bg-blue-800
            "
          >
            Continue Booking
          </button>

        </div>

      </div>

      {/* Security */}

      <div className="rounded-3xl bg-white p-6 shadow-lg">

        <div className="mb-4 flex items-center gap-3">

          <ShieldCheck
            className="text-green-600"
            size={24}
          />

          <h3 className="text-xl font-bold">
            Secure Booking
          </h3>

        </div>

        <div className="space-y-3">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            SSL Encrypted Booking

          </div>

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            Secure Online Payment

          </div>

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            Official Travel Agency

          </div>

          <div className="flex items-center gap-3">

            <CreditCard
              size={18}
              className="text-blue-700"
            />

            Bank Transfer Supported

          </div>

        </div>

      </div>

      {/* Contact */}

      <div className="rounded-3xl bg-white p-6 shadow-lg">

        <h3 className="text-xl font-bold">
          Need Assistance?
        </h3>

        <p className="mt-2 text-slate-600">
          Our travel consultants are available to help you complete your booking.
        </p>

        <div className="mt-6 space-y-3">

          <a
            href="tel:+2348034454580"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-blue-700
              py-4
              font-semibold
              text-blue-700
              transition
              hover:bg-blue-50
            "
          >
            <Phone size={18} />

            Call Us
          </a>

          <a
            href="https://wa.me/2348034454580"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-green-600
              py-4
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            <MessageCircle size={18} />

            WhatsApp
          </a>

        </div>

      </div>

      {/* Policy */}

      <div className="rounded-3xl bg-blue-50 p-6">

        <h4 className="font-bold text-blue-900">
          Booking Policy
        </h4>

        <ul className="mt-4 space-y-2 text-sm text-slate-700">

          <li>• Booking confirmation after payment.</li>

          <li>• Passport must be valid for at least 6 months.</li>

          <li>• Travel documents are required before departure.</li>

          <li>• Prices are subject to airline availability.</li>

        </ul>

      </div>

    </aside>
  );
}
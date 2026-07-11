"use client";

import {
  User,
  IdCard,
  Phone,
  Plane,
  Hotel,
  Calendar,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

interface Props {
  package: any;
  booking: any;
}

export default function ReviewBooking({
  package: pkg,
  booking,
}: Props) {

  if (!pkg) return null;

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-10">

        <h2 className="text-3xl font-black text-slate-900">
          Review Your Booking
        </h2>

        <p className="mt-2 text-slate-600">
          Please review every detail carefully before making payment.
        </p>

      </div>

      {/* Package */}

      <div className="rounded-2xl bg-slate-50 p-6">

        <div className="flex items-center gap-3">

          <Plane
            className="text-blue-700"
            size={24}
          />

          <h3 className="text-2xl font-bold">
            Selected Package
          </h3>

        </div>

        <div className="mt-6 space-y-3">

          <p>
            <strong>Package:</strong> {pkg.title}
          </p>

          <p>
            <strong>Hotel:</strong> {pkg.hotel_name}
          </p>

          <p>
            <strong>Flight:</strong> {pkg.flight_from} → {pkg.flight_to}
          </p>

          <p>
            <strong>Departure:</strong> {pkg.departure_date}
          </p>

          <p>
            <strong>Return:</strong> {pkg.return_date}
          </p>

          <p>
            <strong>Price:</strong> ₦
            {Number(pkg.price).toLocaleString()}
          </p>

        </div>

      </div>

      {/* Passenger */}

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">

        <div className="flex items-center gap-3">

          <User
            className="text-blue-700"
            size={24}
          />

          <h3 className="text-2xl font-bold">
            Passenger
          </h3>

        </div>

        <div className="mt-6 space-y-3">

          <p>
            <strong>Name:</strong>{" "}
            {booking.first_name} {booking.last_name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {booking.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {booking.phone}
          </p>

          <p>
            <strong>Nationality:</strong>{" "}
            {booking.nationality}
          </p>

        </div>

      </div>

      {/* Passport */}

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">

        <div className="flex items-center gap-3">

          <IdCard
            className="text-blue-700"
            size={24}
          />

          <h3 className="text-2xl font-bold">
            Passport
          </h3>

        </div>

        <div className="mt-6 space-y-3">

          <p>

            <strong>Passport No:</strong>{" "}
            {booking.passport_number}

          </p>

          <p>

            <strong>Issue Date:</strong>{" "}
            {booking.passport_issue_date}

          </p>

          <p>

            <strong>Expiry Date:</strong>{" "}
            {booking.passport_expiry_date}

          </p>

          <p>

            <strong>Country:</strong>{" "}
            {booking.country_of_issue}

          </p>

        </div>

      </div>

      {/* Emergency */}

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">

        <div className="flex items-center gap-3">

          <Phone
            className="text-blue-700"
            size={24}
          />

          <h3 className="text-2xl font-bold">
            Emergency Contact
          </h3>

        </div>

        <div className="mt-6 space-y-3">

          <p>

            <strong>Name:</strong>{" "}
            {booking.emergency_name}

          </p>

          <p>

            <strong>Relationship:</strong>{" "}
            {booking.relationship}

          </p>

          <p>

            <strong>Phone:</strong>{" "}
            {booking.emergency_phone}

          </p>

        </div>

      </div>

      {/* Price */}

      <div
        className="
          mt-10
          rounded-3xl
          bg-blue-700
          p-8
          text-white
        "
      >

        <div className="flex items-center gap-3">

          <CreditCard size={30} />

          <h3 className="text-3xl font-black">

            Payment Summary

          </h3>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-xl">

            Total Amount

          </span>

          <span className="text-5xl font-black">

            ₦{Number(pkg.price).toLocaleString()}

          </span>

        </div>

      </div>

      {/* Terms */}

      <div className="mt-8 flex items-start gap-3">

        <input
          type="checkbox"
          className="mt-1 h-5 w-5"
        />

        <p className="text-slate-600">

          I confirm that all information provided is
          correct and I agree to the Terms &
          Conditions of M.Y Hamdala Travel & Tour.

        </p>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex justify-between">

        <button
          className="
            rounded-xl
            border
            border-slate-300
            px-8
            py-4
            font-semibold
          "
        >
          Back
        </button>

        <button
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-blue-700
            px-8
            py-4
            font-semibold
            text-white
          "
        >

          <CheckCircle2 size={20} />

          Proceed to Payment

        </button>

      </div>

    </section>
  );
}
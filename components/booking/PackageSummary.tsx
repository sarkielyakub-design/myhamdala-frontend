import Image from "next/image";

import {
  Plane,
  Hotel,
  Calendar,
  Clock3,
  Users,
} from "lucide-react";

interface Props {
  package: any;
}

export default function PackageSummary({
  package: pkg,
}: Props) {

  if (!pkg) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Package Not Found
        </h2>

        <p className="mt-4 text-slate-600">
          Please go back and select a valid travel package.
        </p>
      </div>
    );
  }

  const availableSlots =
    pkg.total_slots - pkg.booked_slots;

  return (
    <section className="rounded-3xl bg-white shadow-sm overflow-hidden">

      {/* Header */}

      <div className="bg-blue-700 px-8 py-6">

        <h2 className="text-3xl font-black text-white">
          Booking Summary
        </h2>

        <p className="mt-2 text-blue-100">
          Please review your selected package before continuing.
        </p>

      </div>

      {/* Content */}

      <div className="grid lg:grid-cols-3">

        {/* Image */}

        <div className="relative h-80 lg:h-full">

          <Image
            src={pkg.image_url}
            alt={pkg.title}
            fill
            className="object-cover"
          />

        </div>

        {/* Details */}

        <div className="lg:col-span-2 p-8">

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            {pkg.category}
          </span>

          <h1
            className="
              mt-5
              text-4xl
              font-black
              text-slate-900
            "
          >
            {pkg.title}
          </h1>

          <p
            className="
              mt-5
              leading-8
              text-slate-600
            "
          >
            {pkg.description}
          </p>

          {/* Information */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="flex items-center gap-3">

              <Hotel
                size={22}
                className="text-blue-700"
              />

              <div>

                <p className="text-sm text-slate-500">
                  Hotel
                </p>

                <p className="font-semibold">
                  {pkg.hotel_name}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Plane
                size={22}
                className="text-blue-700"
              />

              <div>

                <p className="text-sm text-slate-500">
                  Flight
                </p>

                <p className="font-semibold">
                  {pkg.flight_from} → {pkg.flight_to}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Calendar
                size={22}
                className="text-blue-700"
              />

              <div>

                <p className="text-sm text-slate-500">
                  Departure
                </p>

                <p className="font-semibold">
                  {pkg.departure_date}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Clock3
                size={22}
                className="text-blue-700"
              />

              <div>

                <p className="text-sm text-slate-500">
                  Duration
                </p>

                <p className="font-semibold">
                  {pkg.duration_days} Days
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Users
                size={22}
                className="text-blue-700"
              />

              <div>

                <p className="text-sm text-slate-500">
                  Available Slots
                </p>

                <p className="font-semibold text-green-600">
                  {availableSlots}
                </p>

              </div>

            </div>

          </div>

          {/* Price */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-between
              rounded-2xl
              bg-slate-100
              p-6
            "
          >

            <div>

              <p className="text-slate-500">
                Total Price
              </p>

              <h2
                className="
                  mt-2
                  text-4xl
                  font-black
                  text-blue-700
                "
              >
                ₦{Number(pkg.price).toLocaleString()}
              </h2>

              <p className="text-slate-500">
                Per Person
              </p>

            </div>

            <div
              className="
                rounded-full
                bg-green-100
                px-5
                py-3
                font-semibold
                text-green-700
              "
            >
              Available
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
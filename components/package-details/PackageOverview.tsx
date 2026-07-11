import {
  CheckCircle2,
  CalendarDays,
  Hotel,
  Plane,
  Clock3,
} from "lucide-react";

interface Props {
  package: any;
}

export default function PackageOverview({
  package: pkg,
}: Props) {
  return (
    <div className="space-y-10">

      {/* =========================
            Overview
      ========================= */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-3xl font-black text-slate-900">
          Package Overview
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          {pkg.description}
        </p>

      </div>

      {/* =========================
            Journey Details
      ========================= */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-3xl font-black text-slate-900">
          Journey Details
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="flex items-center gap-4">

            <Plane
              size={24}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Flight Route
              </p>

              <h3 className="font-semibold">
                {pkg.flight_from} → {pkg.flight_to}
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Hotel
              size={24}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Hotel
              </p>

              <h3 className="font-semibold">
                {pkg.hotel_name}
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <CalendarDays
              size={24}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Departure
              </p>

              <h3 className="font-semibold">
                {pkg.departure_date}
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Clock3
              size={24}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Duration
              </p>

              <h3 className="font-semibold">
                {pkg.duration_days} Days
              </h3>

            </div>

          </div>

        </div>

      </div>      {/* =========================
            What's Included
      ========================= */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-3xl font-black text-slate-900">
          What's Included
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <div className="flex gap-3">

            <CheckCircle2
              className="text-green-600"
            />

            <span>Return Flight Ticket</span>

          </div>

          <div className="flex gap-3">

            <CheckCircle2
              className="text-green-600"
            />

            <span>Umrah Visa Processing</span>

          </div>

          <div className="flex gap-3">

            <CheckCircle2
              className="text-green-600"
            />

            <span>Hotel Accommodation</span>

          </div>

          <div className="flex gap-3">

            <CheckCircle2
              className="text-green-600"
            />

            <span>Airport Transfers</span>

          </div>

          <div className="flex gap-3">

            <CheckCircle2
              className="text-green-600"
            />

            <span>Guided Umrah Services</span>

          </div>

          <div className="flex gap-3">

            <CheckCircle2
              className="text-green-600"
            />

            <span>24/7 Customer Support</span>

          </div>

        </div>

      </div>

    </div>
  );
}
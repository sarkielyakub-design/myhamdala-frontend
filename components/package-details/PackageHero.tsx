import Image from "next/image";

import {
  Plane,
  Calendar,
  Hotel,
  Star,
} from "lucide-react";

interface Props {
  package: any;
}

export default function PackageHero({
  package: pkg,
}: Props) {
  return (
    <section className="relative h-[650px] overflow-hidden">

      {/* Background Image */}

      <Image
        src={pkg.image_url}
        alt={pkg.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />

      <div className="absolute inset-0">

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            items-end
            px-6
            pb-16
          "
        >

          <div className="max-w-4xl">

            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                bg-blue-700
                px-5
                py-2
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-white
              "
            >
              {pkg.category}
            </span>

            {/* Title */}

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-tight
                text-white
                lg:text-7xl
              "
            >
              {pkg.title}
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                leading-9
                text-slate-200
              "
            >
              {pkg.description}
            </p>

            {/* Info */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-6
              "
            >              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

                <Hotel
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-white">
                  {pkg.hotel_name}
                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

                <Plane
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-white">
                  {pkg.flight_from} → {pkg.flight_to}
                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

                <Calendar
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-white">
                  {pkg.duration_days} Days
                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

                <Star
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-white">
                  {pkg.hotel_rating} Star Hotel
                </span>

              </div>

            </div>

          </div>

          {/* Price Card */}

          <div className="ml-auto hidden lg:block">

            <div
              className="
                w-80
                rounded-3xl
                bg-white
                p-8
                shadow-2xl
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

              <p className="mt-2 text-slate-600">
                Per Person
              </p>

              <button
                className="
                  mt-8
                  w-full
                  rounded-xl
                  bg-blue-700
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-800
                "
              >
                Book This Package
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
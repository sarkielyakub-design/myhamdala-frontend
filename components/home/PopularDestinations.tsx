"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  ArrowRight,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Makkah",
    country: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa",
    packages: 18,
  },
  {
    id: 2,
    name: "Madinah",
    country: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
    packages: 12,
  },
  {
    id: 3,
    name: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    packages: 24,
  },
  {
    id: 4,
    name: "Istanbul",
    country: "Turkey",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa",
    packages: 14,
  },
  {
    id: 5,
    name: "London",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    packages: 10,
  },
  {
    id: 6,
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    packages: 8,
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-8 text-4xl font-black text-slate-900 lg:text-6xl">
            Explore Amazing
            <span className="block text-blue-700">
              Travel Destinations
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover our most popular destinations for Umrah,
            Hajj, business trips and unforgettable holidays.
          </p>

        </div>

        {/* Destination Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="
              group
              overflow-hidden
              rounded-[32px]
              bg-white
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >

            {/* Image */}

            <div className="relative h-[420px] overflow-hidden">

              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Packages */}

              <div
                className="
                  absolute
                  top-5
                  right-5
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  shadow-xl
                "
              >
                <span className="text-sm font-bold text-blue-700">
                  {destination.packages} Packages
                </span>
              </div>

              {/* Content */}

              <div className="absolute bottom-0 w-full p-8">

                <div className="flex items-center gap-2 text-yellow-400">

                  ★★★★★

                </div>

                <h3 className="mt-4 text-4xl font-black text-white">

                  {destination.name}

                </h3>

                <div className="mt-3 flex items-center gap-2 text-white/90">

                  <MapPin size={18} />

                  <span>

                    {destination.country}

                  </span>

                </div>

                <Link
                  href="/packages"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-yellow-400
                    px-6
                    py-3
                    font-bold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:bg-yellow-300
                  "
                >

                  Explore

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>        {/* =====================================
                BOTTOM CTA
        ===================================== */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-blue-900
            via-blue-800
            to-slate-900
            p-12
            text-white
          "
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="font-bold uppercase tracking-[4px] text-yellow-400">
                Your Journey Starts Here
              </span>

              <h2 className="mt-5 text-4xl font-black lg:text-5xl">
                Explore The World's
                <span className="block">
                  Most Beautiful Destinations
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                From the holy cities of Makkah and Madinah to the
                modern skyline of Dubai and the historic streets of
                Istanbul, we offer carefully planned travel
                experiences for every traveler.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5 lg:items-end">

              <Link
                href="/packages"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-yellow-400
                  px-8
                  py-4
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-yellow-300
                "
              >
                View All Packages

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-blue-900
                "
              >
                Contact Our Team
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
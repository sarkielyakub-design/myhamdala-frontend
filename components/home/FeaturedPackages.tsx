"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  Plane,
  Hotel,
  Users,
  Star,
} from "lucide-react";

interface Package {
  id: number;
  title: string;
  description: string;
  image_url: string;
  price: number;
  category: string;
  hotel_name: string;
  hotel_rating: string;
  duration_days: number;
  flight_from: string;
  flight_to: string;
  departure_date: string;
  return_date: string;
  total_slots: number;
  booked_slots: number;
}

interface FeaturedPackagesProps {
  packages: Package[];
}

export default function FeaturedPackages({
  packages,
}: FeaturedPackagesProps) {
  return (
    <section className="relative bg-slate-50 py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ==========================
              SECTION HEADER
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-6
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[4px]
              text-blue-700
            "
          >
            Featured Packages
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              text-slate-900
              lg:text-6xl
            "
          >
            Discover Our Most
            <span className="block text-blue-700">
              Popular Packages
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Choose from our carefully selected Hajj,
            Umrah and international travel packages
            designed to provide comfort, convenience
            and unforgettable experiences.
          </p>

        </div>

        {/* ==========================
              PACKAGE GRID
        ========================== */}

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >          {packages.map((pkg) => (
            <div
              key={pkg.id}
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

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={pkg.image_url}
                  alt={pkg.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Category */}

                <span
                  className="
                    absolute
                    top-5
                    left-5
                    rounded-full
                    bg-blue-700
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-white
                  "
                >
                  {pkg.category}
                </span>

                {/* Price */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    rounded-2xl
                    bg-white
                    px-5
                    py-3
                    shadow-xl
                  "
                >

                  <p className="text-xs uppercase text-slate-500">
                    Starting From
                  </p>

                  <h3 className="text-2xl font-black text-blue-700">
                    ₦{pkg.price.toLocaleString()}
                  </h3>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex items-center gap-2">

                  {Array.from({
                    length: Number(pkg.hotel_rating),
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}

                </div>

                <h3 className="mt-5 text-3xl font-black text-slate-900">

                  {pkg.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {pkg.description}

                </p>

                {/* Details */}

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">

                    <Hotel
                      size={20}
                      className="text-blue-700"
                    />

                    <span className="text-slate-700">

                      {pkg.hotel_name}

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Plane
                      size={20}
                      className="text-blue-700"
                    />

                    <span className="text-slate-700">

                      {pkg.flight_from} → {pkg.flight_to}

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Calendar
                      size={20}
                      className="text-blue-700"
                    />

                    <span className="text-slate-700">

                      {pkg.duration_days} Days

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Users
                      size={20}
                      className="text-blue-700"
                    />

                    <span className="text-slate-700">

                      {pkg.total_slots - pkg.booked_slots} Seats Left

                    </span>

                  </div>

                </div>

                {/* Button */}

                <Link
                  href={`/packages/${pkg.id}`}
                  className="
                    mt-10
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-blue-700
                    px-6
                    py-4
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-800
                  "
                >

                  View Package

                  <ArrowRight size={20} />

                </Link>

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
                Explore More
              </span>

              <h2 className="mt-5 text-4xl font-black lg:text-5xl">
                Find The Perfect Travel Package
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Discover affordable Hajj, Umrah and international
                travel packages carefully designed to give you the
                best travel experience with comfort, safety and
                excellent customer service.
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
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
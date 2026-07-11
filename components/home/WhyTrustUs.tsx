"use client";

import {
  ShieldCheck,
  Users,
  Hotel,
  BadgeCheck,
  Bus,
  Headphones,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "We are committed to providing secure, transparent and dependable travel services, ensuring every client enjoys a smooth and worry-free journey.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our professional travel consultants guide you through registration, visa processing, flight booking and every stage of your journey.",
  },
  {
    icon: Hotel,
    title: "Premium Accommodation",
    description:
      "We partner with carefully selected hotels located close to major destinations, providing comfort and convenience throughout your stay.",
  },
  {
    icon: BadgeCheck,
    title: "Easy Visa Processing",
    description:
      "Our experts simplify the visa application process with accurate documentation and timely support from start to finish.",
  },
  {
    icon: Bus,
    title: "Comfortable Transportation",
    description:
      "Reliable airport transfers and intercity transportation ensure a safe and comfortable travel experience for all our clients.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available whenever you need assistance before, during and after your journey.",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-block
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-blue-700
            "
          >
            Why Travelers Trust Us
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              lg:text-5xl
            "
          >
            Your Trusted Partner
            <span className="block text-blue-700">
              For Every Journey
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
            We are committed to delivering exceptional travel
            experiences through professionalism, reliability,
            premium services and dedicated customer care.
          </p>

        </div>

        {/* Trust Cards */}

<div
  className="
    mt-20
    grid
    gap-8
    md:grid-cols-2
    xl:grid-cols-3
  "
>
  {trustItems.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="rounded-lg bg-slate-50 p-8 hover:shadow-lg transition-shadow"
      >
        <Icon className="h-12 w-12 text-blue-700 mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {item.title}
        </h3>
        <p className="text-slate-600">
          {item.description}
        </p>
      </div>
    );
  })}
</div>

        {/* ==========================
              TRUST HIGHLIGHTS
        ========================== */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-r
            from-blue-700
            via-blue-800
            to-slate-900
            p-10
            text-white
          "
        >

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-400
                  text-slate-900
                  font-black
                "
              >
                ✓
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Licensed Travel Agency
                </h3>

                <p className="mt-2 text-blue-100">
                  Operating with professionalism and integrity to
                  deliver reliable travel services.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-400
                  text-slate-900
                  font-black
                "
              >
                ✓
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Secure & Trusted Services
                </h3>

                <p className="mt-2 text-blue-100">
                  We ensure safe bookings, transparent processes and
                  dependable customer support.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-400
                  text-slate-900
                  font-black
                "
              >
                ✓
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Dedicated Support
                </h3>

                <p className="mt-2 text-blue-100">
                  Our experienced team is ready to assist you before,
                  during and after every journey.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
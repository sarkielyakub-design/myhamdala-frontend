"use client";

import Link from "next/link";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuProps {
  open: boolean;
}

const services = [
  {
    title: "Umrah Packages",
    description:
      "Affordable & VIP Umrah Packages all year round.",
    href: "/packages/umrah",
    image: "/images/menu/umrah.jpg",
  },
  {
    title: "Hajj Packages",
    description:
      "Official Hajj packages with premium accommodation.",
    href: "/packages/hajj",
    image: "/images/menu/hajj.jpg",
  },
  {
    title: "Visa Processing",
    description:
      "Tourist, Student, Business & Work Visa assistance.",
    href: "/visa",
    image: "/images/menu/visa.jpg",
  },
  {
    title: "Flight Booking",
    description:
      "International & Domestic Flight Reservation.",
    href: "/flights",
    image: "/images/menu/flight.jpg",
  },
  {
    title: "Hotel Booking",
    description:
      "Book hotels worldwide at the best prices.",
    href: "/hotels",
    image: "/images/menu/hotel.jpg",
  },
  {
    title: "Holiday Tours",
    description:
      "Luxury vacations and holiday tour packages.",
    href: "/tours",
    image: "/images/menu/tour.jpg",
  },
];

export default function MegaMenu({
  open,
}: MegaMenuProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-1/2
            top-full
            z-50
            mt-6
            w-[900px]
            -translate-x-1/2
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,.18)]
          "
        >

          <div className="grid grid-cols-2">
                        {/* ===========================
                    LEFT SIDE
            =========================== */}

            <div className="grid grid-cols-2 gap-6 p-8">

              {services.map((service) => (

                <Link
                  key={service.title}
                  href={service.href}
                  className="
                    group
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    hover:bg-slate-50
                  "
                >

                  <div className="relative h-32 overflow-hidden rounded-2xl">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                  </div>

                  <h3
                    className="
                      mt-4
                      text-lg
                      font-bold
                      text-slate-900
                      transition-colors
                      group-hover:text-blue-700
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                </Link>

              ))}

            </div>

            {/* ===========================
                    RIGHT SIDE
            =========================== */}

            <div
              className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-blue-900
                via-blue-800
                to-blue-700
                p-10
                text-white
              "
            >

              <div className="relative z-10">

                <span
                  className="
                    rounded-full
                    bg-yellow-400/20
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-yellow-300
                  "
                >
                  Premium Travel
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Travel With Confidence
                </h2>

                <p className="mt-6 leading-8 text-blue-100">
                  M.Y Hamdala Travel & Tour provides premium
                  Umrah, Hajj, Visa Processing, Flight Booking,
                  Hotel Reservations and Holiday Tours with
                  trusted international partners.
                </p>

                <Link
                  href="/contact"
                  className="
                    mt-10
                    inline-flex
                    rounded-full
                    bg-yellow-400
                    px-8
                    py-4
                    font-bold
                    text-slate-900
                    transition
                    hover:bg-yellow-300
                  "
                >
                  Contact Us
                </Link>

              </div>

              <div
                className="
                  absolute
                  -right-16
                  -bottom-16
                  h-72
                  w-72
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  top-10
                  right-10
                  h-20
                  w-20
                  rounded-full
                  bg-yellow-400/20
                "
              />

            </div>

          </div>
                  </motion.div>

      )}

    </AnimatePresence>
  );
}
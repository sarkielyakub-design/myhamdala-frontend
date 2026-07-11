"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-700/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        <div
          className="
            grid
            gap-14
            lg:grid-cols-4
          "
        >

          {/* =========================
                  COMPANY
          ========================= */}

          <div>

            <h2
              className="
                text-4xl
                font-black
                leading-tight
              "
            >

              <span className="text-blue-500">
                M.Y Hamdala
              </span>

              <span className="block text-yellow-400">
                Travel & Tour
              </span>

            </h2>

            <p
              className="
                mt-6
                leading-8
                text-slate-300
              "
            >
              Your trusted travel partner for Umrah,
              Hajj, visa processing, flight reservations,
              hotel bookings and international travel
              services with professionalism and excellence.
            </p>

            {/* Social Icons */}

            <div className="mt-8 flex flex-wrap gap-4">              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-800
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-blue-600
                "
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-800
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-pink-600
                "
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-800
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-black
                "
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-800
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-green-600
                "
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-800
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-red-600
                "
              >
                <FaYoutube size={18} />
              </a>

            </div>

          </div>

          {/* =========================
                QUICK LINKS
          ========================= */}

          <div>

            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-slate-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/packages"
                  className="text-slate-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="text-slate-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/news"
                  className="text-slate-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  News
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>          {/* =========================
                OUR SERVICES
          ========================= */}

          <div>

            <h3 className="text-2xl font-bold">
              Our Services
            </h3>

            <ul className="mt-8 space-y-4">

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Umrah Packages
              </li>

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Hajj Services
              </li>

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Visa Processing
              </li>

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Flight Reservations
              </li>

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Hotel Booking
              </li>

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Holiday Tours
              </li>

              <li className="text-slate-300 transition hover:pl-2 hover:text-yellow-400">
                Travel Consultation
              </li>

            </ul>

          </div>

          {/* =========================
                CONTACT INFO
          ========================= */}

          <div>

            <h3 className="text-2xl font-bold">
              Contact Us
            </h3>

            <div className="mt-8 space-y-6">

              {/* Address */}

              <div className="flex items-start gap-4">

                <MapPin
                  size={22}
                  className="mt-1 text-yellow-400"
                />

                <div>

                  <h4 className="font-semibold">
                    Office Address
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    No. 26 Block A,
                    <br />
                    Railway Lagos Street,
                    <br />
                    Civic Center,
                    <br />
                    Kano, Nigeria.
                  </p>

                </div>

              </div>

              {/* CEO */}

              <div className="flex items-start gap-4">

                <Phone
                  size={22}
                  className="mt-1 text-yellow-400"
                />

                <div>

                  <h4 className="font-semibold">
                    CEO
                  </h4>

                  <a
                    href="tel:+2348034454580"
                    className="mt-2 block text-slate-300 transition hover:text-yellow-400"
                  >
                    +234 803 445 4580
                  </a>

                </div>

              </div>

              {/* Secretary General */}

              <div className="flex items-start gap-4">

                <Phone
                  size={22}
                  className="mt-1 text-yellow-400"
                />

                <div>

                  <h4 className="font-semibold">
                    Secretary General
                  </h4>

                  <a
                    href="tel:+2347030777053"
                    className="mt-2 block text-slate-300 transition hover:text-yellow-400"
                  >
                    +234 703 077 7053
                  </a>

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-4">

                <Mail
                  size={22}
                  className="mt-1 text-yellow-400"
                />

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <a
                    href="mailto:myhamdala2020@gmail.com"
                    className="mt-2 block text-slate-300 transition hover:text-yellow-400"
                  >
                    myhamdala2020@gmail.com
                  </a>

                </div>

              </div>

            </div>

          </div>        </div>

        {/* ======================================
                Bottom Copyright Bar
        ====================================== */}

        <div className="mt-20 border-t border-slate-800 pt-8">

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-6
              text-center
              md:flex-row
            "
          >

            {/* Left */}

            <div>

              <p className="text-slate-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">
                  M.Y Hamdala Travel & Tour
                </span>.
                All Rights Reserved.
              </p>

            </div>

            {/* Center */}

            <div className="flex flex-wrap justify-center gap-6">

              <Link
                href="/privacy-policy"
                className="
                  text-slate-400
                  transition
                  hover:text-yellow-400
                "
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="
                  text-slate-400
                  transition
                  hover:text-yellow-400
                "
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="
                  text-slate-400
                  transition
                  hover:text-yellow-400
                "
              >
                Support
              </Link>

            </div>

            {/* Right */}

            <div>

              <p className="text-slate-400">

                Designed & Developed by{" "}

                <span
                  className="
                    font-bold
                    text-blue-400
                  "
                >
                  Ztech Universal Solution
                </span>

              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  ShieldCheck,
  ArrowRight,
  Ticket,
} from "lucide-react";

export default function BookingPortal() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-semibold">
            ONLINE BOOKING PORTAL
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Book Flights & Hotels Online
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
            Looking for flights, hotels or holiday packages?
            Our secure online booking platform gives you instant
            access to reservations, pricing and confirmations.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">

          <Card
            icon={<Plane size={34} />}
            title="Flight Booking"
            desc="Search and reserve domestic & international flights."
          />

          <Card
            icon={<Hotel size={34} />}
            title="Hotel Booking"
            desc="Reserve hotels worldwide with instant confirmation."
          />

          <Card
            icon={<Ticket size={34} />}
            title="Holiday Packages"
            desc="Discover complete travel and Umrah packages."
          />

          <Card
            icon={<ShieldCheck size={34} />}
            title="Secure Booking"
            desc="Trusted online reservation with safe payment."
          />

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 shadow-2xl"
        >

          <div>

            <h3 className="text-4xl font-bold text-blue-900">
              Ready to Book Your Journey?
            </h3>

            <p className="mt-5 text-gray-600 text-lg max-w-2xl">
              Click the button below to access our dedicated booking
              platform where you can book flights, hotels,
              holiday packages and more.
            </p>

          </div>

          <a
            href="https://booking.myhamdalatravels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-10 py-5 rounded-full flex items-center gap-3 text-lg transition"
          >
            Open Booking Portal

            <ArrowRight />
          </a>

        </motion.div>

      </div>

    </section>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition">

      <div className="text-yellow-400 flex justify-center mb-6">
        {icon}
      </div>

      <h4 className="text-2xl font-bold text-white">
        {title}
      </h4>

      <p className="mt-4 text-blue-100 leading-7">
        {desc}
      </p>

    </div>
  );
}
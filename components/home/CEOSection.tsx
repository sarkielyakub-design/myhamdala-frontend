"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* CEO IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-4 border-yellow-400"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/images/ceo.jpg"
                alt="CEO"
                width={700}
                height={850}
                className="w-full h-full object-cover"
              />

            </div>

          </motion.div>

          {/* MESSAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
              CEO MESSAGE
            </span>

            <h2 className="text-5xl font-bold mt-4 text-slate-900">
              A Message From Our CEO
            </h2>

            <Quote
              className="text-yellow-500 mt-8"
              size={60}
            />

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              At M.Y Hamdala Travel & Tour,
              our mission is to provide every traveller
              with a safe, memorable and spiritually
              rewarding journey.

              We are committed to excellence,
              transparency and outstanding customer
              service while helping pilgrims and
              travellers explore the world with
              confidence.
            </p>

            <div className="mt-10">

              <h3 className="text-2xl font-bold text-blue-900">
                Alhaji Muhammad Yakubu
              </h3>

              <p className="text-gray-500 mt-2">
                Founder & Chief Executive Officer
              </p>

            </div>

            <div className="mt-10 flex gap-5">

              <Link
                href="/about"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Read Full Message
              </Link>

              <Link
                href="/contact"
                className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Contact CEO
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
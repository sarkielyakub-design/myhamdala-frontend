"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "IATA",
    logo: "/images/partners/iata.png",
  },
  {
    id: 2,
    name: "NANTA",
    logo: "/images/partners/nanta.png",
  },
  {
    id: 3,
    name: "NCAA",
    logo: "/images/partners/ncaa.png",
  },
  {
    id: 4,
    name: "CAC",
    logo: "/images/partners/cac.png",
  },
  {
    id: 5,
    name: "Saudi Ministry",
    logo: "/images/partners/saudi.png",
  },
  {
    id: 6,
    name: "Airline Partner",
    logo: "/images/partners/airline.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Trusted Partners
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Certified & Trusted Worldwide
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            We collaborate with recognized travel organizations,
            regulatory authorities and trusted partners to provide
            reliable and professional travel services.
          </p>

        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">

          {partners.map((partner, index) => (

            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition"
            >

              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
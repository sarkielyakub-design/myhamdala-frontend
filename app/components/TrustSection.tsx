"use client";
import { useState } from "react";

const certs = [
  { name: "CAC", img: "/certs/cac.jpg" },
  { name: "NATA", img: "/certs/nata.jpg" },
  { name: "IATA", img: "/certs/iata.jpg" },
  { name: "NCAA", img: "/certs/ncaa.jpg" },
];

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Happy Clients", value: "1000+" },
  { label: "Successful Trips", value: "500+" },
  { label: "Support", value: "24/7" },
];

const testimonials = [
  {
    name: "Abdullahi Musa",
    text: "Very smooth and trusted service. My Umrah journey was stress-free.",
  },
  {
    name: "Fatima Yusuf",
    text: "Best travel agency I’ve used. Highly professional and reliable.",
  },
  {
    name: "Ibrahim Sani",
    text: "Fast visa processing and excellent customer care.",
  },
];

export default function EliteTrustSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          Trusted Worldwide 🌍
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Certified, experienced, and trusted by hundreds of clients across Africa.
        </p>
      </div>

      {/* 📊 STATS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-center border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-2xl text-yellow-400 font-bold">{s.value}</h3>
            <p className="text-gray-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 🛡 CERTIFICATIONS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {certs.map((c, i) => (
          <div
            key={i}
            onClick={() => setActive(c.img)}
            className="group bg-white/10 p-4 rounded-2xl border border-white/10 cursor-pointer hover:scale-[1.05] hover:shadow-xl transition"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={c.img}
                alt={c.name}
                className="h-36 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <span className="absolute top-2 right-2 bg-green-500 text-black text-xs px-2 py-1 rounded-full">
                ✔ Verified
              </span>
            </div>

            <p className="text-center mt-2 text-sm text-gray-300">{c.name}</p>
          </div>
        ))}
      </div>

      {/* 💬 TESTIMONIALS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          >
            <p className="text-gray-300 text-sm mb-4">“{t.text}”</p>
            <p className="text-yellow-400 font-semibold">{t.name}</p>
          </div>
        ))}
      </div>

      {/* 🔍 LIGHTBOX */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={active}
            className="max-h-[90vh] max-w-full rounded-xl"
          />
        </div>
      )}

    </section>
  );
}
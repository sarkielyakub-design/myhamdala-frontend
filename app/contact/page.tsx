"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Lang = "en" | "ar" | "ha";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = {
    en: {
      title: "Contact Us",
      subtitle: "We are here to assist you 24/7",
      name: "Full Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      support: "Customer Support",
      md: "Managing Director",
      visa: "Visa Office",
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "نحن هنا لمساعدتك",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
      support: "دعم العملاء",
      md: "المدير العام",
      visa: "قسم التأشيرات",
    },
    ha: {
      title: "Tuntuɓa",
      subtitle: "Muna nan don taimaka maka",
      name: "Suna",
      email: "Email",
      message: "Sako",
      send: "Aika",
      support: "Tallafi",
      md: "Manajan Darakta",
      visa: "Ofishin Visa",
    },
  };

  const mdWhatsapp = "2347030777053"; // MD number
  const visaWhatsapp = "2347065854518"; // Visa office

  return (
    <div className="text-white min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: "url('/images/makkah.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* HEADER */}
      <div className="flex justify-between px-6 py-4 bg-black/40 backdrop-blur border-b border-white/10">
        <h1 className="text-yellow-400 font-bold">🕋 M.Y HAMDALA</h1>

        <div className="flex gap-4 items-center">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="bg-black border rounded px-2 py-1"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="ha">HA</option>
          </select>

          <a href="/" className="hover:text-yellow-400">Home</a>
        </div>
      </div>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-yellow-400 mb-6"
        >
          {t[lang].title}
        </motion.h1>

        <p className="text-gray-300 mb-10">{t[lang].subtitle}</p>
      </section>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-20">

        {/* LEFT: FORM */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10">

          <input
            placeholder={t[lang].name}
            className="w-full mb-4 p-3 bg-black border rounded"
          />

          <input
            placeholder={t[lang].email}
            className="w-full mb-4 p-3 bg-black border rounded"
          />

          <textarea
            placeholder={t[lang].message}
            className="w-full mb-4 p-3 bg-black border rounded"
          />

          <button className="w-full bg-yellow-500 text-black py-3 rounded hover:scale-105 transition">
            {t[lang].send}
          </button>

          {/* BASIC CONTACT */}
          <div className="mt-6 text-gray-300 text-sm space-y-2">
            <p>📍 NO26 BLOCK A RAILWAY LAGOS STREET, CIVIC CENTER KANO</p>
        <p>📞 md/ceo 08034454580</p>
         <p>📞 sec/manager 07030777053</p>
          <p>📞 vis/ticket officer 07065854518</p>
        <p>✉️ myhamdala2020@gmail.com</p>
          </div>
        </div>

        {/* RIGHT: CONTACT CARDS */}
        <div className="space-y-6">

          {/* MD */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
            <h3 className="text-yellow-400 font-semibold mb-2">
              👤 {t[lang].md}
            </h3>

            <p className="text-gray-300 text-sm mb-3">
              Leadership & strategic operations. Contact for high-level inquiries.
            </p>

            <a
              href={`https://wa.me/${mdWhatsapp}`}
              target="_blank"
              className="inline-block bg-green-500 text-black px-4 py-2 rounded-lg"
            >
              💬 WhatsApp MD
            </a>
          </div>

          {/* VISA */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
            <h3 className="text-yellow-400 font-semibold mb-2">
              🛂 {t[lang].visa}
            </h3>

            <p className="text-gray-300 text-sm mb-3">
              Visa processing, documentation & travel support.
            </p>

            <a
              href={`https://wa.me/${visaWhatsapp}`}
              target="_blank"
              className="inline-block bg-green-500 text-black px-4 py-2 rounded-lg"
            >
              💬 WhatsApp Visa Office
            </a>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=11.9964,8.5166667&z=15&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
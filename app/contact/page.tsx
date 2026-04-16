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
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "نحن هنا لمساعدتك",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
      support: "دعم العملاء",
    },
    ha: {
      title: "Tuntuɓa",
      subtitle: "Muna nan don taimaka maka",
      name: "Suna",
      email: "Email",
      message: "Sako",
      send: "Aika",
      support: "Tallafi",
    },
  };

  return (
    <div className="text-white min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="w-full h-full bg-cover"
          style={{ backgroundImage: "url('/images/makkah.jpg')" }} />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* HEADER */}
      <div className="flex justify-between px-6 py-4 bg-black/40 backdrop-blur">
        <h1 className="text-yellow-400 font-bold">🕋 Maitagaran</h1>

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

      {/* FORM */}
      <section className="py-20 px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-yellow-400 mb-6">
          {t[lang].title}
        </motion.h1>

        <p className="text-gray-300 mb-10">{t[lang].subtitle}</p>

        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl p-6 rounded-xl">

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

        </div>

        {/* CONTACT INFO */}
        <div className="mt-10 text-gray-300">
          <p>📞 08066961807</p>
          <p>📧 Ztechsolutionuniversal@gmail.com</p>

          <a href="https://wa.me/2348066961807"
            className="inline-block mt-4 bg-green-500 px-6 py-2 rounded">
            {t[lang].support}
          </a>
        </div>

      </section>

    </div>
  );
}

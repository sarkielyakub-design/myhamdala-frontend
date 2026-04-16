"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Lang = "en" | "ar" | "ha";

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = {
    en: {
      title: "About M.Y HAMDALA TRAVEL AND TOUR",
      subtitle: "Over a Decade of Trusted Travel Excellence",

      desc1:
        "M.Y HAMDALA TRAVEL AND TOUR is a fully established travel company with over 10 years of proven experience in delivering reliable and professional travel services across Africa and beyond.",

      desc2:
        "We specialize in ticket reservations, hotel bookings, visa processing, Umrah & Hajj packages, international tours, work visas, and work permits — providing a complete travel solution under one roof.",

      desc3:
        "Our approach combines modern travel systems with deep industry expertise, ensuring every client enjoys a seamless, secure, and stress-free journey from start to finish.",

      desc4:
        "Whether you are traveling for pilgrimage, business, or relocation, we are committed to delivering excellence, transparency, and unmatched customer support.",

      mission: "Our Mission",
      missionText:
        "To provide reliable, efficient, and transparent travel services while removing stress and uncertainty from every journey.",

      vision: "Our Vision",
      visionText:
        "To become one of Africa’s leading and most trusted travel and tour companies, known for excellence, integrity, and innovation.",

      values: [
        "Trust & Transparency",
        "Professional Excellence",
        "Customer Satisfaction",
        "Integrity & Reliability",
      ],

      servicesTitle: "Our Services",
      services: [
        "✈️ Flight Ticket Reservations",
        "🏨 Hotel Bookings",
        "🛂 Visa Processing",
        "🕋 Umrah & Hajj Packages",
        "🌍 International Tours",
        "💼 Work Visas & Permits",
      ],
    },

    ar: {
      title: "عن M.Y HAMDALA للسفر والسياحة",
      subtitle: "أكثر من 10 سنوات من الخبرة",

      desc1:
        "نحن شركة سفر رائدة بخبرة تزيد عن 10 سنوات في تقديم خدمات السفر باحترافية وثقة.",

      desc2:
        "نقدم خدمات حجز التذاكر، الفنادق، التأشيرات، العمرة والحج، الرحلات السياحية، وتأشيرات العمل.",

      desc3:
        "نضمن تجربة سفر سهلة وآمنة باستخدام أحدث الأنظمة وخبرة طويلة في المجال.",

      desc4:
        "نلتزم بتقديم أفضل خدمة وراحة للعملاء في جميع مراحل السفر.",

      mission: "مهمتنا",
      missionText:
        "تقديم خدمات سفر موثوقة وسهلة مع إزالة جميع التعقيدات.",

      vision: "رؤيتنا",
      visionText:
        "أن نصبح من أفضل شركات السفر في إفريقيا.",

      values: [
        "الثقة",
        "الاحترافية",
        "رضا العملاء",
        "المصداقية",
      ],

      servicesTitle: "خدماتنا",
      services: [
        "حجز التذاكر",
        "حجز الفنادق",
        "التأشيرات",
        "العمرة والحج",
        "الرحلات",
        "تأشيرات العمل",
      ],
    },

    ha: {
      title: "Game da M.Y HAMDALA TRAVEL AND TOUR",
      subtitle: "Fiye da shekaru 10 na kwarewa",

      desc1:
        "Muna da shekaru sama da 10 muna samar da ingantaccen sabis na tafiya.",

      desc2:
        "Muna yin tikiti, hotel, visa, Umrah, Hajj, yawon bude ido da work visa.",

      desc3:
        "Muna tabbatar da tafiya mai sauƙi da aminci ga dukkan kwastomomi.",

      desc4:
        "Muna ba da kulawa ta musamman daga farko har ƙarshe.",

      mission: "Manufarmu",
      missionText:
        "Samar da sabis mai sauƙi da amana ga matafiya.",

      vision: "Burimmu",
      visionText:
        "Zama daya daga cikin manyan kamfanonin tafiya a Afrika.",

      values: [
        "Aminci",
        "Kwarewa",
        "Gamsuwar abokin ciniki",
        "Gaskiya",
      ],

      servicesTitle: "Ayyukanmu",
      services: [
        "Tikiti",
        "Hotel",
        "Visa",
        "Umrah & Hajj",
        "Yawon shakatawa",
        "Work visa",
      ],
    },
  };

  return (
    <div className="text-white min-h-screen">

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/makkah.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* 🔝 HEADER */}
      <div className="flex justify-between px-6 py-4 bg-black/40 backdrop-blur border-b border-white/10">
        <h1 className="text-yellow-400 font-bold">
          🕋 M.Y HAMDALA
        </h1>

        <div className="flex gap-4 items-center">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="bg-black border border-white/20 rounded px-2 py-1 text-sm"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="ha">HA</option>
          </select>

          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
        </div>
      </div>

      {/* 🧠 HERO */}
      <section className="py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-yellow-400 mb-6"
        >
          {t[lang].title}
        </motion.h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          {t[lang].subtitle}
        </p>
      </section>

      {/* 📖 STORY */}
      <section className="max-w-4xl mx-auto px-6 space-y-6 text-gray-300 text-center">
        <p>{t[lang].desc1}</p>
        <p>{t[lang].desc2}</p>
        <p>{t[lang].desc3}</p>
        <p>{t[lang].desc4}</p>
      </section>

      {/* ⭐ SERVICES */}
      <section className="py-20 text-center">
        <h2 className="text-3xl text-yellow-400 mb-8">
          {t[lang].servicesTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t[lang].services.map((s, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/20">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 MISSION & VISION */}
      <section className="py-20 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-center px-6">

        <div className="bg-white/10 p-8 rounded-xl border border-white/20">
          <h2 className="text-yellow-400 mb-3">{t[lang].mission}</h2>
          <p>{t[lang].missionText}</p>
        </div>

        <div className="bg-white/10 p-8 rounded-xl border border-white/20">
          <h2 className="text-yellow-400 mb-3">{t[lang].vision}</h2>
          <p>{t[lang].visionText}</p>
        </div>

      </section>

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Lang = "en" | "ar" | "ha";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Lang>("en");

  const t = {
    en: {
      title: "Privacy Policy & Terms",
      introTitle: "Introduction",
      intro:
        "At M.Y HAMDALA TRAVEL AND TOUR, we prioritize your privacy and data security. This policy explains how we collect, use, and protect your personal information.",

      collectTitle: "Information We Collect",
      collect:
        "We may collect personal details such as your name, passport information, contact details, nationality, and payment data when you use our services.",

      usageTitle: "How We Use Your Information",
      usage: [
        "Process bookings and reservations",
        "Handle visa and travel documentation",
        "Send important travel updates",
        "Improve our services and user experience",
      ],

      securityTitle: "Data Security",
      security:
        "We use industry-standard protection systems to safeguard your data from unauthorized access or misuse.",

      termsTitle: "Terms of Service",
      terms: [
        "Bookings depend on availability",
        "Prices may change without notice",
        "Visa approvals depend on embassies",
        "Customers must provide accurate data",
      ],

      refundTitle: "Cancellation & Refund",
      refund:
        "Refunds depend on airline, hotel, and visa policies. Service charges may apply.",

      liabilityTitle: "Limitation of Liability",
      liability:
        "We are not responsible for delays, cancellations, or visa rejections beyond our control.",

      contactTitle: "Contact",
      contact:
        "For inquiries, contact us through official channels.",

      home: "Home",
    },

    ar: {
      title: "سياسة الخصوصية والشروط",
      introTitle: "مقدمة",
      intro:
        "نحن نحمي خصوصيتك ونوضح كيفية استخدام بياناتك.",

      collectTitle: "البيانات التي نجمعها",
      collect:
        "نقوم بجمع معلومات مثل الاسم وجواز السفر والتفاصيل الشخصية.",

      usageTitle: "استخدام البيانات",
      usage: [
        "إدارة الحجوزات",
        "معالجة التأشيرات",
        "إرسال التحديثات",
        "تحسين الخدمات",
      ],

      securityTitle: "الأمان",
      security:
        "نستخدم أنظمة حماية متقدمة لحماية بياناتك.",

      termsTitle: "الشروط",
      terms: [
        "الحجز حسب التوفر",
        "الأسعار قابلة للتغيير",
        "التأشيرات حسب السفارة",
      ],

      refundTitle: "الاسترجاع",
      refund:
        "يعتمد على سياسات الشركات.",

      liabilityTitle: "المسؤولية",
      liability:
        "لسنا مسؤولين عن الظروف الخارجة عن السيطرة.",

      contactTitle: "التواصل",
      contact:
        "تواصل معنا عبر القنوات الرسمية.",

      home: "الرئيسية",
    },

    ha: {
      title: "Sirri da Ka'idoji",
      introTitle: "Gabatarwa",
      intro:
        "Muna kare bayanan ku da bayyana yadda ake amfani da su.",

      collectTitle: "Bayanan da muke tattarawa",
      collect:
        "Muna tattara suna, passport da sauran bayanai.",

      usageTitle: "Amfani da bayanai",
      usage: [
        "Gudanar da booking",
        "Visa processing",
        "Tura bayanai",
      ],

      securityTitle: "Tsaro",
      security:
        "Muna amfani da kariya mai karfi.",

      termsTitle: "Ka'idoji",
      terms: [
        "Booking ya dogara da availability",
        "Farashi na iya canzawa",
      ],

      refundTitle: "Mayar da kudi",
      refund:
        "Ya danganta da policy.",

      liabilityTitle: "Alhaki",
      liability:
        "Ba mu da alhakin matsalolin waje.",

      contactTitle: "Tuntuɓa",
      contact:
        "Tuntuɓe mu ta hanyoyin mu.",

      home: "Gida",
    },
  };

  const Flag = ({ code }: any) => (
    <span className="text-lg">
      {code === "en" ? "🇬🇧" : code === "ar" ? "🇸🇦" : "🇳🇬"}
    </span>
  );

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur">
        <h1 className="text-yellow-400 font-bold">
          🕋 M.Y HAMDALA
        </h1>

        <div className="flex items-center gap-4">

          {/* LANGUAGE SWITCH */}
          <div className="flex gap-2">
            {(["en", "ar", "ha"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-lg flex items-center gap-1 ${
                  lang === l
                    ? "bg-yellow-500 text-black"
                    : "bg-white/10"
                }`}
              >
                <Flag code={l} /> {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* HOME LINK */}
          <a href="/" className="hover:text-yellow-400">
            {t[lang].home}
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-yellow-400"
        >
          {t[lang].title}
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-10 px-6 pb-20">

        <Section title={t[lang].introTitle} text={t[lang].intro} />
        <Section title={t[lang].collectTitle} text={t[lang].collect} />

        <ListSection title={t[lang].usageTitle} items={t[lang].usage} />

        <Section title={t[lang].securityTitle} text={t[lang].security} />

        <ListSection title={t[lang].termsTitle} items={t[lang].terms} />

        <Section title={t[lang].refundTitle} text={t[lang].refund} />
        <Section title={t[lang].liabilityTitle} text={t[lang].liability} />
        <Section title={t[lang].contactTitle} text={t[lang].contact} />

        {/* FOOTER */}
        <div className="pt-10 text-center text-sm text-gray-500 border-t border-white/10">
          ©️ {new Date().getFullYear()} M.Y HAMDALA TRAVEL AND TOUR
        </div>
      </div>
    </div>
  );
}

// COMPONENTS
function Section({ title, text }: any) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
      <h2 className="text-yellow-400 mb-2">{title}</h2>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

function ListSection({ title, items }: any) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
      <h2 className="text-yellow-400 mb-2">{title}</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-300">
        {items.map((i: string, idx: number) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
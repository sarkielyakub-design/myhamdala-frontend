"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Lang = "en" | "ar" | "ha";

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = {
    en: {
  title: "About M.Y Hamdala Associates Company Limited",
  subtitle: "Delivering Excellence in Travel, Logistics & Global Mobility",

  desc1:
    "M.Y Hamdala Associates Company Limited is a trusted name in international travel, freight, and logistics services. Established in 2008, we have built a reputation for delivering reliable, cost-effective, and professional solutions across Nigeria and West Africa.",

  desc2:
    "We specialize in air and sea freight, travel services, visa processing, Umrah & Hajj packages, and global mobility solutions tailored to meet the specific needs of individuals and businesses.",

  desc3:
    "Our strength lies in combining modern systems with deep industry expertise. We carefully understand each client's goals and provide customized solutions that ensure efficiency, compliance, and peace of mind.",

  desc4:
    "With a dedicated team of professionals and a strong global network, we continuously deliver high-quality services while maintaining transparency, integrity, and customer satisfaction.",

  mission: "Our Mission",
  missionText:
    "To provide reliable, efficient, and customer-focused travel and logistics solutions while ensuring safety, transparency, and excellence in every service we deliver.",

  vision: "Our Vision",
  visionText:
    "To become one of Africa’s most trusted and leading travel and logistics companies, recognized for innovation, professionalism, and consistent service delivery.",

  values: [
    "Customer Satisfaction First",
    "Integrity & Transparency",
    "Professional Excellence",
    "Reliability & Commitment",
  ],

  servicesTitle: "Our Services",
  services: [
    "✈️ Flight Reservations & Travel Planning",
    "🏨 Hotel Booking & Accommodation",
    "🛂 Visa Processing & Documentation",
    "🕋 Umrah & Hajj Packages",
    "🚢 Air & Sea Freight Forwarding",
    "🌍 International Tours & Relocation",
  ],
},
   ar: {
  title: "عن شركة M.Y Hamdala Associates المحدودة",
  subtitle: "التميز في السفر والخدمات اللوجستية والحلول العالمية",

  desc1:
    "تُعد شركة M.Y Hamdala Associates المحدودة اسمًا موثوقًا في مجال السفر الدولي وخدمات الشحن والخدمات اللوجستية. تأسست الشركة في عام 2008، وقد بنت سمعة قوية في تقديم حلول احترافية وفعّالة من حيث التكلفة عبر نيجيريا وغرب إفريقيا.",

  desc2:
    "نحن متخصصون في الشحن الجوي والبحري، وخدمات السفر، ومعالجة التأشيرات، وبرامج العمرة والحج، بالإضافة إلى حلول التنقل الدولي المصممة لتلبية احتياجات الأفراد والشركات.",

  desc3:
    "تكمن قوتنا في الجمع بين الأنظمة الحديثة والخبرة العميقة في المجال. نحن نحرص على فهم أهداف كل عميل وتقديم حلول مخصصة تضمن الكفاءة والامتثال وراحة البال.",

  desc4:
    "بفضل فريقنا المتخصص وشبكتنا العالمية القوية، نواصل تقديم خدمات عالية الجودة مع الحفاظ على الشفافية والنزاهة ورضا العملاء.",

  mission: "مهمتنا",
  missionText:
    "تقديم خدمات سفر وخدمات لوجستية موثوقة وفعالة تركز على العميل، مع ضمان الأمان والشفافية والتميز في كل ما نقدمه.",

  vision: "رؤيتنا",
  visionText:
    "أن نصبح واحدة من أكثر الشركات ثقة وريادة في إفريقيا في مجال السفر والخدمات اللوجستية، معروفة بالابتكار والاحترافية والاستمرارية في تقديم الخدمة.",

  values: [
    "رضا العملاء أولاً",
    "النزاهة والشفافية",
    "التميز المهني",
    "الالتزام والموثوقية",
  ],

  servicesTitle: "خدماتنا",
  services: [
    "✈️ حجز تذاكر الطيران والتخطيط للسفر",
    "🏨 حجز الفنادق والإقامة",
    "🛂 معالجة التأشيرات والمستندات",
    "🕋 برامج العمرة والحج",
    "🚢 الشحن الجوي والبحري",
    "🌍 الجولات الدولية وخدمات الانتقال",
  ],
},
    ha: {
  title: "Game da M.Y Hamdala Associates Company Limited",
  subtitle: "Kwarewa a Harkokin Tafiya, Jiragen Kaya da Sabis na Duniya",

  desc1:
    "M.Y Hamdala Associates Company Limited kamfani ne mai aminci a harkokin tafiya na kasa da kasa, jigilar kaya, da ayyukan lodistik. An kafa kamfanin a shekarar 2008, kuma ya gina suna mai kyau wajen samar da ayyuka masu inganci, saukin farashi, da kwarewa a Najeriya da duk yankin Yammacin Afirka.",

  desc2:
    "Muna kwarewa a jigilar kaya ta jirgin sama da ruwa, ayyukan tafiya, sarrafa visa, shirye-shiryen Umrah da Hajj, da kuma hanyoyin motsi na duniya da aka tsara domin biyan bukatun mutane da kamfanoni.",

  desc3:
    "Karfinmu yana cikin hada sabbin fasahohi da gogewa mai zurfi a wannan fanni. Muna fahimtar bukatun kowanne kwastoma domin samar da mafita ta musamman wacce ke tabbatar da inganci, bin doka, da kwanciyar hankali.",

  desc4:
    "Da taimakon kwararrun ma’aikata da kuma babbar hanyar sadarwa ta duniya, muna ci gaba da bayar da ayyuka masu inganci tare da kiyaye gaskiya, rikon amana, da gamsuwar kwastomomi.",

  mission: "Manufarmu",
  missionText:
    "Samar da ayyukan tafiya da lodistik masu inganci, masu sauki, kuma masu mayar da hankali ga kwastoma, tare da tabbatar da tsaro, gaskiya, da kwarewa a duk ayyukanmu.",

  vision: "Burinmu",
  visionText:
    "Zama daya daga cikin manyan kamfanonin tafiya da lodistik mafi aminci a Afirka, wanda aka san shi da kirkire-kirkire, kwarewa, da ingantaccen aiki.",

  values: [
    "Gamsuwar Kwastoma a gaba",
    "Gaskiya da Rikon Amana",
    "Kwarewa a Aiki",
    "Aminci da Sadaukarwa",
  ],

  servicesTitle: "Ayyukanmu",
  services: [
    "✈️ Shirya Tafiya da Tikitin Jirgin Sama",
    "🏨 Tanadin Otal da Masauki",
    "🛂 Sarrafa Visa da Takardu",
    "🕋 Shirye-shiryen Umrah da Hajj",
    "🚢 Jigilar Kaya ta Sama da Ruwa",
    "🌍 Yawon Bude Ido na Duniya da Sauya Wuri",
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
<section className="py-20 max-w-5xl mx-auto px-6 text-center">
  <h2 className="text-3xl text-yellow-400 mb-6">
    Company Overview
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white/10 p-6 rounded-xl border border-white/20">
      Customer satisfaction is our top priority
    </div>

    <div className="bg-white/10 p-6 rounded-xl border border-white/20">
      Clients are treated as partners, not outsiders
    </div>

    <div className="bg-white/10 p-6 rounded-xl border border-white/20">
      We ensure safety and reliability in all services
    </div>
  </div>
</section>
    </div>
  );
}
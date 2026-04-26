"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import API from "@/lib/api";

type Lang = "en" | "ar" | "ha";
export default function Home() {

  // ✅ STATES FIRST
  const [packages, setPackages] = useState<any[]>([]);
  const [price, setPrice] = useState(10_000_000);

  // ✅ ADD IT HERE (ONLY ONCE)
  const safePackages = Array.isArray(packages) ? packages : [];

  // ✅ NOW USE IT BELOW
  const priceGroups = [0, 2_000_000, 4_000_000, 6_000_000, 8_000_000, 10_000_000];

  const histogram = priceGroups.map((min, index) => {
    const max = priceGroups[index + 1] ?? Infinity;

    const count = safePackages.reduce((acc, pkg) => {
      const price = Number(pkg?.price ?? 0);
      return price >= min && price < max ? acc + 1 : acc;
    }, 0);

    return {
      label: `₦${min / 1_000_000}M`,
      count,
    };
  });
 const [lang, setLang] = useState<Lang>("en");
  const [videoError, setVideoError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 NEW STATES
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [filterType, setFilterType] = useState("all");
const [filterCategory, setFilterCategory] = useState("all");


const recommendedPackages = packages
  .filter((p) => p.price <= price) // match user budget
  .sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5)) // best first
  .slice(0, 3);
const [cityInput, setCityInput] = useState("");
const [suggestions, setSuggestions] = useState<string[]>([]);

const getBotReply = (input: string) => {
  const msg = input.toLowerCase();

  if (msg.includes("package") || msg.includes("umrah") || msg.includes("hajj")) {
    return "🕋 We offer premium Umrah & Hajj packages with flights, hotels, visa & full support.\n👉 Visit Packages page to explore.";
  }

  if (msg.includes("book")) {
    return "📦 To book:\n1. Choose package\n2. Enter details\n3. Pay securely\n\n✅ Fast & easy!";
  }

  if (msg.includes("price") || msg.includes("cost")) {
    return "💰 Prices vary depending on package type.\n👉 Check Packages page for details.";
  }

  if (msg.includes("visa")) {
    return "🛂 We handle full visa processing.\nJust provide passport details and relax ✅";
  }

  if (msg.includes("hotel") || msg.includes("flight")) {
    return "🏨 We provide top hotels near Haram + flight booking included.";
  }

  if (msg.includes("payment")) {
    return "💳 Secure Paystack payment supported.\nYour transactions are safe 🔒";
  }

  if (msg.includes("hello") || msg.includes("hi")) {
    return "👋 Welcome! How can I assist you today?";
  }

  return "🤖 Ask me about:\n• Packages\n• Booking\n• Visa\n• Prices";
};

  const [messages, setMessages] = useState<any[]>([
    { from: "bot", text: "👋 Welcome! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const BASE_URL = "https://travel-backend-oo52.onrender.com";

  const getImage = (path: string | null) => {
    if (!path) return "/images/makkah.jpg";
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path}`;
  };

  const t = {
    en: {
      hero: "M.Y HAMDALA TRAVEL&TOUR  Experience the Spiritual Journey",
      
      sub: "Experience a seamless and spiritually enriching journey with our luxury Umrah & Hajj packages. Enjoy premium accommodation, reliable flights, expert guidance, and 24/7 support — all designed to give you complete comfort and peace of mind.",
      book: "Book Now",
      about: "About",
      contact: "Contact",
      login: "Login",
      noPackages: "No packages available",
    },
    ar: {
      hero: "M.Y HAMDALA TRAVEL&TOURرحلة روحانية مميزة",
      sub: "استمتع برحلة روحانية سلسة ومليئة بالطمأنينة مع باقات العمرة والحج الفاخرة لدينا. نوفر إقامة متميزة، رحلات موثوقة، إرشاداً متخصصاً، ودعماً على مدار الساعة — كل ذلك لضمان راحتك التامة وراحة بالك.",
      book: "احجز الآن",
      about: "حول",
      contact: "اتصل",
      login: "تسجيل الدخول",
      noPackages: "لا توجد باقات",
    },
    ha: {
      hero: "M.Y HAMDALA TRAVEL&TOUR Tafiya Mai Tsarki",
      sub: "Ji daɗin tafiya mai tsarki cikin sauƙi da kwanciyar hankali tare da kunshin Umrah da Hajj na alfarma. Muna samar da masauki mai inganci, jiragen sama masu aminci, jagoranci na ƙwararru, da tallafi na awanni 24 — duk domin tabbatar da cikakken jin daɗi da kwanciyar hankalinka.",
      book: "Yi Booking",
      about: "Game da Mu",
      contact: "Tuntuɓa",
      login: "Shiga",
      noPackages: "Babu kunshi",
    },
  };

 // 🔥 FETCH PACKAGES
useEffect(() => {
  const fetchPackages = async () => {
    try {
      setLoading(true);

      const res = await API.get("/packages");

      console.log("🔥 RAW:", res.data);

      const safeData = Array.isArray(res.data?.data)
        ? res.data.data
        : [];

      setPackages(safeData);

    } catch (err) {
      console.error("❌ FETCH ERROR:", err);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  fetchPackages();
}, []);


// 🔥 AUTO CITY SUGGESTION
useEffect(() => {
  const cities = [
    ...new Set(
      safePackages
        .map((p) => p?.flight_from)
        .filter(Boolean)
    ),
  ];

  setSuggestions(
    cities.filter((c) =>
      c.toLowerCase().includes(cityInput.toLowerCase())
    )
  );
}, [cityInput, safePackages]);

// 🚀 BOOKING
const handleBooking = (id: number) => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
    return;
  }

  window.location.href = `/booking/${id}`;
};

// ✅ FILTER LOGIC (FULL SAFE)
const filteredPackages = safePackages.filter((pkg) => {
  if (!pkg) return false;

  const title = (pkg.title || "").toLowerCase();
  const category = (pkg.category || "").toLowerCase();
  const flightFrom = (pkg.flight_from || "").toLowerCase();
  const pkgPrice = Number(pkg.price || 0);

  // TYPE
  if (filterType !== "all" && !title.includes(filterType.toLowerCase())) {
    return false;
  }

  // CATEGORY
  if (filterCategory !== "all" && category !== filterCategory.toLowerCase()) {
    return false;
  }

  // PRICE
  if (pkgPrice > price) {
    return false;
  }

  // DATE
  if (date && pkg.departure_date) {
    if (!pkg.departure_date.includes(date)) {
      return false;
    }
  }

  // CITY
  if (city !== "all" && !flightFrom.includes(city.toLowerCase())) {
    return false;
  }

  return true;
});
  // 💬 CHATBOT
  const sendMessage = () => {
  if (!input.trim()) return;

  const userMsg = { from: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: getBotReply(input) },
    ]);
  }, 500);

  setInput("");
};

  return (
    <div className="text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        {!videoError ? (
          <video autoPlay muted loop className="w-full h-full object-cover"
            onError={() => setVideoError(true)}>
            <source src="/videos/makkah.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-cover"
            style={{ backgroundImage: "url('/images/makkah.jpg')" }} />
        )}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* NAVBAR */}
      <div className="flex justify-between px-6 py-4 backdrop-blur bg-black/40 sticky top-0 z-50">
        <h1 className="text-yellow-400 font-bold text-xl">🕋 M.Y HAMDALA TRAVEL AND TOUR</h1>

        <div className="hidden md:flex gap-4 items-center">
          <div className="flex gap-2 text-xl cursor-pointer">
            <span onClick={() => setLang("en")}>🇬🇧</span>
            <span onClick={() => setLang("ha")}>🇳🇬</span>
            <span onClick={() => setLang("ar")}>🇸🇦</span>
          </div>

          <a href="/about" onClick={() => setMenuOpen(false)}>
  {t[lang].about}
</a>


<a href="/contact" onClick={() => setMenuOpen(false)}>
  {t[lang].contact}
</a>
          <a href="/login" className="bg-yellow-500 text-black px-3 py-1 rounded">
            {t[lang].login}
          </a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>☰</button>
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2 className="text-6xl font-extrabold text-yellow-400 mb-6">
          {t[lang].hero}
        </motion.h2>
        <p className="max-w-xl text-gray-300 mb-8">{t[lang].sub}</p>
      </section>
{/* 📱 MOBILE MENU */}
{menuOpen && (
  <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-8 text-2xl">

    {/* ❌ CLOSE */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-5 right-6 text-3xl"
    >
      ✕
    </button>

    {/* LINKS */}
    <a
      href="/"
      onClick={() => setMenuOpen(false)}
      className="hover:text-yellow-400"
    >
      Home
    </a>

    <a
      href="/about"
      onClick={() => setMenuOpen(false)}
      className="hover:text-yellow-400"
    >
      {t[lang].about}
    </a>

    <a
      href="/privacy"
      onClick={() => setMenuOpen(false)}
      className="hover:text-yellow-400"
    >
      {t[lang].about}
    </a>

    <a
      href="/contact"
      onClick={() => setMenuOpen(false)}
      className="hover:text-yellow-400"
    >
      {t[lang].contact}
    </a>

    {/* 🌍 FLAGS */}
    <div className="flex gap-6 text-3xl mt-4">
      <span onClick={() => { setLang("en"); setMenuOpen(false); }}>🇬🇧</span>
      <span onClick={() => { setLang("ha"); setMenuOpen(false); }}>🇳🇬</span>
      <span onClick={() => { setLang("ar"); setMenuOpen(false); }}>🇸🇦</span>
    </div>

    {/* LOGIN */}
    <a
      href="/login"
      onClick={() => setMenuOpen(false)}
      className="bg-yellow-500 text-black px-6 py-3 rounded-xl mt-6"
    >
      {t[lang].login}
    </a>

  </div>
)}
      

      {/* 🔥 FILTER PANEL */}
{filterOpen && (
  <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">

    <div className="bg-[#121826] w-full max-w-xl p-6 rounded-2xl relative">

      {/* CLOSE */}
      <button
        onClick={() => setFilterOpen(false)}
        className="absolute top-4 right-4 text-xl"
      >
        ✕
      </button>

      <h2 className="text-xl mb-6 font-semibold">Filters</h2>

      {/* TYPE */}
      <div className="mb-5">
        <p className="text-sm text-gray-400 mb-2">Package Type</p>
        <div className="flex gap-2 flex-wrap">
          {["all", "hajj", "umrah"].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-4 py-1 rounded-full ${
                filterType === t
                  ? "bg-yellow-500 text-black"
                  : "bg-white/20"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY */}
      <div className="mb-5">
        <p className="text-sm text-gray-400 mb-2">Category</p>
        <div className="flex gap-2 flex-wrap">
          {["all", "premium", "standard", "budget"].map((c) => (
            <button
              key={c}
              onClick={() => setFilterCategory(c)}
              className={`px-4 py-1 rounded-full ${
                filterCategory === c
                  ? "bg-green-600"
                  : "bg-white/20"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mb-5">
        <p className="text-sm text-gray-400 mb-2">Price</p>
        <input
          type="range"
          min="1000000"
          max="10000000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1">₦{price.toLocaleString()}</p>
      </div>
<div className="flex items-end gap-2 mt-4 h-32">
  {histogram.map((h, i) => (
    <div key={i} className="flex flex-col items-center">
      <div
        className="bg-yellow-500 w-6 rounded"
        style={{ height: `${h.count * 15}px` }}
      />
      <span className="text-xs mt-1">{h.label}</span>
    </div>
  ))}
</div>
      {/* DATE */}
      <div className="mb-5">
        <p className="text-sm text-gray-400 mb-2">Travel Date</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 bg-black rounded"
        />
      </div>

      {/* CITY */}
     <div className="relative">
  <input
    value={cityInput}
    onChange={(e) => {
      setCityInput(e.target.value);
      setCity(e.target.value || "all");
    }}
    placeholder="Search city..."
    className="w-full p-3 bg-black rounded"
  />

  {cityInput && suggestions.length > 0 && (
    <div className="absolute bg-[#121826] w-full mt-1 rounded shadow-lg z-50">
      {suggestions.map((s, i) => (
        <div
          key={i}
          onClick={() => {
            setCity(s);
            setCityInput(s);
            setSuggestions([]);
          }}
          className="p-2 hover:bg-yellow-500 hover:text-black cursor-pointer"
        >
          {s}
        </div>
      ))}
    </div>
  )}
</div>
      {/* ACTIONS */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            setFilterType("all");
            setFilterCategory("all");
            setPrice(10000000);
            setDate("");
            setCity("all");
          }}
          className="text-gray-400"
        >
          Clear
        </button>

        <button
          onClick={() => setFilterOpen(false)}
          className="bg-yellow-500 text-black px-6 py-2 rounded"
        >
          Apply
        </button>
      </div>

    </div>
  </div>
)}
<div className="mt-6 bg-white/10 backdrop-blur-xl p-4 rounded-xl flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">

  <input
    placeholder="City (e.g Kano)"
    className="p-2 rounded bg-black/60 text-white w-40"
  />

  <input
    type="date"
    className="p-2 rounded bg-black/60 text-white"
  />

  <select className="p-2 rounded bg-black/60 text-white">
    <option>All Packages</option>
    <option>Umrah</option>
    <option>Hajj</option>
  </select>

  <button
    onClick={() => setFilterOpen(true)}
    className="bg-yellow-500 text-black px-4 rounded"
  >
    Search 🔍
  </button>
</div><div className="mt-6 flex gap-6 text-gray-300 text-sm justify-center">
  <span>✔ Trusted Agency</span>
  <span>✔ 24/7 Support</span>
  <span>✔ Best Prices</span>
</div>
<p className="text-center text-gray-400 mb-4">
  Showing {filteredPackages.length} of {packages.length} packages
</p>
{recommendedPackages.length > 0 && (
  <div className="px-6 mb-10">
    <h2 className="text-xl mb-4 text-yellow-400">✨ Recommended</h2>

    <div className="grid md:grid-cols-3 gap-4">
      {recommendedPackages.map((pkg) => (
        <div key={pkg.id} className="bg-white/10 p-4 rounded-xl">
          <h3 className="font-bold">{pkg.title}</h3>
          <p className="text-sm text-gray-400">₦{pkg.price}</p>
        </div>
      ))}
    </div>
  </div>
)}
      {/* PACKAGES */}
  <section className="py-10 px-6">
  {filteredPackages.length === 0 ? (
    <p className="text-center text-gray-400">
      No packages match your filters
    </p>
  ) : (
    <div className="grid md:grid-cols-3 gap-8">
  {filteredPackages.map((pkg) => {
    const booked = pkg.booked_slots || 0;
    const total = pkg.total_slots || 0;
    const remaining = total - booked;

    return (
      <motion.div
        key={pkg.id}
        whileHover={{ scale: 1.04 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl transition duration-300"
      >

        {/* IMAGE */}
        <div className="relative">
          <img
            src={getImage(pkg.image_url)}
            className="w-full h-52 object-cover"
          />

          {/* CATEGORY BADGE */}
          {pkg.category && (
            <span className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-semibold uppercase
              ${pkg.category === "premium"
                ? "bg-yellow-500 text-black"
                : pkg.category === "standard"
                ? "bg-green-600"
                : "bg-gray-500"
              }`}>
              {pkg.category}
            </span>
          )}

          {/* PRICE FLOAT */}
          <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-yellow-400 text-sm">
            ₦{Number(pkg.price).toLocaleString()}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* TITLE */}
          <h2 className="font-semibold text-lg mb-1 group-hover:text-yellow-400 transition">
            {pkg.title}
          </h2>

          {/* ⭐ RATING */}
          <div className="text-yellow-400 text-sm mb-2 flex items-center gap-1">
            ⭐ 4.7 <span className="text-gray-400">(120 reviews)</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">
            {pkg.description}
          </p>

          {/* DETAILS */}
          <div className="text-sm text-gray-300 space-y-1 mb-3">

            {/* ✈️ FLIGHT */}
            {(pkg.flight_name || (pkg.flight_from && pkg.flight_to)) && (
              <p>
                ✈️ {pkg.flight_name ? `${pkg.flight_name} — ` : ""}
                {pkg.flight_from} → {pkg.flight_to}
              </p>
            )}

            {/* 📅 DATE */}
            {pkg.departure_date && pkg.return_date && (
              <p>
                📅 {pkg.departure_date} → {pkg.return_date}
              </p>
            )}

            {/* 🏨 HOTEL */}
            {pkg.hotel_name && (
              <p>
                🏨 {pkg.hotel_name} ⭐{pkg.hotel_rating || "3"}
              </p>
            )}

            {/* 🕒 DURATION */}
            {pkg.duration_days > 0 && (
              <p>🕒 {pkg.duration_days} days</p>
            )}

          </div>

          {/* SLOTS */}
        {/* SLOTS */}
<div className="mb-4 bg-green-900/20 p-3 rounded-xl border border-green-500/20">

  {pkg.total_slots > 0 ? (
    <>
      <p className={`text-sm font-semibold ${
        (pkg.total_slots - (pkg.booked_slots || 0)) < 10
          ? "text-red-400"
          : "text-green-400"
      }`}>
        🪑 {pkg.total_slots - (pkg.booked_slots || 0)} spots left
      </p>

      <div className="w-full bg-gray-700 h-2 rounded mt-2">
        <div
          className="bg-green-500 h-2 rounded transition-all"
          style={{
            width: `${
              ((pkg.booked_slots || 0) / pkg.total_slots) * 100
            }%`,
          }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">
        {pkg.booked_slots || 0} of {pkg.total_slots} booked
      </p>
    </>
  ) : (
    <p className="text-gray-400 text-sm">
      No slot data available
    </p>
  )}

</div>
          {/* ACTION */}
          <div className="flex justify-between items-center">

            <span className="text-yellow-400 font-bold text-lg">
              ₦{Number(pkg.price).toLocaleString()}
            </span>

            <button
              onClick={() => handleBooking(pkg.id)}
              className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-medium hover:scale-105 transition hover:bg-yellow-400"
            >
              {t[lang].book}
            </button>

          </div>

        </div>

      </motion.div>
    );
  })}
</div>
  )}
</section>
     <footer className="relative text-white pt-16 pb-10 px-6 mt-20 overflow-hidden">

  {/* 🔥 VIDEO OVERLAY */}
  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm -z-10" />

  {/* OPTIONAL GRADIENT FADE (PREMIUM LOOK) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent -z-10" />

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

    {/* LOGO + TAGLINE */}
    <div>
      <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
        ✈️ M.Y HAMDALA TRAVEL AND TOUR
      </h1>
      <p className="text-gray-300 text-sm">
        Your gateway to the holy lands
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>
          <a href="/about" className="hover:text-yellow-400 transition duration-300 hover:translate-x-1 inline-block">
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-400 transition duration-300 hover:translate-x-1 inline-block">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400 transition duration-300 hover:translate-x-1 inline-block">
            FAQ
          </a>
        </li>
        <li>
         <a href="/privacy">Privacy & Policy</a>
        </li>
      </ul>
    </div>

    {/* PACKAGES */}
    <div>
      <h3 className="font-semibold mb-4">Packages</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li className="hover:text-yellow-400 transition cursor-pointer">Hajj 2026</li>
        <li className="hover:text-yellow-400 transition cursor-pointer">Ramadan Umrah</li>
        <li className="hover:text-yellow-400 transition cursor-pointer">Sha'ban Umrah</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="font-semibold mb-4">Contact Us</h3>

      <div className="space-y-2 text-gray-300 text-sm">
        <p>📍 NO26 BLOCK A RAILWAY LAGOS STREET, CIVI CENTER KANO</p>
        <p>📞 +234 7065854518</p>
        <p>✉️ dodoumarhafiz@gmail.com</p>
      </div>

      {/* 🔥 SOCIAL ICONS (PRO MAX) */}
      <div className="flex gap-4 mt-5">

        {/* FACEBOOK */}
        <a href="#" className="group bg-white/10 p-3 rounded-full transition duration-300 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/40">
          <svg width="18" height="18" fill="currentColor" className="group-hover:scale-110 transition">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>

        {/* TWITTER */}
        <a href="#" className="group bg-white/10 p-3 rounded-full transition duration-300 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/40">
          <svg width="18" height="18" fill="currentColor" className="group-hover:scale-110 transition">
            <path d="M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.5 8.5 0 01-2.7 1A4.2 4.2 0 0016 4a4.2 4.2 0 00-4.2 4.2c0 .3 0 .6.1.8A12 12 0 013 5.1a4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1a4.2 4.2 0 003.3 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.5 8.5 0 012 19.5 12 12 0 008.5 21c7.8 0 12-6.5 12-12v-.5A8.5 8.5 0 0022 5.8z"/>
          </svg>
        </a>

        {/* INSTAGRAM */}
        <a href="#" className="group bg-white/10 p-3 rounded-full transition duration-300 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/40">
          <svg width="18" height="18" fill="currentColor" className="group-hover:scale-110 transition">
            <path d="M7.75 2C4.6 2 2 4.6 2 7.75v8.5C2 19.4 4.6 22 7.75 22h8.5C19.4 22 22 19.4 22 16.25v-8.5C22 4.6 19.4 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          </svg>
        </a>

      </div>

    </div>

  </div>

  {/* 🔥 BOTTOM BAR */}
  <div className="text-center text-gray-400 text-sm mt-10 border-t border-white/10 pt-6">
    ©️ {new Date().getFullYear()} M.Y HAMDALA TRAVEL AND TOUR. All rights reserved.
  </div>

</footer>
      {/* CHATBOT */}
      <div className="fixed bottom-5 right-5 z-50">
        <button onClick={() => setChatOpen(!chatOpen)}
          className="bg-yellow-500 p-3 rounded-full">💬</button>

        {chatOpen && (
          <div className="bg-[#121826] w-80 mt-2 p-3 rounded-xl">
            <div className="h-40 overflow-y-auto">
              {messages.map((m, i) => <div key={i}>{m.text}</div>)}
            </div>

            <input value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full mt-2 p-2 bg-black"/>

            <button onClick={sendMessage}
              className="bg-yellow-500 mt-2 w-full">Send</button>
          </div>
        )}
      </div>

    </div>
  );
}
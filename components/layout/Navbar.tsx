"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Globe,
  User,
  Phone,
  MessageCircle,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

// ==============================
// NAVIGATION
// ==============================

const menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Packages",
    href: "/packages",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {

  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  // ==============================
  // SCROLL EFFECT
  // ==============================

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 30
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  // ==============================
  // CLOSE MOBILE MENU
  // ==============================

  useEffect(() => {

    setMobileOpen(false);

  }, [pathname]);

  // ==============================
  // LOCK BODY SCROLL
  // ==============================

  useEffect(() => {

    document.body.style.overflow =
      mobileOpen
        ? "hidden"
        : "auto";

    return () => {

      document.body.style.overflow =
        "auto";

    };

  }, [mobileOpen]);

  return (
    <>      {/* ==============================
          HEADER
      ============================== */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ==============================
              LOGO
          ============================== */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <Image
              src="/images/logo.png"
              alt="M.Y HAMDALA Travel"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />

            <div>

              <h1
                className={`text-xl font-black transition-colors ${
                  scrolled
                    ? "text-blue-700"
                    : "text-white"
                }`}
              >
                M.Y HAMDALA
              </h1>

              <p
                className={`text-xs transition-colors ${
                  scrolled
                    ? "text-slate-500"
                    : "text-yellow-300"
                }`}
              >
                Travel & Tour
              </p>

            </div>

          </Link>

          {/* ==============================
              DESKTOP MENU
          ============================== */}

          <nav className="hidden items-center gap-8 lg:flex">

            {menus.map((menu) => {

              const active =
                pathname === menu.href;

              return (

                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`relative font-semibold transition ${
                    active
                      ? "text-blue-600"
                      : scrolled
                      ? "text-slate-700 hover:text-blue-600"
                      : "text-white hover:text-yellow-300"
                  }`}
                >

                  {menu.title}

                  {active && (

                    <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-blue-600" />

                  )}

                </Link>

              );

            })}

          </nav>

          {/* ==============================
              RIGHT SIDE
          ============================== */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="tel:+2348034454580"
              className={`hidden items-center gap-2 xl:flex ${
                scrolled
                  ? "text-slate-700"
                  : "text-white"
              }`}
            >

              <Phone size={18} />

              <span className="text-sm font-medium">

                +234 803 445 4580

              </span>

            </a>

            <a
              href="https://wa.me/2348034454580"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700"
            >

              <MessageCircle size={20} />

            </a>

            <button
              className={`flex items-center gap-2 rounded-full px-3 py-2 transition ${
                scrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >

              <Globe size={18} />

              EN

            </button>

            <Link
              href="/login"
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 font-semibold transition ${
                scrolled
                  ? "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-blue-700"
              }`}
            >

              <User size={18} />

              Login

            </Link>

            <Link
              href="/booking"
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-bold text-slate-900 transition hover:from-yellow-500 hover:to-yellow-600"
            >

              Book Now

            </Link>

          </div>

          {/* ==============================
              MOBILE MENU BUTTON
          ============================== */}

          <button
            onClick={() =>
              setMobileOpen(true)
            }
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition lg:hidden ${
              scrolled
                ? "bg-slate-100 text-slate-900"
                : "bg-white/10 text-white backdrop-blur"
            }`}
          >

            <Menu size={28} />

          </button>

        </div>

      </header>      {/* ==============================
          MOBILE MENU
      ============================== */}

      <AnimatePresence>

        {mobileOpen && (

          <>

            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setMobileOpen(false)
              }
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white shadow-2xl"
            >

              {/* Drawer Header */}

              <div className="flex items-center justify-between border-b p-6">

                <div className="flex items-center gap-3">

                  <Image
                    src="/images/logo.png"
                    alt="M.Y HAMDALA"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />

                  <div>

                    <h2 className="text-xl font-black text-blue-700">
                      M.Y HAMDALA
                    </h2>

                    <p className="text-sm text-slate-500">
                      Travel & Tour
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="rounded-full bg-slate-100 p-2"
                >

                  <X size={24} />

                </button>

              </div>

              {/* Navigation */}

              <div className="flex-1 overflow-y-auto px-6 py-6">

                <nav className="space-y-2">

                  {menus.map((menu) => {

                    const active =
                      pathname === menu.href;

                    return (

                      <Link
                        key={menu.href}
                        href={menu.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className={`block rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                          active
                            ? "bg-blue-600 text-white"
                            : "text-slate-800 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >

                        {menu.title}

                      </Link>

                    );

                  })}

                </nav>

                {/* Contact */}

                <div className="mt-8 rounded-2xl bg-slate-100 p-5">

                  <h3 className="font-bold text-slate-800">
                    Contact Us
                  </h3>

                  <a
                    href="tel:+2348034454580"
                    className="mt-4 flex items-center gap-3 text-slate-700"
                  >

                    <Phone
                      size={18}
                      className="text-blue-600"
                    />

                    +234 803 445 4580

                  </a>

                </div>

                {/* Buttons */}

                <div className="mt-8 space-y-4">

                  <Link
                    href="/login"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="flex items-center justify-center gap-2 rounded-2xl border border-blue-700 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                  >

                    <User size={18} />

                    Login

                  </Link>

                  <Link
                    href="/booking"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 font-bold text-slate-900 transition hover:from-yellow-500 hover:to-yellow-600"
                  >

                    Book Now

                  </Link>

                  <a
                    href="https://wa.me/2348034454580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
                  >

                    <MessageCircle size={20} />

                    WhatsApp

                  </a>

                </div>

              </div>              {/* Footer */}

              <div className="border-t border-slate-200 p-6">

                <div className="flex items-center justify-center gap-2">

                  <Globe
                    size={18}
                    className="text-blue-600"
                  />

                  <span className="text-sm text-slate-600">
                    English
                  </span>

                </div>

                <p className="mt-6 text-center text-sm text-slate-500">

                  © {new Date().getFullYear()} M.Y HAMDALA Travel & Tour.

                </p>

                <p className="mt-2 text-center text-xs text-slate-400">

                  Powered by Ztech Universal Solution

                </p>

              </div>

            </motion.aside>

          </>

        )}

      </AnimatePresence>

    </>

  );

}
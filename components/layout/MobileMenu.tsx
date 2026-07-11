"use client";

import Link from "next/link";

import {
  X,
  ChevronDown,
  Globe,
  Phone,
  User,
  Plane,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { navItems } from "./NavItems";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {open && (

        <>

          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-50
              bg-black/60
              backdrop-blur-sm
            "
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              top-0
              right-0
              z-[60]
              flex
              h-screen
              w-[340px]
              flex-col
              overflow-y-auto
              bg-white
              shadow-2xl
            "
          >

            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                p-6
              "
            >

              <div>

                <h2 className="text-xl font-black text-slate-900">
                  M.Y HAMDALA
                </h2>

                <p className="text-sm text-blue-700">
                  Travel & Tour
                </p>

              </div>

              <button
                onClick={onClose}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                "
              >

                <X size={22} />

              </button>

            </div>

            {/* Navigation */}

            <div className="flex-1 px-6 py-6">
                            {navItems.map((item) => {

              if (item.children) {

                return (

                  <div
                    key={item.label}
                    className="mb-3"
                  >

                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-slate-100
                        px-4
                        py-3
                        font-semibold
                        text-slate-900
                      "
                    >

                      <span>
                        {item.label}
                      </span>

                      <ChevronDown
                        size={18}
                      />

                    </div>

                    <div className="ml-4 space-y-2">

                      {item.children.map((child) => (

                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={onClose}
                          className="
                            block
                            rounded-lg
                            px-3
                            py-2
                            text-sm
                            text-slate-600
                            transition
                            hover:bg-blue-50
                            hover:text-blue-700
                          "
                        >

                          {child.title}

                        </Link>

                      ))}

                    </div>

                  </div>

                );

              }

              return (

                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={onClose}
                  className="
                    mb-2
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    font-semibold
                    text-slate-800
                    transition
                    hover:bg-blue-50
                    hover:text-blue-700
                  "
                >

                  {item.label}

                </Link>

              );

            })}

            {/* Contact */}

            <div className="mt-8 rounded-2xl bg-slate-100 p-5">

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-blue-700"
                />

                <span className="text-sm font-medium">
                  +234 803 445 4580
                </span>

              </div>

              <div className="mt-4 flex items-center gap-3">

                <Globe
                  size={18}
                  className="text-blue-700"
                />

                <span className="text-sm font-medium">
                  English
                </span>

              </div>

            </div>

            {/* Login */}

            <Link
              href="/login"
              onClick={onClose}
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-blue-700
                py-3
                font-semibold
                text-blue-700
                transition
                hover:bg-blue-700
                hover:text-white
              "
            >

              <User size={18} />

              Login

            </Link>

            {/* Book Now */}

            <Link
              href="https://booking.myhamdalatravels.com"
              target="_blank"
              onClick={onClose}
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-yellow-400
                to-yellow-500
                py-4
                font-bold
                text-slate-900
                transition
                hover:from-yellow-500
                hover:to-yellow-600
              "
            >

              <Plane size={18} />

              Book Now

            </Link>
                      </div>

          {/* ===============================
                  FOOTER
          =============================== */}

          <div
            className="
              border-t
              bg-slate-50
              px-6
              py-6
            "
          >

            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} M.Y Hamdala Travel & Tour
            </p>

            <p className="mt-2 text-center text-xs text-slate-400">
              Your Trusted Partner for Hajj, Umrah,
              Visa Processing & International Travel.
            </p>

          </div>

        </motion.aside>

      </>

      )}

    </AnimatePresence>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";

import {
  PlayCircle,
  ArrowRight,
} from "lucide-react";

interface Props {
  hero?: any;
}

export default function HeroPreview({
  hero,
}: Props) {

  return (

    <div className="sticky top-6 overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

      {/* Preview Header */}

      <div className="border-b border-white/10 p-6">

        <h2 className="text-2xl font-black text-white">
          Live Preview
        </h2>

        <p className="mt-2 text-slate-400">
          Homepage Hero Preview
        </p>

      </div>

      {/* Hero Preview */}

      <div className="relative min-h-[700px] overflow-hidden">

        {/* Background */}

        {hero?.background_image ? (

          <Image
            src={hero.background_image}
            alt="Hero Background"
            fill
            className="object-cover"
          />

        ) : (

          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#1E293B] to-[#0F172A]" />

        )}

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}

        <div className="relative z-10 flex h-full flex-col justify-center p-10">

          <span className="mb-4 inline-flex w-fit rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black">

            M.Y HAMDALA TRAVEL

          </span>

          <h1 className="max-w-xl text-5xl font-black leading-tight text-white">

            {hero?.title ||
              "Your Journey Begins With Us"}

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">

            {hero?.subtitle ||
              "Book Hajj, Umrah, Flights, Hotels and Visa services with confidence and peace of mind."}

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href={hero?.button_link || "#"}
              className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black"
            >

              {hero?.button_text ||
                "Book Now"}

              <ArrowRight size={18} />

            </Link>

            <Link
              href={
                hero?.secondary_button_link ||
                "#"
              }
              className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur"
            >

              {hero?.secondary_button_text ||
                "Learn More"}

            </Link>

          </div>

          {/* Video */}

          {hero?.video_url && (

            <button
              className="
                mt-10
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white/10
                px-6
                py-4
                text-white
                backdrop-blur
              "
            >

              <PlayCircle
                size={24}
                className="text-yellow-400"
              />

              Watch Introduction

            </button>

          )}

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 bg-[#0B1220] p-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-400">

            Homepage Preview

          </span>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              hero?.is_active
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >

            {hero?.is_active
              ? "Active"
              : "Inactive"}

          </span>

        </div>

      </div>

    </div>

  );

}
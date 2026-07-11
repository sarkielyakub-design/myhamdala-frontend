"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface HeroData {
  title: string;
  subtitle: string;
  image_url: string;
  primary_button_text: string;
  primary_button_link: string;
  secondary_button_text: string;
  secondary_button_link: string;
  booking_url: string;
}

interface HeroProps {
  hero: HeroData;
}

export default function Hero({ hero }: HeroProps) {
  if (!hero) {
    return (
      <section className="flex h-screen items-center justify-center bg-red-600 text-4xl font-bold text-white">
        No Hero Data
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={hero.image_url}
        alt={hero.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-yellow-400" />
              Trusted Hajj • Umrah • Visa • Flights
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={hero.primary_button_link}
                className="rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                {hero.primary_button_text} <ArrowRight className="ml-2 inline h-5 w-5" />
              </Link>

              <Link
                href={hero.secondary_button_link}
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                {hero.secondary_button_text}
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8">
              <div>
                <h2 className="text-4xl font-black text-yellow-400">5K+</h2>
                <p className="text-gray-300">Happy Travellers</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-yellow-400">25+</h2>
                <p className="text-gray-300">Countries</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-yellow-400">15+</h2>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-white">
                Online Booking
              </h2>

              <p className="mt-2 text-gray-300">
                Fast • Secure • Reliable
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-4 text-center text-white">✈ Flights</div>
                <div className="rounded-xl bg-white/10 p-4 text-center text-white">🕌 Umrah</div>
                <div className="rounded-xl bg-white/10 p-4 text-center text-white">🕋 Hajj</div>
                <div className="rounded-xl bg-white/10 p-4 text-center text-white">🏨 Hotels</div>
                <div className="rounded-xl bg-white/10 p-4 text-center text-white">🛂 Visa</div>
                <div className="rounded-xl bg-white/10 p-4 text-center text-white">🌍 Tours</div>
              </div>

              <Link
                href={hero.booking_url}
                className="mt-8 flex w-full justify-center rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-500"
              >
                Open Booking Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
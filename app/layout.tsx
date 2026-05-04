import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.Y Hamdala Travel & Tour | Umrah, Hajj, Visa & Luxury Travel Services",
  description:
    "M.Y Hamdala Travel & Tour offers premium Umrah & Hajj packages, visa processing, flight booking, and international travel services across Nigeria and beyond.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* MAIN APP */}
        {children}

        {/* 🍪 COOKIE CONSENT (ADD THIS) */}
        <CookieConsent />

      </body>
    </html>
  );
}
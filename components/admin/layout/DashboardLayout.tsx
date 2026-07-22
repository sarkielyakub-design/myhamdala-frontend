"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-[#040816] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Desktop Header */}
        <Header />

        {/* Page */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">

          <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}
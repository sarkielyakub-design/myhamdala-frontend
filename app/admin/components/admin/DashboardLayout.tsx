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

      <Sidebar />

      <main className="flex-1 overflow-auto">

        <Header />

        <div className="p-6 md:p-10">
          {children}
        </div>

      </main>

    </div>
  );
}
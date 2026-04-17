"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please fill all fields ⚠️");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // 🔐 SAVE TOKEN
      localStorage.setItem("token", res.data.access_token);

      // 👤 SAVE USER
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 🚀 REDIRECT BASED ON ROLE
      if (res.data.user.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }

    } catch (err: any) {
      console.error(err);

      // 🔥 BETTER ERROR HANDLING
      if (err.response?.data?.detail === "Account not verified") {
        alert("Please verify your account via OTP 📩");
      } else if (err.response?.status === 401) {
        alert("Invalid email or password ❌");
      } else if (err.response?.status === 403) {
        alert("Access denied ❌");
      } else {
        alert("Something went wrong ⚠️");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/makkah.jpg')",
        }}
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* 🧊 LOGIN CARD */}
      <div className="relative z-10 w-full max-w-sm p-8 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl">

        {/* 🏷️ BRAND */}
        <h2 className="text-center text-yellow-400 font-semibold text-sm mb-1 tracking-wide">
          M.Y HAMDALA TRAVEL & TOUR
        </h2>

        <h1 className="text-3xl font-bold mb-2 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-sm text-center mb-6">
          Continue your spiritual journey 🕋
        </p>

        {/* EMAIL */}
        <input
          className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="w-full mb-6 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={login}
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login 🚀"}
        </button>

        {/* REGISTER */}
        <p className="text-center text-sm text-gray-300 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-yellow-400 hover:underline">
            Create one
          </a>
        </p>

        {/* FOOTER */}
        <p className="text-center text-gray-400 text-xs mt-6">
          Powered by M.Y Hamdala • Secure Login
        </p>
      </div>
    </div>
  );
}
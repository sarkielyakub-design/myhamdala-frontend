"use client";

import { useState } from "react";
import API from "@/lib/api";

type Step = "register" | "forgot" | "reset";

export default function AuthPage() {
  const [step, setStep] = useState<Step>("register");

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // =========================
  // 📝 REGISTER (NO OTP)
  // =========================
  const register = async () => {
    if (!form.email || !form.password || !form.name) {
      return alert("Fill all fields");
    }

    try {
      setLoading(true);

      await API.post("/auth/register", form);

      // 🔥 OPTION 1: Redirect to login
      window.location.href = "/login";

      // 🔥 OPTION 2 (BETTER UX): auto-login
      // const login = await API.post("/auth/login", {
      //   email: form.email,
      //   password: form.password,
      // });
      // localStorage.setItem("token", login.data.access_token);
      // window.location.href = "/";

    } catch (err: any) {
      alert(err.response?.data?.detail || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // 🔁 FORGOT PASSWORD
  // =========================
  const sendResetOTP = async () => {
    try {
      setLoading(true);

      await API.post("/auth/forgot-password", null, {
        params: { email: form.email },
      });

      setStep("reset");
    } catch {
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // 🔐 RESET PASSWORD
  // =========================
  const resetPassword = async () => {
    try {
      setLoading(true);

      await API.post("/auth/reset-password", null, {
        params: {
          email: form.email,
          otp,
          new_password: newPassword,
        },
      });

      alert("✅ Password reset successful");
      window.location.href = "/login";
    } catch {
      alert("Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          {step === "register" && "Create Account"}
          {step === "forgot" && "Forgot Password"}
          {step === "reset" && "Reset Password"}
        </h2>

        {/* REGISTER */}
        {step === "register" && (
          <>
            <input name="name" placeholder="Name" onChange={handleChange} className="input" />
            <input name="email" placeholder="Email" onChange={handleChange} className="input" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input" />

            <button onClick={register} className="btn-yellow">
              {loading ? "Creating..." : "Register 🚀"}
            </button>

            <p className="text-sm text-center mt-4">
              Already have account?{" "}
              <a href="/login" className="text-yellow-400">Login</a>
            </p>

            <p
              onClick={() => setStep("forgot")}
              className="text-center text-gray-400 text-sm mt-2 cursor-pointer hover:text-yellow-400"
            >
              Forgot Password?
            </p>
          </>
        )}

        {/* FORGOT */}
        {step === "forgot" && (
          <>
            <input
              placeholder="Enter Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input"
            />

            <button onClick={sendResetOTP} className="btn-yellow">
              Send OTP
            </button>
          </>
        )}

        {/* RESET */}
        {step === "reset" && (
          <>
            <input placeholder="OTP" onChange={(e) => setOtp(e.target.value)} className="input" />
            <input placeholder="New Password" type="password" onChange={(e) => setNewPassword(e.target.value)} className="input" />

            <button onClick={resetPassword} className="btn-green">
              Reset Password
            </button>
          </>
        )}

      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          margin-bottom: 12px;
          background: black;
          border: 1px solid #333;
          border-radius: 8px;
        }

        .btn-yellow {
          width: 100%;
          background: #facc15;
          color: black;
          padding: 12px;
          border-radius: 8px;
          font-weight: bold;
        }

        .btn-green {
          width: 100%;
          background: #22c55e;
          color: black;
          padding: 12px;
          border-radius: 8px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
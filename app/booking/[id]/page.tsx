"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import API from "@/lib/api";

export default function BookingPage() {
  const params = useParams();
  const id = Number(params?.id);

  const [form, setForm] = useState({
  surname: "",
  first_name: "",
  given_names: "",
  nationality: "",
  phone: "",
  email: "", // ✅ NEW

  date_of_birth: "",
  place_of_birth: "",
  passport_number: "",
  passport_issue: "",
  passport_expiry: "",
});

  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION (UPGRADED)
  const validateForm = () => {
    for (const key in form) {
      if (!form[key as keyof typeof form]) {
        alert(`⚠️ Please fill ${key.replaceAll("_", " ")}`);
        return false;
      }
    }

    if (form.phone.length < 10) {
      alert("⚠️ Enter valid phone number");
      return false;
    }

    if (!agreed) {
      alert("⚠️ You must accept Terms & Conditions");
      return false;
    }

    return true;
  };

  // 🚀 SUBMIT
  const submitBooking = async () => {
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        localStorage.setItem("redirectAfterLogin", `/booking/${id}`);
        window.location.href = "/login";
        return;
      }

      setLoading(true);

const payload = {
  surname: form.surname.trim(),
  first_name: form.first_name.trim(),
  given_names: form.given_names.trim(),
  nationality: form.nationality.trim(),

  phone: form.phone.trim(),
  email: form.email.trim(), // ✅ ADD

  date_of_birth: form.date_of_birth,
  place_of_birth: form.place_of_birth.trim(),

  passport_number: form.passport_number.trim(),
  passport_issue: form.passport_issue,
  passport_expiry: form.passport_expiry,
};
      console.log("🚀 PAYLOAD:", payload);

      const res = await API.post(
        `/bookings/create-and-pay?package_id=${id}`,
        payload
      );

      const url = res.data.authorization_url;

      if (!url) {
        alert("❌ Payment link not generated");
        return;
      }

      // 🔥 REDIRECT
      window.location.href = url;

    } catch (err: any) {
      console.error("❌ ERROR:", err);

      const msg =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        "Payment failed ❌";

      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/makkah.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 w-full max-w-5xl px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-3">
            🕋 M.Y HAMDALA TRAVEL AND TOUR
          </h1>
          <p className="text-gray-300">
            Complete your booking with accurate traveler details
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-6">

            <Input name="surname" label="Surname" onChange={handleChange} />
            <Input name="first_name" label="First Name" onChange={handleChange} />
            <Input name="given_names" label="Other Names" onChange={handleChange} />
            <Input name="nationality" label="Nationality" onChange={handleChange} />

            {/* ✅ NEW PHONE */}
            <Input name="phone" label="Phone Number" onChange={handleChange} />
             <Input name="email" label="Email Address" type="email" onChange={handleChange} />
            <Input name="date_of_birth" label="Date of Birth" type="date" onChange={handleChange} />
            <Input name="place_of_birth" label="Place of Birth" onChange={handleChange} />

            <Input name="passport_number" label="Passport Number" onChange={handleChange} />
            <Input name="passport_issue" label="Date of Issue" type="date" onChange={handleChange} />
            <Input name="passport_expiry" label="Date of Expiry" type="date" onChange={handleChange} />

          </div>

          {/* TERMS */}
          <div className="mt-8 bg-black/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-yellow-400 font-bold mb-3">
              📜 Booking Terms & Conditions
            </h3>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Payments are processed securely via Paystack</li>
              <li>• Bookings are confirmed only after successful payment</li>
              <li>• Passport must be valid for at least 6 months</li>
              <li>• Visa approval depends on Saudi authorities</li>
              <li>• Flight schedules may change due to airline policies</li>
              <li>• No refund after confirmed booking</li>
            </ul>

            <label className="flex items-center gap-2 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <span className="text-sm">
                I agree to all Terms & Conditions
              </span>
            </label>
          </div>

          {/* BUTTON */}
          <button
            onClick={submitBooking}
            disabled={loading || !agreed}
            className="mt-10 w-full py-4 rounded-xl font-bold text-lg 
            bg-gradient-to-r from-yellow-400 to-yellow-500 text-black
            hover:scale-[1.04] transition duration-300
            disabled:opacity-50"
          >
            {loading ? "Processing Payment..." : "Proceed to Payment 💳"}
          </button>

        </div>
      </div>
    </div>
  );
}

// INPUT COMPONENT
function Input({ name, label, type = "text", onChange }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-300 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="
          bg-white/10 border border-white/20 p-3 rounded-lg
          outline-none text-white
          focus:ring-2 focus:ring-yellow-500
        "
      />
    </div>
  );
}
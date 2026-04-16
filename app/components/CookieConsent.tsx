"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#0B0F19] border-t border-white/10 p-4">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* TEXT */}
        <p className="text-sm text-gray-300">
          🍪 We use cookies to improve your experience. By using our website,
          you agree to our{" "}
          <a href="/privacy" className="text-yellow-400 underline">
            Privacy Policy
          </a>.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-lg bg-white/10 text-sm"
          >
            Decline
          </button>

          <button
            onClick={accept}
            className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold text-sm"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}
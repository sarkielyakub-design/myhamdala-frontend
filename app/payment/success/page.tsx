"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const params = useSearchParams();
  const router = useRouter();

  const reference = params.get("reference");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!reference) {
      setStatus("error");
      return;
    }

    fetch(`https://travel-backend-0052.onrender.com/api/v1/bookings/verify/${reference}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("success");

          // 🔥 redirect after 4s
          setTimeout(() => {
            router.push("/");
          }, 4000);
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [reference]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* ICON */}
        {status === "loading" && <Spinner />}
        {status === "success" && <SuccessIcon />}
        {status === "error" && <ErrorIcon />}

        {/* TITLE */}
        <h2 style={styles.title}>
          {status === "loading" && "Processing Payment..."}
          {status === "success" && "Payment Successful"}
          {status === "error" && "Payment Failed"}
        </h2>

        {/* TEXT */}
        <p style={styles.subtitle}>
          {status === "loading" && "Please wait while we confirm your booking"}
          {status === "success" && "Your booking has been confirmed"}
          {status === "error" && "Something went wrong, contact support"}
        </p>

        {/* BUTTON */}
        {status !== "loading" && (
          <button style={styles.button} onClick={() => router.push("/")}>
            Go Home
          </button>
        )}

      </div>
    </div>
  );
}

/* ================= UI ================= */

function Spinner() {
  return <div style={styles.spinner}></div>;
}

function SuccessIcon() {
  return <div style={styles.success}>✓</div>;
}

function ErrorIcon() {
  return <div style={styles.error}>✕</div>;
}

/* ================= STYLES ================= */

const styles: any = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
  },

  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "20px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
  },

  button: {
    marginTop: "25px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },

  spinner: {
    width: "60px",
    height: "60px",
    border: "5px solid #ddd",
    borderTop: "5px solid #0ea5e9",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "0 auto",
  },

  success: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#22c55e",
    color: "#fff",
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },

  error: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#ef4444",
    color: "#fff",
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
};
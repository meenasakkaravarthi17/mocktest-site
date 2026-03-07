"use client";

import { useEffect, useState } from "react";

export default function Payment({ params }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      window.location.href = "/login";
    } else {
      setAllowed(true);
    }
  }, []);

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();

    if (!order.id) {
      alert("Order creation failed");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Mock Test Portal",
      description: "Exam Access Fee",
      order_id: order.id,
      handler: function () {
        window.location.href = `/exam/${params.subject}/${params.exam}`;
      },
      theme: { color: "#2563eb" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!allowed) {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Checking login...</p>;
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4f6f9"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "350px"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Secure Payment</h2>
        <p style={{ marginBottom: "30px", color: "gray" }}>
          Pay ₹99 to unlock this exam
        </p>

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Pay ₹99 Now
        </button>
      </div>
    </div>
  );
}

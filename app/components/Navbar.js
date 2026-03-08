"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav
      style={{
        background: "#2563eb",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        color: "white"
      }}
    >
      <h2>MockTest Pro</h2>

      <div>
        <Link href="/subjects" style={{ marginRight: "20px", color: "white" }}>
          Subjects
        </Link>

        {!loggedIn && (
          <>
            <Link href="/login" style={{ marginRight: "20px", color: "white" }}>
              Login
            </Link>
            <Link href="/signup" style={{ color: "white" }}>
              Signup
            </Link>
          </>
        )}

        {loggedIn && (
          <button
            onClick={logout}
            style={{
              background: "white",
              color: "#2563eb",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

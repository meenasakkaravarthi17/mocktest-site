"use client";

import Link from "next/link";

export default function Subjects() {
  const subjects = ["Maths", "Science", "English", "Reasoning", "GK"];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f9",
      padding: "40px"
    }}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "32px"
      }}>
        Choose Your Subject
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "auto"
      }}>
        {subjects.map((subject, index) => (
          <Link key={index} href={`/subjects/${index + 1}`}>
            <div style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s"
            }}>
              <h2>{subject}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

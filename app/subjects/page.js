"use client";
import Link from "next/link";

export default function Subjects() {
  const subjects = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Science" },
    { id: 3, name: "English" },
    { id: 4, name: "Reasoning" },
    { id: 5, name: "General Knowledge" },
  ];

  return (
    <div style={{
      padding: "60px 40px",
      background: "#f4f6f9",
      minHeight: "80vh"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Select a Subject
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        maxWidth: "1000px",
        margin: "auto"
      }}>
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/subjects/${subject.id}`}>
            <div style={{
              background: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s"
            }}>
              <h2>{subject.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #2563eb, #1e3a8a)",
      color: "white",
      textAlign: "center",
      padding: "40px"
    }}>
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Crack Your Exams with Confidence
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Practice Real Mock Tests. Track Performance. Improve Faster.
        </p>
        <Link href="/subjects">
          <button style={{
            padding: "15px 30px",
            fontSize: "18px",
            background: "white",
            color: "#2563eb",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Start Now
          </button>
        </Link>
      </div>
    </div>
  );
}

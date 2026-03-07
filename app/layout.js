import Link from "next/link";

export const metadata = {
  title: "MockTest Pro",
  description: "Online Mock Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* Navbar */}
        <nav style={{
          background: "#2563eb",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white"
        }}>
          <h2 style={{ margin: 0 }}>MockTest Pro</h2>
          <div>
            <Link href="/" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/subjects" style={{ color: "white", textDecoration: "none" }}>
              Subjects
            </Link>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "50px"
        }}>
          © 2026 MockTest Pro | All Rights Reserved
        </footer>
            <button
  onClick={() => {
    localStorage.removeItem("token");
    alert("Logged out");
    window.location.href = "/login";
  }}
  style={{
    marginLeft: "20px",
    padding: "8px 12px",
    background: "white",
    color: "#2563eb",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  Logout
</button>

      </body>
    </html>
  );
}

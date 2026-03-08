import Link from "next/link";

export const metadata = {
  title: "MockTest Pro",
  description: "Online Mock Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <nav
          style={{
            background: "#2563eb",
            padding: "15px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <h2 style={{ margin: 0 }}>MockTest Pro</h2>
          <div>
            <Link
              href="/"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              href="/subjects"
              style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
            >
              Subjects
            </Link>
            <Link
              href="/login"
              style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
            >
              Login
            </Link>
            <Link
              href="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              Signup
            </Link>
          </div>
        </nav>

        {children}

        <footer
          style={{
            background: "#111827",
            color: "white",
            textAlign: "center",
            padding: "20px",
            marginTop: "50px",
          }}
        >
          © 2026 MockTest Pro | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}

import Navbar from "../components/Navbar";

export const metadata = {
  title: "MockTest Pro",
  description: "Online Mock Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        <Navbar />

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

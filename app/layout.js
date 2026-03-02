export const metadata = {
  title: "Mock Test Platform",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily:"Arial"}}>
        {children}
      </body>
    </html>
  );
}

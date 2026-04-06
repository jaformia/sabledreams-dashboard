import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SableDreams Dashboard",
  description: "Admin dashboard scaffold for SableDreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App DevelopDeck101",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const valor = Math.floor(Math.random() * 20)

  return (
    <html>
      <body>
        <nav className="bg-red-600">
          <ul>
            <li>{valor}</li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}

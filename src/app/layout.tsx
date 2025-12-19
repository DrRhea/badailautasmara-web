import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Badai Laut Asmara - JOGO Academy & Event Organizer",
  description: "Solusi Olahraga Terintegrasi: Pelatihan Profesional & Event Organizer Berkelas",
  icons: {
    icon: "/logos/logo-pt-badai-laut-asmara.png",
    apple: "/logos/logo-pt-badai-laut-asmara.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

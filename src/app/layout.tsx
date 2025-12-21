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
  title: "PT Badai Laut Asmara - JOGO FOOTBALL ACADEMY & Event Organizer | Football Training Jakarta",
  description: "JOGO FOOTBALL ACADEMY: Professional football training & sports coaching in Jakarta. JOGO PRIVATE TRAINING SERVICES: Personalized training sessions. PT Badai Laut Asmara: Premium sports event organizer. Football, Basketball, Badminton, Swimming, Cricket, Kick Boxing training. Professional coaches with Sports Science background.",
  keywords: [
    "JOGO FOOTBALL ACADEMY",
    "JOGO PRIVATE TRAINING SERVICES",
    "football training Jakarta",
    "sports coaching Indonesia",
    "PT Badai Laut Asmara",
    "event organizer olahraga",
    "football academy Jakarta",
    "basketball training",
    "badminton coaching",
    "swimming lessons",
    "sports event organizer",
    "pelatih sepak bola Jakarta",
    "akademi sepak bola",
    "event organizer olahraga Jakarta",
    "sports training center",
    "professional sports coaching"
  ],
  authors: [{ name: "PT Badai Laut Asmara" }],
  creator: "PT Badai Laut Asmara",
  publisher: "PT Badai Laut Asmara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.badailautasmara.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Badai Laut Asmara - JOGO FOOTBALL ACADEMY & Event Organizer",
    description: "JOGO FOOTBALL ACADEMY: Professional football training & sports coaching in Jakarta. JOGO PRIVATE TRAINING SERVICES: Personalized training sessions. Premium sports event organizer.",
    url: "https://www.badailautasmara.com",
    siteName: "PT Badai Laut Asmara",
    images: [
      {
        url: "/logos/logo-pt-badai-laut-asmara.png",
        width: 1200,
        height: 630,
        alt: "PT Badai Laut Asmara - JOGO FOOTBALL ACADEMY",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Badai Laut Asmara - JOGO FOOTBALL ACADEMY & Event Organizer",
    description: "Professional football training & sports coaching in Jakarta",
    images: ["/logos/logo-pt-badai-laut-asmara.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logos/logo-pt-badai-laut-asmara.png",
    apple: "/logos/logo-pt-badai-laut-asmara.png",
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

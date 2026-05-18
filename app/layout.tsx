import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andressa V. Conrado — Full Stack Developer",
  description:
    "Full Stack Developer specializing in enterprise-grade systems. Java, Spring Boot, React, Next.js, TypeScript. Engineering precision, applied to software.",
  keywords: [
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Enterprise Systems",
  ],
  authors: [{ name: "Andressa V. Conrado" }],
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Andressa V. Conrado — Full Stack Developer",
    description:
      "Engineering precision, applied to software. Enterprise-grade systems with Java, Spring Boot, React, Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${dmMono.variable} bg-bg`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

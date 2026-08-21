import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import cv from "@/data/cv.json";
import type { CV } from "@/types/cv";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const data = cv as CV;
const fullName = `${data.person.name.given} ${data.person.name.family}`;

export const metadata: Metadata = {
  title: fullName,
  description: `Résumé for ${fullName}, ${data.person.tagline}`,
  authors: [
    {
      name: fullName,
      url: data.person.website,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${inter.variable} bg-stone-50 font-serif text-stone-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

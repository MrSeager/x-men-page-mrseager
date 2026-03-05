import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//Fonts
import { Bangers } from "next/font/google";
import { Comic_Neue } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

const comic = Comic_Neue({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-comic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X-Men characters page",
  description: "X-Men characters page created using Next.JS, TypeScript and Tailwind",
  icons: { 
    icon: "/images/x-men-97-logo-png_seeklogo-524392.png", 
  },
  openGraph: {
    title: "X-Men characters page",
    description: "X-Men characters page created using Next.JS, TypeScript and Tailwind",
    images: [
      {
        url: "/images/x-men-logo-png_seeklogo-496642.png",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/images/x-men-logo-png_seeklogo-496642.png"],
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
        className={`${bangers.variable} ${comic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

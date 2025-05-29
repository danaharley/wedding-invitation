import { Allura, Geist, Geist_Mono, Mulish, Prata } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const allura = Allura({
  variable: "--font-allura",
  weight: "400",
  subsets: ["latin"],
});

export const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const prata = Prata({
  variable: "--font-prata",
  weight: "400",
  subsets: ["latin"],
});

export const signerica = localFont({
  src: "../public/assets/fonts/signerica.ttf",
  weight: "400",
  display: "swap",
});

export const belove = localFont({
  src: "../public/assets/fonts/belove.otf",
  weight: "400",
  display: "swap",
});

export const derivia = localFont({
  src: "../public/assets/fonts/derivia.otf",
  weight: "400",
  display: "swap",
});

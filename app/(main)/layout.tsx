import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "sonner";

import { Footer } from "@/components/footer";

import { AudioAutoplayProvider } from "@/context/audio-autoplay-context";

import { allura, geistMono, geistSans, mulish, prata } from "@/lib/fonts";

import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  authors: {
    name: siteConfig.profile.name,
    url: siteConfig.site.url,
  },
  creator: "Dana Harliansyah",
  icons: {
    shortcut: `${siteConfig.site.url}/favicon.ico`,
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${allura.variable} ${prata.variable} ${mulish.variable} bg-amber-950 antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <main className="relative flex-1">
            <Toaster richColors />
            <AudioAutoplayProvider>{children}</AudioAutoplayProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

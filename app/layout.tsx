import type { Metadata } from "next";
import { Fredoka, Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SiteHeader } from "@/app/components/site-header";
import mascot from "@/public/img/mascot.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Mulle Golf",
  description: "Score your rounds, follow friends live, run tournaments and get to know your game.",
};

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete account" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fredoka.variable} h-full`}>
      <Analytics />
      <SpeedInsights />
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />

        <main className="flex-1 bg-paper">{children}</main>

        <footer className="bg-paper border-t border-rule">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <Image src={mascot} alt="" width={28} height={28} />
              <span className="font-logo font-bold text-lg text-ink">Mulle Golf</span>
              <span className="text-sm text-ink-soft ml-2">© 2026</span>
            </div>
            <nav className="flex gap-6 sm:gap-8">
              {footerLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}

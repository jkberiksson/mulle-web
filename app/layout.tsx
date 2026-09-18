import type { Metadata } from "next";
import { Fredoka, Fraunces, Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Mulle Golf",
  description: "Track rounds, compete in tours, and play with friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${fredoka.variable} h-full`}
    >
      <Analytics />
      <SpeedInsights />
      <body className="min-h-full flex flex-col antialiased">
        <header
          className="sticky top-0 z-50 bg-paper"
          style={{ borderBottom: "2px solid var(--ink)" }}
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-logo font-bold text-ink text-xl -rotate-2 inline-block"
            >
              Mulle Golf
            </Link>
            <a
              href="https://apps.apple.com/se/app/pinseeker-b6b384/id6761655301"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink border-b border-dashed border-ink pb-0.5 transition-colors hover:text-fairway hover:border-fairway"
            >
              Get the app ↗
            </a>
          </div>
        </header>

        <main className="flex-1 bg-paper">{children}</main>

        <footer
          className="px-6 py-10 bg-paper"
          style={{ borderTop: "2px solid var(--ink)" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Mulle Golf · Est. 2026 · Scored by hand, kept forever
            </span>
            <div className="flex gap-6 sm:gap-8">
              <Link
                href="/privacy"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-fairway"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-fairway"
              >
                Terms
              </Link>
              <Link
                href="/delete-account"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-fairway"
              >
                Delete account
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

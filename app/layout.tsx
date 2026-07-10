import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mulle · Golf Scoring",
  description:
    "Track rounds, compete in tours, and play side games with friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <header className="sticky top-0 z-50" style={{ background: "#1b1a1b" }}>
          <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
            <Link
              href="/"
              className="font-display font-bold text-white uppercase tracking-tight text-lg"
            >
              Mulle
            </Link>
            <a
              href="https://apps.apple.com/se/app/pinseeker-b6b384/id6761655301"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-100"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              App Store ↗
            </a>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer
          className="px-6 py-10"
          style={{
            background: "#1b1a1b",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span
              className="font-display text-xs uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              © 2026 Mulle
            </span>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="font-display text-xs uppercase tracking-[0.22em] transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-display text-xs uppercase tracking-[0.22em] transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Terms
              </Link>
              <Link
                href="/delete-account"
                className="font-display text-xs uppercase tracking-[0.22em] transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Delete Account
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { APP_STORE_URL } from "@/lib/links";
import mascot from "@/public/img/mascot.png";

/**
 * Over the home page's photo hero the header starts out transparent with white
 * type and turns solid once you scroll; on every other page it's solid.
 */
export function SiteHeader() {
  const isHome = usePathname() === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overPhoto = isHome && !scrolled;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overPhoto ? "bg-transparent" : "bg-paper/85 backdrop-blur-xl shadow-[0_1px_0_var(--rule)]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Mulle Golf home">
          <Image src={mascot} alt="" width={36} height={36} />
          <span className={`font-logo font-bold text-[22px] tracking-tight transition-colors ${overPhoto ? "text-white" : "text-ink"}`}>
            Mulle Golf
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {isHome && (
            <a
              href="#features"
              className={`hidden sm:inline-flex px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                overPhoto ? "text-white/80 hover:text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              Features
            </a>
          )}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              overPhoto ? "bg-white text-ink hover:bg-white/90" : "bg-fairway text-white hover:bg-fairway-dark"
            }`}
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}

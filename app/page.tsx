"use client";

import { motion } from "framer-motion";

const APP_URL =
  "https://apps.apple.com/se/app/pinseeker-b6b384/id6761655301";

function FlagIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
      <line x1="7" y1="3" x2="7" y2="25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 4.5L22 10.5L7 16.5V4.5Z" fill="currentColor" />
    </svg>
  );
}

function FriendsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 24c0-4.4 3.6-7.5 7-7.5s7 3.1 7 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="19.5" cy="10.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16.8 16.6c1-.6 2-.9 2.7-.9 2.8 0 5.5 2.4 5.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="1.6" fill="currentColor" />
    </svg>
  );
}

const scorecard = [
  { hole: 1, par: 4, score: 4 },
  { hole: 2, par: 4, score: 3 },
  { hole: 3, par: 3, score: 4 },
  { hole: 4, par: 5, score: 4 },
  { hole: 5, par: 4, score: 5 },
  { hole: 6, par: 4, score: 3 },
  { hole: 7, par: 3, score: 2 },
  { hole: 8, par: 5, score: 5 },
  { hole: 9, par: 4, score: 4 },
];

const tickerItems = [
  "Stroke play",
  "Stableford",
  "Live leaderboards",
  "Playing handicap",
  "Friends on course",
];

const notes = [
  {
    Icon: FlagIcon,
    title: "Rounds",
    rotate: "-rotate-2",
    accent: "var(--fairway)",
    description:
      "Enter strokes hole by hole. Stroke play and Stableford tally side by side — net scores adjust automatically if you play with handicap.",
  },
  {
    Icon: FriendsIcon,
    title: "Friends",
    rotate: "rotate-1",
    accent: "var(--tee)",
    description:
      "Watch friends' rounds live and follow their scores as they happen. Pull them straight into your next round.",
  },
  {
    Icon: TargetIcon,
    title: "Handicap",
    rotate: "-rotate-1",
    accent: "var(--fairway)",
    description:
      "Play with your real handicap. Every card adjusts for slope and rating on your tee, so gross and net scores are both right there, hole by hole.",
  },
];

const steps = [
  {
    number: "1",
    dot: "var(--pencil)",
    title: "Create a round",
    description: "Pick a course and tee, add up to 4 players. Guests can join without an account.",
  },
  {
    number: "2",
    dot: "var(--tee)",
    title: "Score hole by hole",
    description: "Enter strokes as you play — Stableford points and totals update live.",
  },
  {
    number: "3",
    dot: "var(--fairway)",
    title: "Finish & compete",
    description: "Lock the card. It counts toward your handicap history.",
  },
];

function scoreMark(par: number, score: number) {
  const diff = score - par;
  if (diff <= -1) return "circle";
  if (diff >= 1) return "square";
  return "plain";
}

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden ledger-bg">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] mb-8"
            style={{ color: "var(--pencil)" }}
          >
            ⛳ Golf Scoring, Kept Properly
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-logo font-bold leading-[0.85] tracking-tight -ml-1 flex items-baseline flex-wrap gap-x-4"
            style={{ fontSize: "clamp(3.4rem, 13vw, 9rem)", color: "var(--ink)" }}
          >
            Mulle
            <span style={{ fontSize: "0.34em", color: "var(--fairway)" }}>
              Golf
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display italic max-w-xl mt-6 mb-14"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
              fontOpticalSizing: "auto",
            }}
          >
            Every round is a story worth keeping score of.
          </motion.p>

          {/* Mini scorecard strip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="inline-block bg-paper-light p-4 sm:p-6 shadow-[6px_6px_0_var(--ink)]"
            style={{ border: "2px solid var(--ink)", transform: "rotate(-1deg)" }}
          >
            <div className="grid grid-cols-[auto_repeat(9,1.9rem)] sm:grid-cols-[auto_repeat(9,2.4rem)] gap-y-1 font-mono text-[11px] sm:text-xs">
              <span className="pr-4 text-ink-soft self-center">HOLE</span>
              {scorecard.map((h) => (
                <span key={h.hole} className="text-center text-ink-soft">
                  {h.hole}
                </span>
              ))}

              <span className="pr-4 text-ink-soft self-center">PAR</span>
              {scorecard.map((h) => (
                <span key={h.hole} className="text-center text-ink-soft">
                  {h.par}
                </span>
              ))}

              <span className="pr-4 self-center font-semibold" style={{ color: "var(--ink)" }}>
                YOU
              </span>
              {scorecard.map((h) => {
                const mark = scoreMark(h.par, h.score);
                return (
                  <span key={h.hole} className="flex items-center justify-center py-0.5">
                    <span
                      title={mark === "circle" ? "Birdie or better" : mark === "square" ? "Bogey or worse" : "Par"}
                      className="relative inline-flex items-center justify-center w-6 h-6 font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {mark === "circle" && (
                        <span
                          className="absolute inset-0 rounded-full"
                          style={{ border: "1.5px solid var(--fairway)" }}
                        />
                      )}
                      {mark === "square" && (
                        <span
                          className="absolute inset-0.5"
                          style={{ border: "1.5px solid var(--pencil)" }}
                        />
                      )}
                      {h.score}
                    </span>
                  </span>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14"
          >
            <motion.a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="inline-block font-mono font-semibold text-sm uppercase tracking-[0.15em] px-8 py-4"
              style={{
                background: "var(--fairway)",
                color: "var(--paper-light)",
                border: "2px solid var(--ink)",
                transform: "rotate(-1.5deg)",
                boxShadow: "4px 4px 0 var(--ink)",
              }}
            >
              Download for iOS →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Ticker ─────────────────────────────────────────── */}
      <div
        className="overflow-hidden py-4"
        style={{ background: "var(--ink)", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}
      >
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-display italic whitespace-nowrap px-6 text-lg sm:text-xl"
              style={{ color: "var(--paper)" }}
            >
              {item} <span style={{ color: "var(--tee)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Features as pinned notes ───────────────────────── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <p
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] mb-14"
            style={{ color: "var(--ink-soft)" }}
          >
            What&apos;s in the bag
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {notes.map(({ Icon, title, description, rotate, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className={`${rotate} bg-paper-light p-8`}
                style={{ border: "2px solid var(--ink)", boxShadow: "5px 5px 0 var(--ink)" }}
              >
                <div className="mb-5" style={{ color: accent }}>
                  <Icon />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-[1.75]" style={{ color: "var(--ink-soft)" }}>
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works — the routing ─────────────────────── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8" style={{ borderTop: "2px solid var(--ink)" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] mb-16"
            style={{ color: "var(--ink-soft)" }}
          >
            The routing
          </p>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-6 relative">
            <div
              aria-hidden
              className="hidden sm:block absolute top-[10px] left-0 right-0 h-0"
              style={{ borderTop: "2px dashed var(--rule)" }}
            />
            {steps.map(({ number, dot, title, description }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex-1"
              >
                <span
                  aria-hidden
                  className="relative z-10 inline-flex items-center justify-center w-5 h-5 rounded-full mb-6"
                  style={{ background: dot, border: "2px solid var(--ink)" }}
                />
                <h3 className="font-display font-semibold text-2xl mb-3" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--ink-soft)" }}>
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ───────────────────────────────────── */}
      <section
        className="py-28 sm:py-36 px-6 text-center"
        style={{ background: "var(--fairway)", borderTop: "2px solid var(--ink)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display italic leading-[0.95] mb-12"
            style={{ color: "var(--paper-light)", fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
          >
            Ready for the
            <br />
            back nine?
          </h2>
          <motion.a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: 0, scale: 1.04 }}
            className="inline-block font-mono font-semibold text-sm uppercase tracking-[0.15em] px-8 py-4"
            style={{
              background: "var(--paper-light)",
              color: "var(--fairway-dark)",
              border: "2px solid var(--ink)",
              transform: "rotate(1deg)",
              boxShadow: "4px 4px 0 var(--ink)",
            }}
          >
            Download on the App Store →
          </motion.a>
        </div>
      </section>
    </>
  );
}

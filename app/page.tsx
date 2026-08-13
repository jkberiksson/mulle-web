function FlagIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <line
        x1="7"
        y1="3"
        x2="7"
        y2="25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M7 4.5L22 10.5L7 16.5V4.5Z" fill="currentColor" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M9 5h10l-1.5 9c0 2.2-1.8 4-3.5 4S10.5 16.2 10.5 14L9 5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 5H7v2.5c0 1.8 1.5 3.2 3 3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M23.5 5H21v2.5c0 1.8-1.5 3.2-3 3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="14"
        y1="18"
        x2="14"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="22"
        x2="18"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FriendsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 24c0-4.4 3.6-7.5 7-7.5s7 3.1 7 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="19.5" cy="10.5" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16.8 16.6c1-.6 2-.9 2.7-.9 2.8 0 5.5 2.4 5.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <polyline
        points="3,22 8,15 14,17 22,8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="17,8 22,8 22,13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="25"
        x2="25"
        y2="25"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

const features = [
  {
    Icon: FlagIcon,
    title: "Rounds",
    description:
      "Enter strokes hole by hole and see your Stroke Play and Stableford scores side by side. Play with or without handicap — net scores and Stableford points adjust automatically.",
  },
  {
    Icon: TrophyIcon,
    title: "Tours",
    description:
      "Group rounds into a season-long tournament. Players earn points by placement, with live leaderboards and optional drop-worst-rounds scoring.",
  },
  {
    Icon: FriendsIcon,
    title: "Friends",
    description:
      "See when your friends are playing live and follow their scores as they happen. Add them straight into your next round or tour.",
  },
  {
    Icon: ChartIcon,
    title: "Handicap",
    description:
      "Full playing handicap per course and tee, slope and rating adjusted. Track your progression with a handicap history chart on your profile.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create a round",
    description:
      "Pick a course and tee, then add your playing partners — up to 4 per round. Guests can join without creating an account.",
  },
  {
    number: "02",
    title: "Score hole by hole",
    description:
      "Enter strokes as you play. See live Stableford points and stroke play totals update in real time, hole by hole.",
  },
  {
    number: "03",
    title: "Finish & compete",
    description:
      "Lock the scorecard when done. Your result counts toward Tour standings and your handicap history is updated.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="relative min-h-dvh flex flex-col"
        style={{ background: "#1b1a1b" }}
      >
        {/* Golf course background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/golf-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.4 }}
        />

        {/* Dark overlay for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(27,26,27,0.55) 0%, rgba(27,26,27,0.3) 45%, rgba(27,26,27,0.8) 100%)",
          }}
        />

        {/* Green atmospheric glow rising from the bottom */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "70%",
            background:
              "radial-gradient(ellipse 90% 100% at 50% 100%, rgba(26,107,60,0.44) 0%, rgba(26,107,60,0.13) 45%, transparent 70%)",
          }}
        />

        {/* Subtle grain texture */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.05 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Hero content */}
        <div className="relative flex flex-col items-center justify-center flex-1 text-center px-6 pb-24">
          <p
            className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-12"
            style={{ color: "rgba(26,107,60,0.95)" }}
          >
            Golf Scoring
          </p>

          <h1
            className="font-display font-bold text-white leading-none tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(5.5rem, 20vw, 15rem)" }}
          >
            Mulle
          </h1>

          <p
            className="font-display font-semibold tracking-tight leading-tight max-w-xl mb-5"
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(1.3rem, 3vw, 2.5rem)",
            }}
          >
            Track Every Swing.
            <br />
            Master In Game.
          </p>

          <p
            className="text-base leading-relaxed max-w-[22rem] mb-14"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Golf scoring, tours, and friends — built for players who care about every stroke.
          </p>

          <a
            href="https://apps.apple.com/se/app/pinseeker-b6b384/id6761655301"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-semibold text-sm uppercase tracking-[0.15em] text-white px-8 py-4 transition-opacity hover:opacity-85"
            style={{ background: "#1a6b3c" }}
          >
            Download on the App Store →
          </a>
        </div>

        {/* Scroll indicator */}
        <p
          aria-hidden
          className="relative text-center pb-12 font-display text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          Scroll
        </p>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#f5f4f0" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="font-display font-semibold text-xs uppercase tracking-[0.28em] mb-16"
            style={{ color: "#1a6b3c" }}
          >
            Features
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: "#d4cfc3" }}
          >
            {features.map(({ Icon, title, description }) => (
              <div key={title} className="p-10" style={{ background: "#faf9f6" }}>
                <div className="mb-6" style={{ color: "#1a6b3c" }}>
                  <Icon />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: "#16150e" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-[1.8]"
                  style={{ color: "#4f5d72" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="font-display font-semibold text-xs uppercase tracking-[0.28em] mb-16"
            style={{ color: "#1a6b3c" }}
          >
            How it works
          </p>

          <div style={{ borderTop: "1px solid #d4cfc3" }}>
            {steps.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex gap-8 md:gap-16 items-start py-14"
                style={{ borderBottom: "1px solid #d4cfc3" }}
              >
                <span
                  aria-hidden
                  className="font-display font-bold leading-[0.85] flex-shrink-0 select-none"
                  style={{
                    fontSize: "clamp(4.5rem, 9vw, 8rem)",
                    color: "#1a6b3c",
                    opacity: 0.13,
                  }}
                >
                  {number}
                </span>
                <div className="pt-2 md:pt-5">
                  <h3
                    className="font-display font-bold mb-4"
                    style={{
                      color: "#16150e",
                      fontSize: "clamp(1.35rem, 2.5vw, 2rem)",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-lg"
                    style={{ color: "#4f5d72" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ───────────────────────────────────── */}
      <section
        className="py-32 px-6 text-center"
        style={{ background: "#1a6b3c" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-bold text-white tracking-[-0.04em] leading-[0.9] mb-14"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            Ready
            <br />
            to play?
          </h2>
          <a
            href="https://apps.apple.com/se/app/pinseeker-b6b384/id6761655301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-display font-semibold text-sm uppercase tracking-[0.15em] px-8 py-4 transition-opacity hover:opacity-85"
            style={{ background: "#ffffff", color: "#1a6b3c" }}
          >
            Download on the App Store →
          </a>
        </div>
      </section>

    </>
  );
}

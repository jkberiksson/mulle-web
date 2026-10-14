import Image, { type StaticImageData } from "next/image";

import { Phone } from "@/app/components/phone";
import { Reveal } from "@/app/components/reveal";
import { StoreButtons } from "@/app/components/store-buttons";
import aerial from "@/public/img/aerial.jpg";
import fairway from "@/public/img/fairway.jpg";
import mascot from "@/public/img/mascot.png";
import screenBoard from "@/public/img/screen-board.jpg";
import screenHole from "@/public/img/screen-hole.jpg";
import screenHome from "@/public/img/screen-home.jpg";
import screenStats from "@/public/img/screen-stats.jpg";

type Feature = {
  kicker: string;
  title: string;
  body: string;
  points: string[];
  screen: StaticImageData;
  alt: string;
};

const features: Feature[] = [
  {
    kicker: "Rounds",
    title: "Score hole by hole.",
    body: "Keep the card for the whole group from one phone. Strokes and Stableford sit side by side, and your playing handicap comes straight from the slope and rating of your tee.",
    points: ["One to four players", "Stroke play and Stableford together", "Closest to the pin and longest drive"],
    screen: screenHole,
    alt: "Scoring a hole for four players in Mulle",
  },
  {
    kicker: "Tournaments",
    title: "Compete with your crew.",
    body: "Run the club championship, the trip or the season-long rivalry. Up to 60 players over as many as 12 rounds, alone or in teams, with a leaderboard that updates while you play.",
    points: ["Stroke play, Stableford, best ball and scramble", "Rank by total or by placement points", "Drop the worst rounds"],
    screen: screenBoard,
    alt: "A live tournament leaderboard in Mulle",
  },
  {
    kicker: "Friends",
    title: "Follow every round live.",
    body: "See which friends are out on the course and how they're doing, hole by hole. Every round and tournament has its own chat for the banter and the photos.",
    points: ["Friends playing right now", "Chat and photos in every round", "Your bag, rounds and tournaments in one place"],
    screen: screenHome,
    alt: "The Mulle home screen with rounds in progress and friends playing",
  },
  {
    kicker: "Stats",
    title: "Get to know your game.",
    body: "Mulle shows where the shots go: par 3s, 4s and 5s, hard holes against easy ones, front nine against back. Add tee shots and putts when you want to go deeper.",
    points: ["Strokes to par by hole type", "Bounce-back and penalties", "Tee shots, greens and putts"],
    screen: screenStats,
    alt: "Golf statistics in Mulle",
  },
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden className="shrink-0 mt-[3px]">
      <circle cx="10" cy="10" r="10" fill="var(--fairway)" opacity="0.12" />
      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="var(--fairway)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-fairway-dark text-white">
        <Image src={aerial} alt="" fill preload sizes="100vw" className="object-cover -z-20 opacity-90" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,22,14,0.92)_0%,rgba(6,22,14,0.7)_45%,rgba(6,22,14,0.25)_100%)]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-b from-transparent to-[rgba(6,22,14,0.6)]" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-0 lg:pb-0 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-8 items-end">
          <div className="pb-4 lg:pb-32 hero-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-md px-3.5 py-1.5 text-[13px] font-medium text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              The golf app for you and your friends
            </span>
            <h1 className="mt-7 font-display font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(3rem,7.4vw,5.6rem)]">
              Every round,
              <br />
              <span className="text-lime">together.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg sm:text-xl leading-relaxed text-white/75">
              Score hole by hole, follow your friends live and run tournaments with your crew. Then see where the
              shots really go.
            </p>
            <div className="mt-10">
              <StoreButtons tone="light" />
            </div>
          </div>

          <div className="relative h-[460px] sm:h-[560px] lg:h-[640px] hero-rise [animation-delay:150ms]">
            <Phone
              screen={screenHome}
              alt="The Mulle home screen"
              preload
              className="absolute left-1/2 lg:left-[8%] -translate-x-[78%] lg:translate-x-0 top-0 w-[230px] sm:w-[280px] lg:w-[300px] z-10"
            />
            <Phone
              screen={screenBoard}
              alt="A live leaderboard in Mulle"
              className="absolute left-1/2 lg:left-auto lg:right-0 -translate-x-[8%] lg:translate-x-0 top-16 w-[210px] sm:w-[255px] lg:w-[275px] opacity-95"
            />
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 pt-28 sm:pt-36 pb-10">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,4.6vw,3.4rem)] text-ink">
            Everything the round needs.
            <span className="text-ink-soft"> Nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-xl mx-auto">
            Mulle keeps the card, the leaderboard and the banter in one calm, fast app, so you can keep your eyes on
            the game.
          </p>
        </Reveal>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="px-5 sm:px-8 pb-12 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
          {features.map((feature, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={feature.kicker}>
                <article className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16 rounded-[2rem] bg-paper-light ring-1 ring-rule/70 p-6 sm:p-10 lg:p-14 overflow-hidden">
                  <div className={flip ? "lg:order-2" : ""}>
                    <p className="text-sm font-semibold text-fairway">{feature.kicker}</p>
                    <h3 className="mt-3 font-display font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-[17px] leading-relaxed text-ink-soft max-w-md">{feature.body}</p>
                    <ul className="mt-8 flex flex-col gap-3.5">
                      {feature.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] text-ink">
                          <Check />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative flex justify-center rounded-[1.5rem] overflow-hidden pt-10 sm:pt-14 -mb-6 sm:-mb-10 lg:-mb-14 bg-[radial-gradient(120%_90%_at_50%_0%,#2a7a4f_0%,#164a2f_55%,#0b2116_100%)] ${
                      flip ? "lg:order-1" : ""
                    }`}
                  >
                    <div aria-hidden className="absolute inset-0 opacity-[0.07] bg-[repeating-radial-gradient(circle_at_50%_120%,#fff_0,#fff_1px,transparent_1px,transparent_28px)]" />
                    <Phone screen={feature.screen} alt={feature.alt} className="relative w-[240px] sm:w-[280px] translate-y-6" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Photo band ─────────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-12">
        <Reveal className="max-w-6xl mx-auto">
          <div className="relative isolate overflow-hidden rounded-[2rem] min-h-[460px] sm:min-h-[560px] flex items-end">
            <Image src={fairway} alt="" fill sizes="(max-width: 1200px) 100vw, 1150px" className="object-cover object-[50%_62%] -z-20" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(6,22,14,0.85)] via-[rgba(6,22,14,0.25)] to-transparent" />
            <div className="p-8 sm:p-14 max-w-2xl">
              <p className="font-display font-semibold tracking-[-0.03em] leading-[1.05] text-white text-[clamp(1.9rem,4vw,3.2rem)]">
                From the first tee to the last putt, and the stories after.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Download CTA ───────────────────────────────────── */}
      <section className="px-5 sm:px-8 pt-12 pb-28 sm:pb-36">
        <Reveal className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Image src={mascot} alt="Mulle, the golf ball in a green cap" width={120} height={120} />
          <h2 className="mt-8 font-display font-semibold tracking-[-0.035em] leading-[1.02] text-ink text-[clamp(2.2rem,5.4vw,4rem)]">
            See you on the first tee.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">Free to download. Bring your friends.</p>
          <div className="mt-10 flex justify-center">
            <StoreButtons tone="dark" />
          </div>
        </Reveal>
      </section>
    </>
  );
}

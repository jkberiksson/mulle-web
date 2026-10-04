import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy · Mulle Golf" };

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1
          className="font-display font-bold text-2xl tracking-tight mb-1"
          style={{ color: "var(--ink)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--ink-soft)" }}>
          Last updated: October 2026
        </p>

        <div className="flex flex-col gap-10" style={{ color: "var(--ink)" }}>
          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              1. Data Controller
            </h2>
            <p className="text-sm leading-relaxed">
              Jakob Eriksson, Sweden. Contact:{" "}
              <a
                href="mailto:jkberiksson@gmail.com"
                className="underline underline-offset-2 transition-opacity hover:opacity-60"
              >
                jkberiksson@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              2. What We Collect
            </h2>
            <p className="text-sm leading-relaxed">
              When you create an account and use Mulle we collect: name, email
              address, handicap, home club, gender, unit preference, profile
              photos, golf round data (scores, course, date, tee), tournament
              memberships and results, and friend connections. The app also
              sends performance and crash diagnostics.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              If you sign in with Apple or Google, we receive your name, your
              email address (with Apple&apos;s &ldquo;Hide My Email&rdquo;, a
              private relay address instead) and an account identifier from
              them, and use them only to create and recognise your account.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              3. Why We Collect It
            </h2>
            <p className="text-sm leading-relaxed">
              To provide and operate the service — scoring, leaderboards,
              tournaments, and social features. Legal basis: performance of
              contract.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              4. Retention
            </h2>
            <p className="text-sm leading-relaxed">
              Data is kept until you delete your account. Deletion is permanent
              and removes all your data from our systems.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              5. Third Parties
            </h2>
            <p className="text-sm leading-relaxed">
              We use Supabase (EU) for infrastructure, Expo for push
              notifications and app performance and crash monitoring, and Google
              Firebase Cloud Messaging to deliver notifications on Android. If
              you choose to sign in with Apple or Google, they learn that you
              signed in to Mulle — but we share none of your Mulle data (rounds,
              scores, friends) with them; Google&apos;s sign-in library may send
              Google technical data about the sign-in itself. You can remove
              Mulle&apos;s access in your Apple ID or Google account settings at
              any time. We do not sell your data.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              6. Your Rights
            </h2>
            <p className="text-sm leading-relaxed">
              Under GDPR you have the right to access, correct, delete, or
              export your data, and to lodge a complaint with your national data
              protection authority. In Sweden: IMY (
              <a
                href="https://www.imy.se"
                className="underline underline-offset-2 transition-opacity hover:opacity-60"
              >
                imy.se
              </a>
              ).
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              7. Contact
            </h2>
            <p className="text-sm leading-relaxed">
              <a
                href="mailto:jkberiksson@gmail.com"
                className="underline underline-offset-2 transition-opacity hover:opacity-60"
              >
                jkberiksson@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

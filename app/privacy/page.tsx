import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy · Mulle" };

export default function PrivacyPage() {
  return (
    <div style={{ background: "#f5f4f0" }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1
          className="font-display font-bold text-2xl tracking-tight mb-1"
          style={{ color: "#16150e" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-12" style={{ color: "#4f5d72" }}>
          Last updated: August 2026
        </p>

        <div className="flex flex-col gap-10" style={{ color: "#16150e" }}>
          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
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
              style={{ color: "#4f5d72" }}
            >
              2. What We Collect
            </h2>
            <p className="text-sm leading-relaxed">
              When you create an account and use Mulle we collect: name, email
              address, handicap, home club, gender, unit preference, profile
              photos, golf round data (scores, course, date, tee), tour
              memberships, and friend connections.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
            >
              3. Why We Collect It
            </h2>
            <p className="text-sm leading-relaxed">
              To provide and operate the service — scoring, leaderboards, tours,
              and social features. Legal basis: performance of contract.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
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
              style={{ color: "#4f5d72" }}
            >
              5. Third Parties
            </h2>
            <p className="text-sm leading-relaxed">
              We use Supabase (EU) for infrastructure and Expo for push
              notifications. We do not sell your data.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
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
              style={{ color: "#4f5d72" }}
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

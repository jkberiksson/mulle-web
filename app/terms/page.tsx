import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use · Mulle Golf" };

export default function TermsPage() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1
          className="font-display font-semibold text-4xl sm:text-5xl tracking-[-0.03em] mb-3"
          style={{ color: "var(--ink)" }}
        >
          Terms of Use
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--ink-soft)" }}>
          Last updated: October 2026
        </p>

        <div className="flex flex-col gap-10" style={{ color: "var(--ink)" }}>
          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              1. About
            </h2>
            <p className="text-sm leading-relaxed">
              Mulle is a golf scoring app developed by Jakob Eriksson, Sweden.
              By downloading and using the app you agree to these terms.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              2. Your Account
            </h2>
            <p className="text-sm leading-relaxed">
              You are responsible for keeping your account secure. You can
              delete your account at any time from the app settings, which
              permanently removes all your data.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              3. Acceptable Use
            </h2>
            <p className="text-sm leading-relaxed">
              Don&apos;t submit false scores, impersonate others, or attempt to
              disrupt the service.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              We have zero tolerance for objectionable content and abusive
              users. Don&apos;t post comments or photos that are offensive,
              hateful, sexual, violent, harassing or otherwise inappropriate,
              and don&apos;t harass other players. You can report a user,
              comment or photo and block a user from within the app. We review
              reports promptly, remove content that breaks these terms and may
              suspend or delete the accounts behind it.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              4. Content
            </h2>
            <p className="text-sm leading-relaxed">
              Photos and comments you post remain yours. You grant us a licence
              to store and display them solely to operate the service. Content
              in a round&apos;s chat is visible to its players and their
              friends in the app; content in a tournament&apos;s chat is visible
              to its members. You can delete your own content at any time, a
              round&apos;s creator can remove content from their round&apos;s
              chat, and a tournament&apos;s organiser from its chat.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              5. Availability
            </h2>
            <p className="text-sm leading-relaxed">
              We do our best to keep Mulle running but cannot guarantee
              uninterrupted access. We may suspend or discontinue the service at
              any time.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              6. Governing Law
            </h2>
            <p className="text-sm leading-relaxed">
              These terms are governed by Swedish law.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-lg tracking-tight mb-2"
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

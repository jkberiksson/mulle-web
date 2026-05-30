import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use · Mulle" };

export default function TermsPage() {
  return (
    <div style={{ background: "#f5f4f0" }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1
          className="font-display font-bold text-2xl tracking-tight mb-1"
          style={{ color: "#16150e" }}
        >
          Terms of Use
        </h1>
        <p className="text-sm mb-12" style={{ color: "#4f5d72" }}>
          Last updated: May 2026
        </p>

        <div className="flex flex-col gap-10" style={{ color: "#16150e" }}>
          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
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
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
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
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
            >
              3. Acceptable Use
            </h2>
            <p className="text-sm leading-relaxed">
              Don&apos;t submit false scores, impersonate others, or attempt to
              disrupt the service.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
            >
              4. Content
            </h2>
            <p className="text-sm leading-relaxed">
              Photos you upload remain yours. You grant us a licence to store
              and display them solely to operate the service.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
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
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "#4f5d72" }}
            >
              6. Governing Law
            </h2>
            <p className="text-sm leading-relaxed">
              These terms are governed by Swedish law.
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

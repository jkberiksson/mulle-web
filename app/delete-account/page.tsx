import type { Metadata } from "next";

export const metadata: Metadata = { title: "Delete Account · Mulle Golf" };

export default function DeleteAccountPage() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1
          className="font-display font-bold text-2xl tracking-tight mb-1"
          style={{ color: "var(--ink)" }}
        >
          Delete Your Account
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--ink-soft)" }}>
          Mulle · Account and data deletion
        </p>

        <div className="flex flex-col gap-10" style={{ color: "var(--ink)" }}>
          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              Delete from the app
            </h2>
            <p className="text-sm leading-relaxed">
              The fastest way to delete your Mulle account is from within the
              app:
            </p>
            <ol className="text-sm leading-relaxed list-decimal pl-5 mt-3 flex flex-col gap-1">
              <li>Open Mulle and sign in</li>
              <li>Go to Settings</li>
              <li>Tap Delete Account</li>
              <li>Confirm with your email and the confirmation phrase</li>
            </ol>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              Request by email
            </h2>
            <p className="text-sm leading-relaxed">
              If you no longer have the app installed or cannot sign in, email us
              from the address linked to your account and we will delete it for
              you:{" "}
              <a
                href="mailto:jkberiksson@gmail.com?subject=Delete%20my%20Mulle%20account"
                className="underline underline-offset-2 transition-opacity hover:opacity-60"
              >
                jkberiksson@gmail.com
              </a>
              . We process these requests within 30 days.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              What gets deleted
            </h2>
            <p className="text-sm leading-relaxed">
              Deleting your account permanently removes all your personal data
              from our systems: your name, email address, handicap, home club,
              gender, unit preference, profile photos, golf round data (scores,
              course, date, tee), and friend connections. Deletion is permanent
              and cannot be undone.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              Retention
            </h2>
            <p className="text-sm leading-relaxed">
              We do not retain your data after deletion, except where we are
              legally required to keep certain records. Any such data is stored
              only for the period required by law and is not used for any other
              purpose.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-semibold text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--ink-soft)" }}
            >
              Contact
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

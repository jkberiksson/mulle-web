import type { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";

export const metadata: Metadata = { title: "Reset Password · Mulle Golf" };

export default function ResetPasswordPage() {
  return (
    <div
      className="flex flex-1 items-center justify-center px-8 py-24"
      style={{ background: "var(--paper)" }}
    >
      <div className="w-full max-w-md rounded-[1.75rem] bg-paper-light ring-1 ring-rule p-8 sm:p-10 shadow-[0_20px_60px_-30px_rgba(15,26,20,0.25)]">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

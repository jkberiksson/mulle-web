import type { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";

export const metadata: Metadata = { title: "Reset Password · Mulle" };

export default function ResetPasswordPage() {
  return (
    <div
      className="flex flex-1 items-center justify-center px-8 py-24"
      style={{ background: "#f5f4f0" }}
    >
      <div className="w-full max-w-sm">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

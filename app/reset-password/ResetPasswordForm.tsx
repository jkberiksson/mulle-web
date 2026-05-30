"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

type Step = "loading" | "form" | "success" | "error";

export default function ResetPasswordForm() {
  const [step, setStep] = useState<Step>("loading");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const supabase = getSupabase();

    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setStep("form");
    });

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setStep("form");
      else {
        setTimeout(() => setStep((s) => (s === "loading" ? "error" : s)), 1500);
      }
    });

    return () => listener.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setErrorMsg("Password must contain uppercase, lowercase, and a number.");
      return;
    }
    if (password !== confirm) {
      setErrorMsg("Passwords don't match.");
      return;
    }

    const supabase = getSupabase();
    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setSubmitting(false);

    if (error) {
      const isSessionError =
        error.message.toLowerCase().includes("session") ||
        error.message.toLowerCase().includes("expired") ||
        error.message.toLowerCase().includes("invalid");
      if (isSessionError) {
        setStep("error");
      } else {
        setErrorMsg(error.message);
      }
    } else {
      await supabase.auth.signOut();
      setStep("success");
    }
  }

  if (step === "loading") {
    return (
      <p className="text-sm" style={{ color: "#4f5d72" }}>
        Verifying your link…
      </p>
    );
  }

  if (step === "error") {
    return (
      <div>
        <p
          className="font-display font-bold text-xl mb-2"
          style={{ color: "#16150e" }}
        >
          Invalid or expired link
        </p>
        <p className="text-sm" style={{ color: "#4f5d72" }}>
          Please request a new password reset from the Mulle app.
        </p>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div>
        <p
          className="font-display font-bold text-xl mb-2"
          style={{ color: "#16150e" }}
        >
          Password updated
        </p>
        <p className="text-sm" style={{ color: "#4f5d72" }}>
          You can now sign in to Mulle with your new password.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="mb-4">
        <h1
          className="font-display font-bold text-2xl tracking-tight mb-2"
          style={{ color: "#16150e" }}
        >
          Set new password
        </h1>
        <p className="text-sm" style={{ color: "#4f5d72" }}>
          Choose a new password for your Mulle account.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "#16150e" }}>
          New password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Min. 8 chars, uppercase, lowercase, number"
          className="px-4 py-2.5 text-sm outline-none transition-colors"
          style={{
            border: "1px solid #d4cfc3",
            background: "#faf9f6",
            color: "#16150e",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#1a6b3c")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#d4cfc3")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "#16150e" }}>
          Confirm password
        </label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          placeholder="Repeat password"
          className="px-4 py-2.5 text-sm outline-none transition-colors"
          style={{
            border: "1px solid #d4cfc3",
            background: "#faf9f6",
            color: "#16150e",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#1a6b3c")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#d4cfc3")}
        />
      </div>

      {errorMsg && (
        <p className="text-sm" style={{ color: "#dc2626" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 font-display font-semibold text-sm uppercase tracking-[0.15em] text-white px-6 py-3.5 transition-opacity hover:opacity-85 disabled:opacity-50"
        style={{ background: "#1a6b3c" }}
      >
        {submitting ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}

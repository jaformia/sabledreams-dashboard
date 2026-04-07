"use client";

import { Suspense, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";

function EyeOffIcon() {
  return (
    <svg
      aria-hidden="true"
      className="auth-password-eye"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L14 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M6.2 6.36C5.88 6.68 5.69 7.12 5.69 7.6C5.69 8.57 6.48 9.35 7.45 9.35C7.93 9.35 8.37 9.16 8.69 8.84"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M3.48 5.12C2.64 5.87 2.07 6.8 1.75 7.6C2.54 9.57 4.68 11.15 7.45 11.15C8.57 11.15 9.59 10.89 10.48 10.44"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M12.05 9.03C12.82 8.37 13.38 7.56 13.95 7.6C13.16 5.63 10.22 4.05 7.45 4.05C6.79 4.05 6.17 4.14 5.59 4.31"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function SetNewPasswordPage() {
  return (
    <Suspense fallback={null}>
      <SetNewPasswordContent />
    </Suspense>
  );
}

function SetNewPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const email = searchParams.get("email")?.trim() || "";
  const code = searchParams.get("code")?.trim() || "";
  const canContinue =
    password.length >= 8 && confirmPassword.length >= 8 && password === confirmPassword;

  const helperText = useMemo(() => {
    if (!password && !confirmPassword) {
      return "Set a new password and continue your journey";
    }

    if (password.length > 0 && password.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (confirmPassword && password !== confirmPassword) {
      return "Passwords must match";
    }

    return "Set a new password and continue your journey";
  }, [confirmPassword, password]);

  const handleContinue = () => {
    if (!canContinue) {
      return;
    }

    const query = new URLSearchParams();
    if (email) {
      query.set("email", email);
    }
    if (code) {
      query.set("code", code);
    }
    router.push(`${ROUTES.passwordChanged}${query.toString() ? `?${query.toString()}` : ""}`);
  };

  return (
    <main className="auth-page">
      <Card className="auth-card auth-set-password-card">
        <div className="stack auth-set-password-stack">
          <div className="auth-brand">
            <Image
              src="/svgg.png"
              alt="Sable Dreams"
              width={150}
              height={54}
              className="auth-brand-image"
              priority
            />
          </div>

          <div className="stack auth-set-password-heading">
            <h2>Set new password</h2>
            <p>{helperText}</p>
          </div>

          <label className="auth-password-field">
            <span>Set Password</span>
            <div className="input-shell auth-password-input">
              <Input
                placeholder="Type a strong password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <EyeOffIcon />
            </div>
          </label>

          <label className="auth-password-field">
            <span>Confirm password</span>
            <div className="input-shell auth-password-input">
              <Input
                placeholder="Re-type password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <EyeOffIcon />
            </div>
          </label>

          <button
            className="button primary auth-set-password-button"
            disabled={!canContinue}
            type="button"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </Card>
    </main>
  );
}

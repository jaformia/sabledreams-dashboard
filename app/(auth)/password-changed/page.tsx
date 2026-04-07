"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="auth-success-icon"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.2L17.2 26L28.4 14"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PasswordChangedPage() {
  return (
    <Suspense fallback={null}>
      <PasswordChangedContent />
    </Suspense>
  );
}

function PasswordChangedContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email")?.trim();

  return (
    <main className="auth-page">
      <Card className="auth-card auth-password-success-card">
        <div className="stack auth-password-success-stack">
          <CheckIcon />

          <div className="stack auth-password-success-heading">
            <h2>Password Changed!</h2>
            <p>
              Return to the login page to enter
              <br />
              {email ? email : "your account"} with your new password
            </p>
          </div>

          <Link className="button primary auth-password-success-button" href={ROUTES.login}>
            Back To Login
          </Link>
        </div>
      </Card>
    </main>
  );
}

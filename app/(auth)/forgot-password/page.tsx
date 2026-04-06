import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";

function EnvelopeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="auth-envelope"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.25" y="2.5" width="13.5" height="11" rx="2.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 4L8 8L13.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <Card className="auth-card auth-forgot-card">
        <div className="stack auth-forgot-stack">
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

          <div className="stack auth-forgot-heading">
            <h2>Forgot Password</h2>
            <p>Enter your email to reset password</p>
          </div>

          <label className="auth-forgot-label">
            <span>Email</span>
            <div className="input-shell auth-forgot-input">
              <EnvelopeIcon />
              <Input placeholder="Enter email" type="email" />
            </div>
          </label>

          <button className="button primary auth-forgot-button" type="button">
            Next
          </button>

          <Link className="auth-back-link" href={ROUTES.login}>
            <span className="auth-back-link-arrow" aria-hidden="true">
              {"<"}
            </span>
            <span>Back to Login</span>
          </Link>
        </div>
      </Card>
    </main>
  );
}

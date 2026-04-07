"use client";

import { Suspense, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";

const OTP_LENGTH = 4;

export default function VerifyCodePage() {
  return (
    <Suspense fallback={null}>
      <VerifyCodeContent />
    </Suspense>
  );
}

function VerifyCodeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const email = searchParams.get("email")?.trim() || "Superflyservice@gmail.com";
  const isComplete = otp.every((digit) => digit.trim().length === 1);

  const handleChange = (index: number, value: string) => {
    const nextValue = value.slice(-1).toUpperCase();
    const nextOtp = [...otp];
    nextOtp[index] = nextValue;
    setOtp(nextOtp);

    if (nextValue && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleNext = () => {
    if (!isComplete) {
      return;
    }

    router.push(
      `${ROUTES.setNewPassword}?email=${encodeURIComponent(email)}&code=${encodeURIComponent(
        otp.join("")
      )}`
    );
  };

  return (
    <main className="auth-page">
      <Card className="auth-card auth-verify-card">
        <div className="stack auth-verify-stack">
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

          <div className="stack auth-verify-heading">
            <h2>Verify Code</h2>
            <p>
              We Sent OTP code to your email
              <br />
              {email} Enter the code
              <br />
              below to verify
            </p>
          </div>

          <div className="auth-otp-group" aria-label="Verification code">
            {otp.map((digit, index) => (
              <input
                key={index}
                aria-label={`Digit ${index + 1}`}
                className={`auth-otp-box${digit ? " is-filled" : ""}`}
                maxLength={1}
                type="text"
                value={digit}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event.key)}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
              />
            ))}
          </div>

          <button
            className="button primary auth-verify-button"
            disabled={!isComplete}
            type="button"
            onClick={handleNext}
          >
            Next
          </button>

          <p className="auth-resend">
            Don&apos;t receive OTP?{" "}
            <button
              className="auth-resend-link auth-inline-button"
              type="button"
              onClick={() => setOtp(["", "", "", ""])}
            >
              Resend again
            </button>
          </p>

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

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canLogin = email.trim().length > 0 && password.trim().length > 0;

  return (
    <main className="auth-page">
      <Card className="auth-card auth-login-card">
        <div className="stack auth-login-stack">
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
          <div className="stack auth-heading auth-login-heading">
            <h2>Welcome Back!</h2>
            <p className="muted">To login, enter your email assress</p>
          </div>
          <div className="stack auth-form-grid auth-compact-grid">
            <label className="auth-field">
              <span>Email address</span>
              <div className="input-shell">
                <span className="input-icon">@</span>
                <Input
                  placeholder="Enter email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </label>
            <label className="auth-field">
              <span>Password</span>
              <div className="input-shell">
                <span className="input-icon">*</span>
                <Input
                  placeholder="Enter password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span className="input-icon input-icon-right">o</span>
              </div>
            </label>
          </div>
          <Link className="auth-forgot-link" href={ROUTES.forgotPassword}>
            Forgot password?
          </Link>
          <button
            className="button primary auth-submit auth-login-button"
            disabled={!canLogin}
            type="button"
            onClick={() => router.push(ROUTES.dashboard)}
          >
            Login
          </button>
        </div>
      </Card>
    </main>
  );
}

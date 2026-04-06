import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";

export default function LoginPage() {
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
                <Input placeholder="Enter email" type="email" />
              </div>
            </label>
            <label className="auth-field">
              <span>Password</span>
              <div className="input-shell">
                <span className="input-icon">*</span>
                <Input placeholder="Enter password" type="password" />
                <span className="input-icon input-icon-right">o</span>
              </div>
            </label>
          </div>
          <Link className="button primary auth-submit auth-login-button" href={ROUTES.dashboard}>
            Login
          </Link>
        </div>
      </Card>
    </main>
  );
}

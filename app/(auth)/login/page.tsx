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
            <span className="auth-brand-script">Sable</span>
            <span className="auth-brand-word">DREAMS</span>
            <span className="auth-brand-tag">DREAM BOLDLY. LIVE SOFTLY.</span>
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
              <div className="auth-forgot-row">
                <Link className="auth-link auth-forgot-link" href={ROUTES.forgotPassword}>
                  Forgot Password?
                </Link>
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

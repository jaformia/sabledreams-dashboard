import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <Card className="auth-card auth-panel-card">
        <div className="stack auth-panel-stack">
          <div className="stack auth-heading">
            <span className="eyebrow">Authentication</span>
            <h2>Create account</h2>
            <p className="muted">
              Set up your workspace access before we move into the dashboard.
            </p>
          </div>
          <div className="stack auth-form-grid">
            <label className="auth-field">
              <span>Full name</span>
              <Input placeholder="Your full name" />
            </label>
            <label className="auth-field">
              <span>Email address</span>
              <Input placeholder="hello@sabledreams.com" type="email" />
            </label>
            <label className="auth-field">
              <span>Password</span>
              <Input placeholder="Create password" type="password" />
            </label>
          </div>
          <Button className="primary auth-submit">Create account</Button>
          <p className="muted auth-switch">
            Already have an account?{" "}
            <Link className="auth-link" href={ROUTES.login}>
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </main>
  );
}

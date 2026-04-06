import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <Card className="auth-card auth-panel-card">
        <div className="stack auth-panel-stack">
          <div className="stack auth-heading">
            <span className="eyebrow">Authentication</span>
            <h2>Reset password</h2>
            <p className="muted">
              Enter the account email and we will send a secure recovery link.
            </p>
          </div>
          <label className="auth-field">
            <span>Email address</span>
            <Input placeholder="hello@sabledreams.com" type="email" />
          </label>
          <Button className="primary auth-submit">Send reset link</Button>
          <p className="muted auth-switch">
            Remembered it?{" "}
            <Link className="auth-link" href={ROUTES.login}>
              Back to sign in
            </Link>
          </p>
        </div>
      </Card>
    </main>
  );
}

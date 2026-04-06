import { Card } from "@/components/ui/card";

export default function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">User</span>
        <h1>User Details</h1>
        <p className="muted">Profile for user ID: {params.id}</p>
      </div>
      <Card>
        <p>This page is ready for the detailed user profile UI.</p>
      </Card>
    </section>
  );
}

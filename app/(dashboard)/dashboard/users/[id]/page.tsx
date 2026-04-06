import { Card } from "@/components/ui/card";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">User</span>
        <h1>User Details</h1>
        <p className="muted">Profile for user ID: {id}</p>
      </div>
      <Card>
        <p>This page is ready for the detailed user profile UI.</p>
      </Card>
    </section>
  );
}

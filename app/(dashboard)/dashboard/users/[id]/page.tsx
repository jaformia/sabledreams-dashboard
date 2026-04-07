import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { mockUsers } from "@/constants/mock-data";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = mockUsers.find((item) => item.id === id);

  return (
    <section className="page-grid">
      <PageHeader eyebrow="User" title={user?.name ?? "User Details"} description={`Profile for user ID: ${id}`} />
      <Card>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="eyebrow">Email</span>
            <strong>{user?.email ?? "Unavailable"}</strong>
          </div>
          <div className="detail-item">
            <span className="eyebrow">Role</span>
            <strong>{user ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Pending"}</strong>
          </div>
          <div className="detail-item">
            <span className="eyebrow">Joined</span>
            <strong>{user?.createdAt ?? "Pending"}</strong>
          </div>
        </div>
      </Card>
    </section>
  );
}

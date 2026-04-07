import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { mockUsers } from "@/constants/mock-data";
import { ROUTES } from "@/constants/routes";

export default function UsersPage() {
  return (
    <section className="page-grid">
      <PageHeader eyebrow="Management" title="Users" description="Review roles, ownership, and account status." />
      <Card>
        <Table
          columns={["Name", "Email", "Role", "Action"]}
          rows={mockUsers.map((row) => [
            row.name,
            row.email,
            row.role.charAt(0).toUpperCase() + row.role.slice(1),
            <Link key={row.id} className="button" href={`${ROUTES.users}/${row.id}`}>
              View
            </Link>,
          ])}
        />
      </Card>
    </section>
  );
}

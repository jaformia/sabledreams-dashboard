import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { ROUTES } from "@/constants/routes";

const rows = [
  { id: "u_101", name: "Ava Turner", email: "ava@example.com", role: "Admin" },
  { id: "u_102", name: "Leo Khan", email: "leo@example.com", role: "Editor" },
  { id: "u_103", name: "Noah Sen", email: "noah@example.com", role: "Viewer" },
];

export default function UsersPage() {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Management</span>
        <h1>Users</h1>
      </div>
      <Card>
        <Table
          columns={["Name", "Email", "Role", "Action"]}
          rows={rows.map((row) => [
            row.name,
            row.email,
            row.role,
            <Link key={row.id} className="button" href={`${ROUTES.users}/${row.id}`}>
              View
            </Link>,
          ])}
        />
      </Card>
    </section>
  );
}

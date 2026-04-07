import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { mockProducts } from "@/constants/mock-data";
import { ROUTES } from "@/constants/routes";

export default function ProductsPage() {
  return (
    <section className="page-grid">
      <PageHeader
        eyebrow="Catalog"
        title="Products"
        description="Track inventory, pricing, and product detail coverage."
        actions={
          <Link className="button primary" href={ROUTES.createProduct}>
            Add product
          </Link>
        }
      />
      <Card>
        <Table
          columns={["Name", "Price", "Inventory", "Action"]}
          rows={mockProducts.map((row) => [
            row.name,
            `$${row.price}`,
            typeof row.stock === "number" && row.stock < 10 ? "Low stock" : "In stock",
            <Link key={row.id} className="button" href={`${ROUTES.products}/${row.id}`}>
              View
            </Link>,
          ])}
        />
      </Card>
    </section>
  );
}

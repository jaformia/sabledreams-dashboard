import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { ROUTES } from "@/constants/routes";

const rows = [
  { id: "p_101", name: "Desert Candle", price: "$28", stock: "In stock" },
  { id: "p_102", name: "Dune Throw", price: "$74", stock: "Low stock" },
  { id: "p_103", name: "Clay Vessel", price: "$39", stock: "In stock" },
];

export default function ProductsPage() {
  return (
    <section className="page-grid">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <span className="eyebrow">Catalog</span>
          <h1>Products</h1>
        </div>
        <Link className="button primary" href={ROUTES.createProduct}>
          Add product
        </Link>
      </div>
      <Card>
        <Table
          columns={["Name", "Price", "Inventory", "Action"]}
          rows={rows.map((row) => [
            row.name,
            row.price,
            row.stock,
            <Link key={row.id} className="button" href={`${ROUTES.products}/${row.id}`}>
              View
            </Link>,
          ])}
        />
      </Card>
    </section>
  );
}

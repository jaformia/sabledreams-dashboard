import { Card } from "@/components/ui/card";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Catalog</span>
        <h1>Product Details</h1>
        <p className="muted">Product ID: {params.id}</p>
      </div>
      <Card>
        <p>This page is ready for the product details UI.</p>
      </Card>
    </section>
  );
}

import { Card } from "@/components/ui/card";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Catalog</span>
        <h1>Product Details</h1>
        <p className="muted">Product ID: {id}</p>
      </div>
      <Card>
        <p>This page is ready for the product details UI.</p>
      </Card>
    </section>
  );
}

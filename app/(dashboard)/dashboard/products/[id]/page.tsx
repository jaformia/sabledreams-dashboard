import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { mockProducts } from "@/constants/mock-data";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  return (
    <section className="page-grid">
      <PageHeader eyebrow="Catalog" title={product?.name ?? "Product Details"} description={`Product ID: ${id}`} />
      <Card>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="eyebrow">Price</span>
            <strong>{product ? `$${product.price}` : "Unavailable"}</strong>
          </div>
          <div className="detail-item">
            <span className="eyebrow">SKU</span>
            <strong>{product?.sku ?? "Pending"}</strong>
          </div>
          <div className="detail-item">
            <span className="eyebrow">Stock</span>
            <strong>{typeof product?.stock === "number" ? product.stock : "Pending"}</strong>
          </div>
        </div>
      </Card>
    </section>
  );
}

import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateProductPage() {
  return (
    <section className="page-grid">
      <PageHeader eyebrow="Catalog" title="Create Product" description="Capture the core merchandising fields before API wiring." />
      <Card>
        <div className="stack field-grid">
          <label className="auth-field">
            <span>Product name</span>
            <Input placeholder="Product name" />
          </label>
          <label className="auth-field">
            <span>Price</span>
            <Input placeholder="Price" />
          </label>
          <label className="auth-field">
            <span>SKU</span>
            <Input placeholder="SKU" />
          </label>
          <Button>Create</Button>
        </div>
      </Card>
    </section>
  );
}

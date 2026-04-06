import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateProductPage() {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Catalog</span>
        <h1>Create Product</h1>
      </div>
      <Card>
        <div className="stack">
          <Input placeholder="Product name" />
          <Input placeholder="Price" />
          <Input placeholder="SKU" />
          <Button>Create</Button>
        </div>
      </Card>
    </section>
  );
}

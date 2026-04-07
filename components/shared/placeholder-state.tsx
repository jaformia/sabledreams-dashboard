import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";

type PlaceholderStateProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderState({ eyebrow, title, description }: PlaceholderStateProps) {
  return (
    <section className="page-grid">
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <Card className="placeholder-state">
        <p>{description}</p>
      </Card>
    </section>
  );
}

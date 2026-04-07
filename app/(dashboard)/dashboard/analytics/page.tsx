import { PageHeader } from "@/components/shared/page-header";
import { LineChart } from "@/components/charts/line-chart";
import { PieChart } from "@/components/charts/pie-chart";

export default function AnalyticsPage() {
  return (
    <section className="page-grid">
      <PageHeader eyebrow="Insights" title="Analytics" description="Compare revenue and audience composition at a glance." />
      <LineChart />
      <PieChart />
    </section>
  );
}

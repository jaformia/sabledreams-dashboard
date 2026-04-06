import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { PieChart } from "@/components/charts/pie-chart";

export default function AnalyticsPage() {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Insights</span>
        <h1>Analytics</h1>
      </div>
      <LineChart />
      <Card>
        <PieChart />
      </Card>
    </section>
  );
}

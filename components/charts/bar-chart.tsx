import { ChartCard } from "@/components/charts/chart-card";

export function BarChart() {
  return (
    <ChartCard eyebrow="Chart" title="Sales by Category">
      <div className="placeholder-chart">Bar chart placeholder</div>
    </ChartCard>
  );
}

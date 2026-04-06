import { Card } from "@/components/ui/card";

export function BarChart() {
  return (
    <Card>
      <div className="stack">
        <div>
          <span className="eyebrow">Chart</span>
          <h2>Sales by Category</h2>
        </div>
        <div className="placeholder-chart">Bar chart placeholder</div>
      </div>
    </Card>
  );
}

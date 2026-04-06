import { Card } from "@/components/ui/card";

export function LineChart() {
  return (
    <Card>
      <div className="stack">
        <div>
          <span className="eyebrow">Chart</span>
          <h2>Revenue Trend</h2>
        </div>
        <div className="placeholder-chart">Line chart placeholder</div>
      </div>
    </Card>
  );
}

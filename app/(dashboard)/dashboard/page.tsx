import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { BarChart } from "@/components/charts/bar-chart";

export default function DashboardPage() {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Overview</span>
        <h1>Dashboard</h1>
        <p className="muted">Starter overview for analytics, users, and products.</p>
      </div>
      <div className="metrics-grid">
        <Card>
          <span className="muted">Revenue</span>
          <h2>$24,680</h2>
          <span className="badge">+12.4%</span>
        </Card>
        <Card>
          <span className="muted">Users</span>
          <h2>1,284</h2>
          <span className="badge">+8.2%</span>
        </Card>
        <Card>
          <span className="muted">Orders</span>
          <h2>346</h2>
          <span className="badge">+4.7%</span>
        </Card>
      </div>
      <LineChart />
      <BarChart />
    </section>
  );
}

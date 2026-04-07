import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type ChartCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function ChartCard({ eyebrow, title, children }: ChartCardProps) {
  return (
    <Card>
      <div className="stack">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </Card>
  );
}

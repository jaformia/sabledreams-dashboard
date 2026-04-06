"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", href: ROUTES.dashboard },
  { label: "Analytics", href: ROUTES.analytics },
  { label: "Users", href: ROUTES.users },
  { label: "Products", href: ROUTES.products },
  { label: "Settings", href: ROUTES.settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="dashboard-sidebar">
      <span className="eyebrow">SableDreams</span>
      <h2 style={{ marginBottom: 0 }}>Admin Panel</h2>
      <nav className="sidebar-nav">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              className={cn("sidebar-link", active && "active")}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

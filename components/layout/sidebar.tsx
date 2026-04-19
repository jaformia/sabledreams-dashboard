"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

type SidebarItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

function GridIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="12" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3" y="12" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="12" y="12" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 15c.6-2 2.4-3.2 4.5-3.2s3.9 1.2 4.5 3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 6.2c1.6.1 2.8 1.4 2.8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13.8 11.9c1.2.4 2.1 1.4 2.5 2.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 8h15" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 12.3h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 7h8M6 10h8M6 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <rect x="4" y="6" width="12" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 3.2v2.3M7.5 10h.01M12.5 10h.01M7 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 13.5 8.5 10l2.2 1.8L14 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <path d="M4.5 10a5.5 5.5 0 1 1 11 0" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3.5" y="10" width="2.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="14" y="10" width="2.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 3.2v1.4M10 15.4v1.4M16.8 10h-1.4M4.6 10H3.2M14.8 5.2l-1 1M6.2 13.8l-1 1M14.8 14.8l-1-1M6.2 6.2l-1-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="sidebar-icon">
      <path d="M8 4H5.5A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10.5 10h5M13.2 7.4 15.8 10l-2.6 2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const items: SidebarItem[] = [
  { label: "Dashboard", href: ROUTES.dashboard, icon: <GridIcon /> },
  { label: "Users", href: ROUTES.users, icon: <UsersIcon /> },
  { label: "Subscriptions", href: ROUTES.subscriptions, icon: <CardIcon /> },
  { label: "Content", href: ROUTES.content, icon: <ContentIcon /> },
  { label: "AI Life Coach", href: ROUTES.aiLifeCoach, icon: <BotIcon /> },
  { label: "Analytics", href: ROUTES.analytics, icon: <ChartIcon /> },
  { label: "Support", href: ROUTES.support, icon: <HeadsetIcon /> },
  { label: "Settings", href: ROUTES.settings, icon: <SettingsIcon /> },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-top">
        <Link className="dashboard-logo" href={ROUTES.dashboard}>
          <Image
            src="/svgg.png"
            alt="Sable Dreams"
            width={148}
            height={48}
            className="dashboard-logo-image"
            priority
          />
        </Link>

        <nav className="sidebar-nav">
          {items.map((item) => {
            const active =
              item.href === ROUTES.dashboard
                ? pathname === ROUTES.dashboard
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("sidebar-link", active && "active")}
                href={item.href}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <Link className="sidebar-link sidebar-logout" href={ROUTES.login}>
        <LogoutIcon />
        <span>Logout</span>
      </Link>
    </aside>
  );
}

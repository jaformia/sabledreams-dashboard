export type DashboardStat = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
};

export type DashboardBar = {
  month: string;
  height: number;
};

export type DashboardUser = {
  name: string;
  email: string;
  joined: string;
  status: "Active" | "Pending";
};

export type DashboardActivity = {
  tone: "blue" | "green" | "yellow";
  title: string;
  time: string;
};

export type DashboardMood = {
  label: string;
  tone: "positive" | "neutral" | "challenging";
  value: string;
};

export const dashboardStats: DashboardStat[] = [
  { label: "Total Users", value: "54,230", change: "+12%", positive: true },
  { label: "New Users", value: "1,204", change: "+8.4%", positive: true },
  { label: "Journal Entries", value: "1.2M", change: "+15%", positive: true },
  { label: "Mood Logs", value: "842K", change: "-2.1%", positive: false },
  { label: "Active Goals", value: "12.5K", change: "+4.7%", positive: true },
  { label: "Premium Subs", value: "3,420", change: "+22%", positive: true },
];

export const dashboardGrowth: DashboardBar[] = [
  { month: "Jan", height: 62 },
  { month: "Feb", height: 95 },
  { month: "Mar", height: 70 },
  { month: "Apr", height: 124 },
  { month: "May", height: 116 },
  { month: "Jun", height: 152 },
  { month: "Jul", height: 170 },
];

export const dashboardUsers: DashboardUser[] = [
  { name: "Sarah Johnson", email: "sarah.j@example.com", joined: "Oct 24, 2023", status: "Active" },
  { name: "Marcus Chen", email: "m.chen@outlook.com", joined: "Oct 23, 2023", status: "Pending" },
  { name: "David Miller", email: "david.mill@gmail.com", joined: "Oct 22, 2023", status: "Active" },
];

export const dashboardActivities: DashboardActivity[] = [
  { tone: "blue", title: "Sarah J. created a new entry", time: "2 minutes ago" },
  { tone: "green", title: "New premium subscription", time: "15 minutes ago" },
  { tone: "yellow", title: "Liam Taylor joined the platform", time: "1 hour ago" },
  { tone: "blue", title: "Milestone reached: 50,000 entries", time: "3 hours ago" },
];

export const dashboardMoodBreakdown: DashboardMood[] = [
  { label: "Positive", tone: "positive", value: "65%" },
  { label: "Neutral", tone: "neutral", value: "25%" },
  { label: "Challenging", tone: "challenging", value: "10%" },
];

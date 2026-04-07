import type { Product } from "@/types/product";
import type { AuthUser, User } from "@/types/user";

export const mockAuthUser: AuthUser = {
  id: "u_101",
  name: "Sarah Johnson",
  email: "sarah.j@example.com",
  role: "admin",
};

export const mockUsers: User[] = [
  { id: "u_101", name: "Ava Turner", email: "ava@example.com", role: "admin", createdAt: "2024-10-21" },
  { id: "u_102", name: "Leo Khan", email: "leo@example.com", role: "editor", createdAt: "2024-10-20" },
  { id: "u_103", name: "Noah Sen", email: "noah@example.com", role: "viewer", createdAt: "2024-10-19" },
];

export const mockProducts: Product[] = [
  { id: "p_101", name: "Desert Candle", price: 28, sku: "SDL-001", stock: 32 },
  { id: "p_102", name: "Dune Throw", price: 74, sku: "SDL-002", stock: 7 },
  { id: "p_103", name: "Clay Vessel", price: 39, sku: "SDL-003", stock: 18 },
];

export const settingsFields = [
  { name: "storeName", type: "text", placeholder: "Store name" },
  { name: "supportEmail", type: "email", placeholder: "Support email" },
] as const;

export const placeholderPages = {
  aiLifeCoach: {
    eyebrow: "Automation",
    title: "AI Life Coach",
    description: "Configure prompts, tone, and routing for the assistant workspace.",
  },
  content: {
    eyebrow: "Publishing",
    title: "Content",
    description: "Manage editorial workflows, featured stories, and release scheduling.",
  },
  subscriptions: {
    eyebrow: "Revenue",
    title: "Subscriptions",
    description: "Review plans, renewal trends, and payment state before wiring real data.",
  },
  support: {
    eyebrow: "Operations",
    title: "Support",
    description: "Track queues, SLAs, and escalations from a single support console.",
  },
} as const;

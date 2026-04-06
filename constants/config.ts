export const APP_CONFIG = {
  appName: "SableDreams Dashboard",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api",
} as const;

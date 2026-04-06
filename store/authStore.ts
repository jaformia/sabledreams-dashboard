import type { AuthUser } from "@/types/user";

export type AuthState = {
  user: AuthUser | null;
};

export const authStore: AuthState = {
  user: null,
};

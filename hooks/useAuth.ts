"use client";

import { useStore } from "@/store";

export function useAuth() {
  const auth = useStore((state) => state.auth);

  return {
    ...auth,
    isAuthenticated: Boolean(auth.user),
  };
}

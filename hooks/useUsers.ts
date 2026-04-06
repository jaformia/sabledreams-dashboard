"use client";

import { useStore } from "@/store";

export function useUsers() {
  return useStore((state) => state.users);
}

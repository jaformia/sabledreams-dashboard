"use client";

import { useStore } from "@/store";

export function useProducts() {
  return useStore((state) => state.products);
}

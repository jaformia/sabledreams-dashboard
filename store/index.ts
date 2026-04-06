"use client";

import { useSyncExternalStore } from "react";
import { authStore, type AuthState } from "@/store/authStore";
import { userStore, type UserState } from "@/store/userStore";
import { productStore, type ProductState } from "@/store/productStore";

type RootStore = {
  auth: AuthState;
  users: UserState;
  products: ProductState;
};

const store: RootStore = {
  auth: authStore,
  users: userStore,
  products: productStore,
};

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function setStoreState(updater: (state: RootStore) => void) {
  updater(store);
  listeners.forEach((listener) => listener());
}

export function useStore<T>(selector: (state: RootStore) => T) {
  return useSyncExternalStore(subscribe, () => selector(store), () => selector(store));
}

import type { AuthUser } from "@/types/user";
import { createStoreState } from "@/store/createStore";

export type AuthState = {
  user: AuthUser | null;
};

export const authStore: AuthState = createStoreState({
  user: null,
});

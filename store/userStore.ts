import type { User } from "@/types/user";

export type UserState = {
  list: User[];
};

export const userStore: UserState = {
  list: [],
};

import type { User } from "@/types/user";
import { createCollectionState, type CollectionState } from "@/store/createStore";

export type UserState = CollectionState<User>;

export const userStore: UserState = createCollectionState<User>();

export type UserRole = "admin" | "editor" | "viewer";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type User = AuthUser & {
  createdAt?: string;
};

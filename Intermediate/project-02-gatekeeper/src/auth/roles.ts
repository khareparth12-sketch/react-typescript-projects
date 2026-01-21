// src/auth/roles.ts

export type Role = "ADMIN" | "MANAGER" | "USER";

export const ROLES = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  USER: "USER",
} as const;

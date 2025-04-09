import "server-only";

import { cache } from "react";
import { auth } from "@/auth";

import type { ExtendedUser } from "@/types/next-auth";

export const getCurrentUser = cache(
  async (): Promise<ExtendedUser | undefined> => {
    try {
      const session = await auth();
      return session?.user ?? undefined;
    } catch (error) {
      console.error("Error getting current user:", error);
      return undefined;
    }
  },
);

export async function getRequiredUser(): Promise<ExtendedUser> {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { projectSchema } from "@/lib/validations/project";

export const addProject = async (data: z.infer<typeof projectSchema>) => {
  const req = await prisma.projects.create({
    data: {
      ...data,
    },
  });
  if (!req) return { message: "failed to create project" };
  revalidatePath("/");
  return {
    message: "successfully created",
  };
};

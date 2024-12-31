"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

import { prisma } from "@/lib/db";
import { projectSchema, TProject } from "@/lib/validations/project";

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return projects;
  } catch (err) {
    console.log(err);
  }
};
export const getProject = async (id) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    return project;
  } catch (err) {
    console.log(err);
  }
};
export const addProject = async (data: TProject) => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return { message: "unauthorized" };

  const result = projectSchema.safeParse(data);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (result.success) {
    try {
      const res = await prisma.project.create({
        data: {
          ...result.data,
        },
      });
      revalidatePath("/admin/projects");
      return { success: "project has been created successfully", res };
    } catch (error) {
      return {
        error: error,
      };
    }
  }
};
export const updateProject = async (data: TProject, id: string) => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return { message: "unauthorized" };

  const result = projectSchema.safeParse(data);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (result.success) {
    try {
      const res = await prisma.project.update({
        where: {
          id: id,
        },
        data: {
          ...result.data,
        },
      });
      return { success: "project has been updated successfully", res };
    } catch (error) {
      return {
        error: error,
      };
    }
  }
  revalidatePath("/admin/projects");
};
export const deleteProject = async (id: string) => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return { message: "unauthorized" };

  try {
    const res = await prisma.project.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/admin/projects");
    return { success: "project has been deleted successfully" };
  } catch (error) {
    return {
      error: error,
    };
  }
};

"use server";

import { prisma } from "@/lib/db";

export const getProjects = async () => {
  try {
    const projects = await prisma.projects.findMany({
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
    const project = await prisma.projects.findUnique({
      where: {
        id: id,
      },
    });

    return project;
  } catch (err) {
    console.log(err);
  }
};

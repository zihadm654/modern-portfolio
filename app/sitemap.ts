import { getProjects } from "@/actions/getProjects";
import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const projectData = await getProjects();
  const projects = projectData?.map(({ id, createdAt }) => ({
    url: `https://portfolio-nextjs-zihadm654.vercel.app/projects/${id}`,
    lastModified: new Date(createdAt).toISOString().split("T")[0],
  }));

  const blogs = allPosts.map((post) => ({
    url: `https://portfolio-nextjs-zihadm654.vercel.app/${post.slug}`,
    lastModified: post.published,
  }));

  const routes = ["", "/projects", "/about", "/contact", "/blogs"].map(
    (route) => ({
      url: `https://portfolio-nextjs-zihadm654.vercel.app/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return [...routes, ...projects, ...blogs];
}

// export default async function sitemap() {
//   const projectData = await getProjects();
//   const projects = projectData?.map(({ id, createdAt }) => ({
//     url: `https://portfolio-nextjs-zihadm654.vercel.app/projects/${id}`,
//     lastModified: new Date(createdAt).toISOString().split("T")[0],
//   }));

//   const blogs = allPosts.map(post => ({
//     url: `https://portfolio-nextjs-zihadm654.vercel.app/${post.slug}`,
//     lastModified: post.published,
//   }));

//   const routes = ["/", "/projects", "/about", "/contact", "/blog"].map(
//     route => ({
//       url: `https://portfolio-nextjs-zihadm654.vercel.app/${route}`,
//       lastModified: new Date().toISOString().split("T")[0],
//     }),
//   );

//   return [...routes, ...blogs];
// }
import type { MetadataRoute } from "next";
import { getProjects } from "@/actions/project";
import { allPosts } from "contentlayer/generated";

import { env } from "@/env.mjs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await getProjects();
  const products = res?.map(({ id, createdAt }) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}/products/${id}`,
    lastModified: new Date(createdAt).toISOString().split("T")[0],
  }));
  const blogs = allPosts.map(post => ({
    url: `${env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
    lastModified: post.published,
  }));
  const routes = [
    {
      url: `${env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/projects`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/about`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.5,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/blog`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/contact`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 1,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/login`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/register`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/dashboard`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/dashboard/products`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.5,
    },
    {
      url: `${env.NEXT_PUBLIC_APP_URL}/dashboard/settings`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 1,
    },
  ];

  return [...routes, ...(products ?? [])];
}

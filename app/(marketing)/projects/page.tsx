import { Suspense } from "react";
import { Metadata } from "next/types";
import { getProjects } from "@/actions/getProjects";

import { Skeleton } from "@/components/ui/skeleton";
import Cards from "@/components/Cards";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default async function Page() {
  const data = await getProjects();
  console.log(data, "data");
  return (
    <section className="py-4">
      <MaxWidthWrapper>
        <div className="space-x-2">
          <h3 className="text-3xl font-bold">
            Shaping world class websites,
            <br /> designs and experiences
          </h3>
          <p className="text-md">
            I can help you successfully take your business online while
            assisting you throughout the building process.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Suspense fallback={<Skeleton />}>
            <Cards data={data} />
          </Suspense>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export const metadata: Metadata = {
  title: "projects",
  description:
    "This project page holds all the projects completed for showcase.",
  openGraph: {
    title: "products",
    description:
      "This project page holds all the projects completed for showcase.",
    images: [
      {
        url: "/og-bg.jpg",
        width: "600",
        height: "400",
        alt: "title",
      },
      {
        url: "/og-bg.jpg",
        width: "800",
        height: "600",
        alt: "title",
      },
    ],
  },
};

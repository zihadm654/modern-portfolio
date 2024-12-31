import { Suspense } from "react";
import { getProjects } from "@/actions/project";
import { Project } from "@prisma/client";

import Cards from "../Cards";
import { HeaderSection } from "../shared/header-section";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { Skeleton } from "../ui/skeleton";

const ProjectSection = async () => {
  const data = await getProjects();
  return (
    <MaxWidthWrapper>
      <div className="py-4">
        <HeaderSection
          label="Projects"
          title="Discover all Projects."
          subtitle="We build digital brand & experiences that makes value"
        />
        <Suspense fallback={<Skeleton />}>
          <div className="grid grid-cols-2 gap-4 py-4 max-md:grid-cols-1">
            {data?.map((item: Project) => <Cards key={item.id} data={item} />)}
          </div>
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
};
export default ProjectSection;

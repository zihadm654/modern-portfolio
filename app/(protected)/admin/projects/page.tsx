import React from "react";
import { getProjects } from "@/actions/project";

import { columns } from "@/components/dashboard/data-table/columns";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import { DashboardHeader } from "@/components/dashboard/header";

const Page = async () => {
  const projects = await getProjects();
  return (
    <>
      <DashboardHeader heading=" Projects" text="Lists of Projects" />
      {projects && <DataTable columns={columns} data={projects} />}
    </>
  );
};

export default Page;

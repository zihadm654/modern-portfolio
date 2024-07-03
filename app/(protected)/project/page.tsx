import React from "react";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import Addproject from "@/components/forms/add-project-form";

const Page = () => {
  return (
    <DashboardShell>
      <DashboardHeader heading="Add project" text="Create new project" />
      <Addproject />
    </DashboardShell>
  );
};

export default Page;

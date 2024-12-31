import React from "react";

import { DashboardHeader } from "@/components/dashboard/header";
import { Addproject } from "@/components/forms/add-project-form";

const Page = () => {
  return (
    <>
      <DashboardHeader heading="Add project" text="Create new project" />
      <Addproject />
    </>
  );
};

export default Page;

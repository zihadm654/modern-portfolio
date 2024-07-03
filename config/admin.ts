import { DashboardConfig } from "types";

export const adminConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Admin Board",
      href: "/admin",
      icon: "post",
    },
    {
      title: "Create Project",
      href: "/project",
      icon: "post",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
};

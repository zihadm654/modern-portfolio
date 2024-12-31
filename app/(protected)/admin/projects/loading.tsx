import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function OrdersLoading() {
  return (
    <>
      <DashboardHeader
        heading="Projects"
        text="Check and manage your latest projects."
      />
      <Skeleton className="size-full rounded-lg" />
    </>
  );
}

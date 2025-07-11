import React, { Suspense } from "react";
import DashboardPage from "@/app/(main)/dashboard/page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1>WealthIQ Dashboard</h1>

      {/*dashboardPage*/}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};
export default DashboardLayout;

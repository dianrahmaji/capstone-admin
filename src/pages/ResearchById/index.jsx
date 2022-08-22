import { ChevronRightIcon } from "@heroicons/react/solid";

import BaseBreadcrumbs from "~/components/generic/breadcrumbs/BaseBreadcrumbs";
import DashboardLayout from "~/layouts/DashboardLayout";
import MemberTable from "./components/MemberTable";
import ResearchDetails from "./components/ResearchDetails";

const pages = [
  { name: "Penelitian", redirect: "/research", current: false },
  { name: "Capstone Project", redirect: "#", current: true },
];

function ResearcherDetails() {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <BaseBreadcrumbs pages={pages} separator={ChevronRightIcon} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <ResearchDetails />
          <MemberTable />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ResearcherDetails;

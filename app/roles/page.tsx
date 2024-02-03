import RolesSectionOne from "@/components/Roles/RolesSectionOne";
import RolesSectionTwo from "@/components/Roles/RolesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const RolesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <RolesSectionOne />
      <RolesSectionTwo />
    </>
  );
};

export default RolesPage;

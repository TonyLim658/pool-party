import RolesSectionOne from "@/components/Roles/RolesSectionOne";
import RolesSectionTwo from "@/components/Roles/RolesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rôles | Poule Party",
  description: "Page des rôles et pôles de la Poule Party",
  // other metadata
};

const RolesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Rôles"
        description="Page des rôles et pôles de la Poule Party, les responsables et les bénévoles seront mis à jour sur cette page."
      />
      <RolesSectionOne />
    </>
  );
};

export default RolesPage;

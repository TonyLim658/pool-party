import AccessSectionOne from "@/components/Access/AccessSectionOne";
import AccessSectionTwo from "@/components/Access/AccessSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accès au lieu | Poule Party",
  description: "Accès au lieux de la Poule Party",
  // other metadata
};

const AccessPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Accès"
        description="Pour venir sur place nous communiquerons l'adresse précise dans le Discord, mais voici une idée de l'endroit où se déroulera le festival 📌"
      />
      <AccessSectionOne />
    </>
  );
};

export default AccessPage;

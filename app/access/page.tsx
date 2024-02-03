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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AccessSectionOne />
      <AccessSectionTwo />
    </>
  );
};

export default AccessPage;

import DiapoSectionOne from "@/components/Diapo/DiapoSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diapo | Poule Party",
  description: "Page du diapo annonce de la Poule Party",
  // other metadata
};

const DiapoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Diapo annonce"
        description="Page avec le diaporama des annonces du 17/02/2024 à l'anniversaire de Tony."
      />
      <DiapoSectionOne />
    </>
  );
};

export default DiapoPage;

import SectionTitle from "../Common/SectionTitle";

const AccessSectionOne = () => {
  return (
    <section id="access">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="flex flex-row items-center justify-items-center mb-4">
              <div className="w-full px-4 lg:w-2/5">
                <img src="/images/access/access1.webp" alt="france-map" className="w-full max-w-full"/>
              </div>
              <div className="w-full px-4 lg:w-2/5">
                <img src="/images/access/access2.webp" alt="vendome-map" className="w-full max-w-full"/>
              </div>
            </div>
            <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
              {"Le festival aura lieu près de Vendôme à une adresse précise classifiée dans un lieu dans le rond rouge 🤫"}
            </div>
            <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
              {"Vous pourrez vous rendre aux Gares de \"Villiers-Sur-Loir\" ou \"Vendôme\", une navette viendra vous récupérer. 🚌"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSectionOne;

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Project = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="project">
      <div className="container">
          <SectionTitle
            title="Le Projet"
            center
          />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-2/5">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[700px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/hero/project1.webp"
                alt="festival-stage"
                className="drop-shadow-three rounded-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/5">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Poule Party
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  La Poule Party est un évènement communautaire où tout le monde est bénévole, les festivaliers, les musiciens et les exposants.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Scène Ouverte
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  La programmation de journée est participative avec une scène ouverte dont les bénévoles proposent des concerts, des spectacles et des ateliers.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Stands & Base de vie
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Une partie du festival est dédiée à des stands de créateurs comme des friperies ou des tatoueurs. Un espace de restauration est également mis en place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

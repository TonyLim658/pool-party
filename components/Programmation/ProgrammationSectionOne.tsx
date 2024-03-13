import SectionTitle from "../Common/SectionTitle";
import SingleArtiste from "./SingleArtiste";
import artisteData from "./artisteData";

const ProgrammationSectionOne = () => {
  return (
    <section
      id="programmation"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Musicien·nes"
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
          {artisteData.map((artiste) => { 
            const isOdd = artiste.id % 2 === 1;
            return (
            <div key={artiste.id} className="w-full">
            {isOdd ? 
              <div>
                <SingleArtiste artiste={artiste} />
                <img
                  src="/images/hero/join.webp"
                  alt="join-image"
                  height={100}
                  width={100}
                  className="drop-shadow-three rounded-lg"
                />
              </div>
                    : 
              <div>
                <img
                    src="/images/hero/join.webp"
                    alt="join-image"
                    height={100}
                    width={100}
                    className="drop-shadow-three rounded-lg hidden md:block"
                />
                <SingleArtiste artiste={artiste} />
                <img
                  src="/images/hero/join.webp"
                  alt="join-image"
                  height={100}
                  width={100}
                  className="drop-shadow-three rounded-lg block md:hidden"
                />
              </div>}
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default ProgrammationSectionOne;

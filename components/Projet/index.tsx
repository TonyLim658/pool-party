import SectionTitle from "../Common/SectionTitle";
import SingleProjet from "./SingleProjet";
import projetData from "./projetData";

const Projet = () => {
  return (
    <>
      <section id="projet" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projetData.map((projet) => (
              <SingleProjet key={projet.id} projet={projet} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projet;

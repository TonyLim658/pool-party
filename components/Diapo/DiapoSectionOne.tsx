import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const DiapoSectionOne = () => {
  return (
    <section id="diapo" className="lg:pt-4">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-center w-full gap-y-12">
            <div className="flex w-full">
              <Link
                    href="/images/diapo/Diapo Poule Party.pdf"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    target="_blank"
              >
                <div className="flex gap-x-2">
                  ✉️ Télecharger le diaporama en PDF FULL QUALITÉ ⭐
                </div>
              </Link>
            </div>
            <SectionTitle
              title="Diaporama en images"
              mb="4"
            />
            <img src="/images/diapo/Diapo Poule Party (1).webp" alt="diapo1" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (2).webp" alt="diapo2" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (3).webp" alt="diapo3" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (4).webp" alt="diapo4" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (5).webp" alt="diapo5" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (6).webp" alt="diapo6" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (6.5).webp" alt="diapo6.5" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (7).webp" alt="diapo7" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (8).webp" alt="diapo8" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (9).webp" alt="diapo9" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (10).webp" alt="diapo10" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (11).webp" alt="diapo11" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (12).webp" alt="diapo12" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (13).webp" alt="diapo13" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (14).webp" alt="diapo14" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (15).webp" alt="diapo15" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (16).webp" alt="diapo16" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (17).webp" alt="diapo17" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (18).webp" alt="diapo18" className="w-full max-w-full"/>
            <img src="/images/diapo/Diapo Poule Party (19).webp" alt="diapo19" className="w-full max-w-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiapoSectionOne;

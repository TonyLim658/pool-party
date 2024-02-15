import SectionTitle from "../Common/SectionTitle";

const RolesSectionOne = () => {
  return (
    <section id="roles" className="lg:pt-4">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-center w-full gap-y-12">
            <SectionTitle
              title="Rôles et pôles annoncés"
              mb="4"
            />
            <img src="/images/roles/roles1.webp" alt="roles1" className="w-full max-w-full"/>
            <img src="/images/roles/roles2.webp" alt="roles2" className="w-full max-w-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSectionOne;

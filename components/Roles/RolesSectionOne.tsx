import SectionTitle from "../Common/SectionTitle";

const RoleDetails = ( {title, description}:{title: string, description: string }) => {
  return (
  <div className="text-m text-black dark:text-white sm:text-l lg:text-l xl:text-l">
    <div className="text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
    {title}
    </div>
    {description}
  </div> 
  );
};

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
            <RoleDetails title="Catering: " description="En gros le catering c’est la cantine, là où on mange. L’idée c’est d’aider à la conception des repas pour tous les jours de festival. Participer à l’élaboration des menus, couper des légumes, faire cuire, servir des bons petits plats pour régaler tout le monde. 🍲" />
            <RoleDetails title="Bar: " description="Comme son nom l’indique c’est être le·a barman ou barmaid de la soirée. Servir des bières et autres breuvages avec ou sans alcool, gérer de la monnaie, savoir changer un fût ou demander à quelqu’un de le faire. Être à l’aise avec la foule et les interactions sociales est recommandé." />
            <RoleDetails title="Accueil Animation: " description="L’idée est d’accueillir les comparses festivalier·ère·s, pouvoir renseigner sur les activités. S’occuper des inscriptions des activités à places limitées, pouvoir être l’âme du coin chill et aider à la mise en place des activités. Un poste calme de l’ombre." />
            <RoleDetails title="Technique: " description="Si ce qui te fait vibrer c’est d’installer, monter, démonter, brancher de la scéno et des projo pour te dire “ça c’est moi qui l’ai fait” une fois devant les caissons et que le travail physique n’est pas un problème, alors tu va adorer être dans l’équipe technique. Gros bonus si tu as déjà de l’expérience dans le domaine mais ce n’est pas obligatoire ! Le gros plus de ce pôle te permet de profiter du festival à 100% mais demande d’être présent·e avant (montage) et/ou après (démontage) le festival." />

            <img src="/images/roles/roles2.webp" alt="roles2" className="w-full max-w-full"/>
            <RoleDetails title="Décoration: " description="L’idée c’est de participer à la décoration du site, de la scène, des stands, des espaces chill, des tentes, des bars, des tables, des murs. Bref, de mettre de la couleur et de la vie partout où c’est possible. 🎨" />
            <RoleDetails title="Green Team: " description="Cette équipe s'occupe de la propreté du site, de la gestion des déchets et de la sensibilisation des festivaliers à l'écologie. 🌍" />
            <RoleDetails title="Anges Gardien·ne: " description="Ils sont présent·e pour les festivalier·ère·s, de les aider à trouver leur chemin, de les rassurer, de les accompagner en cas de besoin. Être à l’écoute, savoir gérer des situations de crise, être bienveillant·e et rassurant·e. 🦸‍♂️🦸‍♀️" />
            <RoleDetails title="Runner·use: " description="Chauffeur si t'es champion, appuie sur le 🍄. Tu seras la navette de la gare au lieu et celui qui s'occupe d'aller faire les courses. Permis de conduire obligatoire!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSectionOne;

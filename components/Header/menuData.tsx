import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Le Projet",
        path: "/#project",
        newTab: false,
      },
      {
        id: 12,
        title: "Nous Rejoindre",
        path: "/#join",
        newTab: false,
      }
    ],
  },
  {
    id: 2,
    title: "Programmation",
    path: "/programmation",
    newTab: false,
  },
  {
    id: 3,
    title: "Rôles",
    path: "/roles",
    newTab: false,
  },
  {
    id: 4,
    title: "Accès au lieu",
    path: "/access",
    newTab: false,
  },
  {
    id: 5,
    title: "À propos",
    path: "/about",
    newTab: false,
  }
];
export default menuData;

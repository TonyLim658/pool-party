import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
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
    submenu: [
      {
        id: 51,
        title: "A propos 1",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "A propos 2",
        path: "/about#about2",
        newTab: false,
      }
    ],
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  }
];
export default menuData;

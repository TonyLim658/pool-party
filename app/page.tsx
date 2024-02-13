import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projet from "@/components/Hero/Projet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | Poule Party",
  description: "Page d'accueil de la Poule Party",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Projet />
    </>
  );
}

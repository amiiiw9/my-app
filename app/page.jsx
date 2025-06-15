"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Burger from "./components/Burger";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
export default function Home() {
  return (
    <main className={`${montserrat.className} flex flex-col items-center`}>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </main>
  );
}

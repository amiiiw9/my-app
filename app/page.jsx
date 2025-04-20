"use client";

import Header from "./components/Header";
import HeroSection from "./components/heroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/portfolio";
import Contacts from "./components/Contacts";
import Burger from "./components/burger";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Burger />
    </main>
  );
}

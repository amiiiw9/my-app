"use client";

import Image from "next/image";
import hero from "@/app/assets/images/hero.png";
import heromobile from "@/app/assets/images/heromobile.png";
import Burger from "./burger";
import useLanguage from "../context/useLanguage";
import { langs } from "../data/langs";
import ChangeLangButton from "./ChangeLangButton";

export default function HeroSection() {
  const { lang } = useLanguage();

  return (
    <>
      <div
        id="home"
        className="hidden md:flex container mx-auto flex-col gap-8 py-10"
      >
        <div className="flex justify-between items-end">
          <h1 className="text-5xl font-bold w-20">{langs.name[lang]}</h1>
          <p className="text-xl w-52">{langs.short_info[lang]}</p>
          <ChangeLangButton />
        </div>
        <Image className="w-full" src={hero} alt="hero image" />
      </div>
      <div className="md:hidden block">
        <div className="px-8 py-10 flex flex-col gap-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold w-20">{langs.name[lang]}</h1>
              <p className="text-xl">{langs.short_info[lang]}</p>
            </div>
            <Burger button={true} />
          </div>
          <div className="flex justify-center">
            <Image src={heromobile} alt="hero mobile" />
          </div>
        </div>
        <Burger />
      </div>
    </>
  );
}

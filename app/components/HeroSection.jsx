"use client";
import Image from "next/image";
import hero from "@/app/assets/images/hero.png";
import heromobile from "@/app/assets/images/heromobile.png";
import Burger from "@/app/components/burger.jsx";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "../data/langs";
import ChangeLangButton from "@/app/components/ChangeLangButton.jsx";

export default function HeroSection() {
  const { lang } = useLanguage();

  return (
    <>
      <div
        id="home"
        className="2xl:container mx-auto py-10 md:block hidden px-5"
      >
        <div className="flex justify-between items-end pb-5">
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
              <h1 className="text-3xl font-bold w-20">{langs.name[lang]}</h1>
              <p className="text-xl w-52 ">{langs.short_info[lang]}</p>
            </div>
            <Burger button={true} />
          </div>

          <div className="flex justify-center">
            <Image src={heromobile} alt="hero mobile" className="w-[370px]" />
          </div>
        </div>
        <Burger />
      </div>
    </>
  );
}

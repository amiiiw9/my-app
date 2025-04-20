"use client";
import useLanguage from "../context/useLanguage";
import { langs } from "../data/langs";

export default function AboutMe() {
  const { lang } = useLanguage();
  return (
    <div
      id="about"
      className="container mx-auto flex flex-col items-center bg-gray-200 flex-wrap text-center gap-6 py-8"
    >
      <h1 className="font-sans font-bold text-4xl">{langs.about[lang]}</h1>
      <p>{langs.info1[lang]}</p>

      <p>{langs.info2[lang]}</p>

      <p>{langs.info3[lang]}</p>
    </div>
  );
}

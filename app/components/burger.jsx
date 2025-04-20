"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import burger from "@/public/images/burger.svg";
import close from "@/public/images/close.svg";

export default function Burger({ button }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const links = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About Me",
      link: "#aboutme",
    },
    {
      text: "Skills",
      link: "#skills",
    },
    {
      text: "Portfolio",
      link: "#portfolio",
    },
    {
      text: "Contacts",
      link: "#contacts",
    },
  ];

  function scrollTo(link) {
    setOpen(false);
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      {button && (
        <button onClick={() => setOpen(true)} className="w-10 h-10">
          <Image className="w-full h-full" src={burger} alt="burger" />
        </button>
      )}
      {open && (
        <div className="bg-white absolute w-screen h-screen z-30 top-0 left-0 p-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-8">
              {links.map((link) => (
                <button
                  key={link.text}
                  className="cursor-pointer text-3xl font-semibold"
                  onClick={() => scrollTo(link.link)}
                >
                  {link.text}
                </button>
              ))}
            </div>
            <button className="w-8 h-8" onClick={() => setOpen(false)}>
              <Image className="w-full h-full" src={close} alt="close" />
            </button>
          </div>
          <div className="relative h-1/2">
            <button className="text-3xl absolute -rotate-90 text-nowrap bottom-0 right-0 translate-x-1/3">
              RU | ENG
            </button>
          </div>
        </div>
      )}
    </>
  );
}

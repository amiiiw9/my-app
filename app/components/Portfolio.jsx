import Link from "next/link";
import Image from "next/image";
import braun from "@/public/images/braun.png";
import reebok from "@/app/assets/images/reebok.png";
import levis from "@/app/assets/images/levis.png";

export default function Portfolio() {
  return (
    <div
      className=" bg-gray-200  w-full py-12  flex flex-col gap-10 items-center
     font-semibold container mx-auto "
    >
      <p className="font-bold text-2xl text-black">Portfolio</p>

      <div className="bg-white p-4 shadow-md">
        <Image src={levis} alt="levis image" width={560} height={560} />
      </div>
      <a href="">Online fashion store - Homepage</a>

      <div className="bg-white p-4 shadow-md">
        <Image src={reebok} alt="reebok web" width={560} height={560} />
      </div>
      <a href="">Reebok store - Concept </a>

      <div className="bg-white p-4 shadow-md">
        <Image src={braun} alt="braun image" width={560} height={560} />
      </div>
      <a href="">Braun Landing Page - Concept </a>
    </div>
  );
}

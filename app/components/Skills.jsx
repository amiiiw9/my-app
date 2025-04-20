import Link from "next/link";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="container mr-6 mx-auto flex flex-col items-center justify-center gap-6 py-6">
      <div className="font-sans font-bold text-2xl">Skills</div>

      <p> I work in such programs as</p>

      <div className="flex">
        <Image
          className="mr-14"
          src={"/images/aftereffects.svg"}
          alt="ae image"
          width={120}
          height={120}
        ></Image>

        <Image
          className="mr-14"
          src={"images/illustrator.svg"}
          alt="ai image"
          width={120}
          height={120}
        ></Image>

        <Image
          className="mr-14"
          src={"/images/photoshop.svg"}
          alt="ps image"
          width={120}
          height={120}
        ></Image>

        <Image
          className="mr-14"
          src={"/images/figma.svg"}
          alt="figma image"
          width={120}
          height={120}
        ></Image>
      </div>
    </div>
  );
}

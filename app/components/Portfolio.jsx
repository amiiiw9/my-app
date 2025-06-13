import Link from "next/link";
import Image from "next/image";
import braun from "@/public/images/braun.png";
import reebok from "@/app/assets/images/reebok.png";
import levis from "@/app/assets/images/levis.png";

export default function Portfolio() {
  return (
    <div
      className="
        bg-gray-200
        w-full
        py-8 sm:py-12 md:py-16 // Уменьшаем отступы по вертикали на маленьких экранах
        flex flex-col
        gap-6 sm:gap-10 md:gap-12 // Уменьшаем отступы между элементами
        items-center
        font-semibold
        container mx-auto
        px-4 sm:px-6 md:px-8 lg:px-12 // Добавляем горизонтальные отступы для лучшего внешнего вида на мобильных
      "
    >
      <p className="font-bold text-xl sm:text-2xl md:text-3xl text-black">
        Portfolio
      </p>{" "}
      {/* Уменьшаем размер текста на мобильных */}
      {/* Обертка для изображений, чтобы они занимали всю ширину, но не были слишком большими */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white p-2 sm:p-4 shadow-md">
        {" "}
        {/* Контролируем максимальную ширину и отступы */}
        <Image
          src={levis}
          alt="levis image"
          layout="responsive" // Делает изображение адаптивным к родительскому контейнеру
          width={560} // Эти значения будут использоваться Next/Image для соотношения сторон
          height={560} // и для генерации srcSet
        />
      </div>
      <a
        href=""
        className="text-sm sm:text-base md:text-lg text-blue-600 hover:underline"
      >
        Online fashion store - Homepage
      </a>{" "}
      {/* Адаптируем размер текста для ссылок */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white p-2 sm:p-4 shadow-md">
        <Image
          src={reebok}
          alt="reebok web"
          layout="responsive"
          width={560}
          height={560}
        />
      </div>
      <a
        href=""
        className="text-sm sm:text-base md:text-lg text-blue-600 hover:underline"
      >
        Reebok store - Concept{" "}
      </a>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white p-2 sm:p-4 shadow-md">
        <Image
          src={braun}
          alt="braun image"
          layout="responsive"
          width={560}
          height={560}
        />
      </div>
      <a
        href=""
        className="text-sm sm:text-base md:text-lg text-blue-600 hover:underline"
      >
        Braun Landing Page - Concept{" "}
      </a>
    </div>
  );
}

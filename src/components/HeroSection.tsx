import React from "react";
import Header from "./Header";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col min-h-[350px] sm:min-h-screen gap-16 relative">
      <Header />
      <div className="flex flex-col w-fit">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#FF42FF] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white w-fit">
          MAAK JE
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold">
          DIGITALE IDENTITEIT
        </h2>
      </div>
      <Image
        src="/vector-3-dorito.png"
        alt=""
        width={550}
        height={550}
        className="absolute bottom-0 -right-[270px]"
      />
      <Image
        src="/vector-3-dorito.png"
        alt=""
        width={550}
        height={550}
        className="absolute -bottom-20 -left-[340px]"
      />
      <Image
        src="/vector-3-dorito.png"
        alt=""
        width={550}
        height={550}
        className="absolute bottom-0 -left-[350px] rotate-12"
      />
      <Image
        src="/logo.svg"
        alt=""
        width={120}
        height={120}
        className="absolute bottom-10 left-80 opacity-25"
      />
      <Image
        src="/logo.svg"
        alt=""
        width={120}
        height={120}
        className="absolute bottom-60 right-40 opacity-25 scale-x-[-1] hidden md:block"
      />
    </div>
  );
};

export default HeroSection;

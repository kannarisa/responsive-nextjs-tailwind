import Image from "next/image";
import React from "react";
import { crimsonText } from "@/app/font/FontCall";
import Button from "@/components/ui/Button";

const PartnerSectionSecond = () => {
  return (
    <div className="py-[73px] flex justify-between max-md:flex-col max-md:items-center max-md:gap-[30px] max-md:py-8 2xl:mx-32">
      <div>
        <Image
          src="/assets/images/ShareOpinion.svg"
          width={600}
          height={431}
          alt="opinion"
        />
      </div>
      <div className="flex flex-col h-full w-[470px] relative top-20 max-lg:top-4 max-md:top-0 max-sm:max-w-[100%]">
        <h2
          className={`${crimsonText.className} font-bold text-black text-[40px] leading-[50px] max-lg:text-[30px] max-lg:leading-[40px]`}
        >
          Lorem ipsum dolor sit amet consectetur
        </h2>

        <p className="font-normal text-[#21252980] text-[15px] leading-[18.75px] opacity-50 max-lg:text-[14px] max-lg:leading-[18px] pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore
          facilis temporibus aut fugit nemo odio cum autem velit ullam, sapiente
          quo, eveniet excepturi maiores eum. Repudiandae debitis esse officia.
        </p>

        <div className="pt-6">
          <Button text="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default PartnerSectionSecond;

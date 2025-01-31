import Image from "next/image";
import React from "react";
import { crimsonText } from "../font/FontCall";

const PartnerSectionSecond = () => {
  return (
    <div className="py-[73px] flex justify-between">
      <div>
        <Image
          src="/assets/images/ShareOpinion.svg"
          width={600}
          height={431}
          alt="opinion"
        />
      </div>
      <div className="flex flex-col h-full w-[470px] relative top-20">
        <h2
          className={`${crimsonText.className} font-bold text-black text-[40px] leading-[50px]`}
        >
          Lorem ipsum dolor sit amet consectetur
        </h2>

        <p className="font-normal text-[#21252980] text-[15px] leading-[18.75px] opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore
          facilis temporibus aut fugit nemo odio cum autem velit ullam, sapiente
          quo, eveniet excepturi maiores eum. Repudiandae debitis esse officia.
        </p>

        <div className="pt-6">
          <button className="bg-[#212529] text-white text-center w-[170px] h-[48px] rounded-md font-normal text-[20px] leading-[25px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSectionSecond;

import Image from "next/image";
import React from "react";
import { workSans, crimsonText } from "../font/FontCall";

const Welcome = () => {
  return (
    <div className="ml-[135px] mr-[130px] flex justify-between items-center">
      <div className="h-full w-[416px]">
        <h1
          className={`${workSans.className} font-bold text-white text-[16px] leading-[20px] tracking-[5px]`}
        >
          WELCOME
        </h1>
        <div className="py-4">
        <h2
          className={`${crimsonText.className} font-bold text-white text-[40px] leading-[50px]`}
        >
          Lorem ipsum dolor sit amet consectetur
        </h2>
        </div>
        <p className="font-normal text-[#FFFFFFBF] text-[15px] leading-[18.75px] opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore
          facilis temporibus aut fugit nemo odio cum autem velit ullam, sapiente
          quo, eveniet excepturi maiores eum. Repudiandae debitis esse officia.
        </p>
        <div className="pt-6">
          <button className="bg-white w-[170px] h-[48px] font-normal text-[20px] leading-[25px] items-center rounded-lg">
            Explore
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/thinking.svg"
          width={644}
          height={378}
          alt="thinking"
        />
      </div>
    </div>
  );
};

export default Welcome;

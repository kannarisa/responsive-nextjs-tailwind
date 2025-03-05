import Image from "next/image";
import React from "react";
import { workSans, crimsonText } from "@/app/font/FontCall";

const Welcome = () => {
  return (
    <div className=" bg-[#74C69D]">
      <div className="ml-[135px] mr-[130px] pb-20 flex justify-between items-center max-md:mx-[40px] max-md:flex-col-reverse max-md:gap-[30px] max-sm:mx-[20px] w-auto 2xl:mx-64">
        <div className="h-full w-[416px] max-sm:max-w-[100%]">
          <h1
            className={`${workSans.className} font-bold text-white text-[16px] leading-[20px] tracking-[5px]`}
          >
            WELCOME
          </h1>
          <div className="py-4">
            <h2
              className={`${crimsonText.className} font-bold text-white text-[40px] leading-[50px] max-lg:text-[30px] max-lg:leading-[40px]`}
            >
              Lorem ipsum dolor sit amet consectetur
            </h2>
          </div>
          <p className="font-normal text-[#FFFFFFBF] text-[15px] leading-[18.75px] opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            labore facilis temporibus aut fugit nemo odio cum autem velit ullam,
            sapiente quo, eveniet excepturi maiores eum. Repudiandae debitis
            esse officia.
          </p>
          <div className="pt-6">
            <button className="bg-white w-[170px] h-[48px] font-normal text-[20px] leading-[25px] items-center rounded-lg hover:bg-gray-200 transition-all duration-300">
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
    </div>
  );
};

export default Welcome;

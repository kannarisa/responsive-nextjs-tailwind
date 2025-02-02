import Image from "next/image";
import React from "react";
import { crimsonText } from "@/app/font/FontCall";
const CardSection = () => {
  return (
    <div className="pt-11">
      <div className="flex justify-center items-center gap-11 max-xl:gap-2 max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-lg:place-items-center max-md:grid-cols-1">
        <div className="bg-white w-[279px] h-[299px] shadow-lg">
          <div className="mx-10 py-5">
            <Image
              src="/assets/images/Peg.svg"
              width={175}
              height={175}
              alt="peg"
            />

            <div className="flex flex-col items-start pt-5">
              <h1
                className={`${crimsonText.className} font-bold text-[24px] leading-[30px]`}
              >
                Peg Legge
              </h1>
              <h2 className="font-normal text-[15px] leading-[18.75px] text-[#212529BF] opacity-75 pt-[17px]">
                CEO
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white w-[279px] h-[299px] shadow-lg">
          <div className="mx-10 py-5">
            <Image
              src="/assets/images/richard.svg"
              width={175}
              height={175}
              alt="richard"
            />

            <div className="flex flex-col items-start pt-5">
              <h1
                className={`${crimsonText.className} font-bold text-[24px] leading-[30px]`}
              >
                Richard Guerra
              </h1>
              <h2 className="font-normal text-[15px] leading-[18.75px] text-[#212529BF] opacity-75 pt-[17px]">
                CTO
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white w-[279px] h-[299px] shadow-lg">
          <div className="mx-10 py-5">
            <Image
              src="/assets/images/Alexandra.svg"
              width={175}
              height={175}
              alt="alexandra"
            />

            <div className="flex flex-col items-start pt-5">
              <h1
                className={`${crimsonText.className} font-bold text-[24px] leading-[30px]`}
              >
                Alexandra Stolz
              </h1>
              <h2 className="font-normal text-[15px] leading-[18.75px] text-[#212529BF] opacity-75 pt-[17px]">
                DESIGNER
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white w-[279px] h-[299px] shadow-lg">
          <div className="mx-10 py-5">
            <Image
              src="/assets/images/Janet.svg"
              width={175}
              height={175}
              alt="janet"
            />

            <div className="flex flex-col items-start pt-5">
              <h1
                className={`${crimsonText.className} font-bold text-[24px] leading-[30px]`}
              >
                Janet Bray
              </h1>
              <h2 className="font-normal text-[15px] leading-[18.75px] text-[#212529BF] opacity-75 pt-[17px]">
                DEVELOPER
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-11">
        <button className="bg-[#212529] text-white text-center w-[170px] h-[48px] rounded-md font-normal text-[20px] leading-[25px]">
          View Team
        </button>
      </div>
    </div>
  );
};

export default CardSection;

import React from "react";
import { crimsonText } from "@/app/font/FontCall";
import CardSection from "./CardSection";
const Team = () => {
  return (
    <div className="pt-[60px] pb-[54px] px-[140px]">
      <div className="flex flex-col justify-center items-center px-[379px] max-xl:px-10">
        <div className="pb-4">
          <h1 className="font-bold text-[#74C69D] text-[16px] leading-[20px] tracking-[5px] text-center">
            TEAM
          </h1>
        </div>
        <div className="pb-4">
          <h2
            className={`${crimsonText.className} font-bold text-black text-[40px] leading-[50px] text-center max-lg:text-[30px] max-lg:leading-[40px]`}
          >
            Our Talents
          </h2>
        </div>
        <div>
          <p className="font-normal text-black text-[20px] leading-[25px] text-center max-xl:text-[16px] max-xl:leading-[20px]">
            Lorem ipsum, dolor sit amet consectetur
            <br />
            Suscipit nemo hic quos, ab,
          </p>
        </div>
      </div>
      <CardSection />
    </div>
  );
};

export default Team;

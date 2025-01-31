import React from "react";
import { workSans, crimsonText } from "../font/FontCall";
import Image from "next/image";
import PartnerSectionSecond from "./PartnerSectionSecond";
import PartnerSectionThird from "./PartnerSectionThird";

export const Partner = () => {
  return (
    <div className="pt-[60px] pb-[73px] px-[140px]">
      <div className="flex flex-col justify-center items-center px-[379px]">
        <div className="pb-4">
          <h1 className="font-bold text-[#74C69D] text-[16px] leading-[20px] tracking-[5px] text-center">
            PARTNER
          </h1>
        </div>
        <div className="pb-4">
          <h2
            className={`${crimsonText.className} font-bold text-black text-[40px] leading-[50px] text-center`}
          >
            Lorem Ipsum Dolor
          </h2>
        </div>
        <div>
          <p className="font-normal text-black text-[20px] leading-[25px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            excepturi totam sapiente ratione optio vitae?
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center py-14">
        <Image
          src="/assets/logo/GoogleLogo.svg"
          width={152}
          height={50}
          alt="google"
        />
        <Image
          src="/assets/logo/MicrosoftLogo.svg"
          width={210}
          height={45}
          alt="microsoft"
        />
        <Image
          src="/assets/logo/AirbnbLogo.svg"
          width={160}
          height={50}
          alt="airbnb"
        />
        <Image
          src="/assets/logo/FacebookLogo.svg"
          width={196}
          height={38}
          alt="facebook"
        />
        <Image
          src="/assets/logo/SpotifyLogo.svg"
          width={166}
          height={50}
          alt="microsoft"
        />
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#212529] text-white text-center w-[170px] h-[48px] rounded-md font-normal text-[20px] leading-[25px]">
          Learn More
        </button>
      </div>
      <PartnerSectionSecond />
      <PartnerSectionThird />
    </div>
  );
};

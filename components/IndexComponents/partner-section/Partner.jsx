import React from "react";
import Image from "next/image";
import PartnerSectionSecond from "./PartnerSectionSecond";
import PartnerSectionThird from "./PartnerSectionThird";
import Link from "next/link";
import Button from "@/components/ui/Button";
import TextBox from "@/components/ui/TextBox";

export const Partner = () => {
  return (
    <div className="pt-[60px] pb-[73px] px-[140px] max-md:px-[40px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center items-center px-[379px] max-xl:px-10">
        <TextBox
          topic="PARTNER"
          supTopic="Lorem Ipsum Dolor"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            excepturi totam sapiente ratione optio vitae?"
        />
      </div>
      <div className="flex justify-between items-center py-14 max-md:flex-col max-md:items-center max-md:gap-[30px]">
        <Link
          href="https://www.google.co.th/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/logo/GoogleLogo.svg"
            width={152}
            height={50}
            alt="google"
            className="max-lg:w-24 max-md:w-40 duration-300 hover:-translate-y-4"
          />
        </Link>
        <Link
          href="https://www.microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/logo/MicrosoftLogo.svg"
            width={210}
            height={45}
            alt="microsoft"
            className="max-lg:w-24 max-md:w-40 duration-300 hover:-translate-y-4"
          />
        </Link>
        <Link
          href="https://www.airbnb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/logo/AirbnbLogo.svg"
            width={160}
            height={50}
            alt="airbnb"
            className="max-lg:w-24 max-md:w-40 duration-300 hover:-translate-y-4"
          />
        </Link>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/logo/FacebookLogo.svg"
            width={196}
            height={38}
            alt="facebook"
            className="max-lg:w-24 max-md:w-40 duration-300 hover:-translate-y-4"
          />
        </Link>
        <Link
          href="https://open.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/logo/SpotifyLogo.svg"
            width={166}
            height={50}
            alt="microsoft"
            className="max-lg:w-24 max-md:w-40 duration-300 hover:-translate-y-4"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Button text="Learn More" />
      </div>
      <PartnerSectionSecond />
      <PartnerSectionThird />
    </div>
  );
};

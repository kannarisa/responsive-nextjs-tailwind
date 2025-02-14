import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const WorkImages = () => {
  return (
    <div className="justify-center items-center">
      <div className="mx-32 grid gap-14 grid-cols-[auto_auto] justify-center max-md:flex-col max-md:flex max-w-full max-md:mx-5 max-md:items-center">
        <Image
          src="/assets/images/LandingPage.svg"
          width={570}
          height={334}
          alt="landing"
          className=""
        />

        <Image
          src="/assets/images/WebDesign.svg"
          width={555}
          height={335}
          alt="webDesign"
        />

        <Image
          src="/assets/images/RocketImage.svg"
          width={570}
          height={365}
          alt="rocket"
        />

        <Image
          src="/assets/images/Shopping.svg"
          width={555}
          height={364}
          alt="shopping"
        />

        <Image
          src="/assets/images/Geometric.svg"
          width={570}
          height={355}
          alt="geometric"
        />

        <Image
          src="/assets/images/TrickOrTreat.svg"
          width={558}
          height={355}
          alt="trickOrTreat"
        />

        <Image
          src="/assets/images/Halloween.svg"
          width={570}
          height={347}
          alt="halloween"
        />

        <Image
          src="/assets/images/Virtual.svg"
          width={562}
          height={336}
          alt="virtual"
        />
      </div>
      <div className="pt-16 pb-24 flex justify-center items-center">
       <Button text="Learn More"/>
      </div>
    </div>
  );
};

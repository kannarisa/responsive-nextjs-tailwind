import Image from "next/image";
import React from "react";
import { workSans } from "../font/FontCall";

const Navbar = () => {
  return (
    <div className="py-[35px] ml-[135px] mr-[130px] flex justify-between">
      <div>
        <Image
          src="/assets/logo/logo-start.svg"
          width={70}
          height={48.31}
          alt="logo"
        />
      </div>
      <div className="flex-1 pl-[18px]">
        <h1
          className={`${workSans.className} font-medium text-white text-[40px] leading-[50px]`}
        >
          Start
        </h1>
      </div>
      <div className="justify-center items-center flex">
        <ul className="flex  gap-[30px] ">
          <li
            className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
          >
            Home
          </li>
          <li
            className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
          >
            Portfolio
          </li>
          <li
            className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
          >
            Services
          </li>
          <li
            className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
          >
            Contract
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { crimsonText } from "@/app/font/FontCall";


const ContactUs = () => {
  return (
    <div className="pt-[30px] pb-[67px] px-[140px] max-md:px-[40px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center items-center px-[379px] max-xl:px-10">
        <div className="pb-4">
          <h2
            className={`${crimsonText.className} font-bold text-black text-[40px] leading-[50px] text-center max-lg:text-[30px] max-lg:leading-[40px]`}
          >
            Contact Us
          </h2>
        </div>
        <div>
          <p className="font-normal text-black text-[20px] leading-[25px] text-center max-xl:text-[16px] max-xl:leading-[20px]">
            Lorem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

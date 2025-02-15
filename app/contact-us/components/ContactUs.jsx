import React from "react";
import { crimsonText } from "@/app/font/FontCall";
import TextBox from "@/components/ui/TextBox";

const ContactUs = () => {
  return (
    <div className="pt-[30px] pb-[67px] px-[140px] max-md:px-[40px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center items-center px-[379px] max-xl:px-10">
        <TextBox
          supTopic="Contact Us"
          message="Lorem ipsum, dolor sit amet consectetur
            adipisicing elit."
        />
      </div>
    </div>
  );
};

export default ContactUs;

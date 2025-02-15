import React from "react";
import { workSans, crimsonText } from "@/app/font/FontCall";


const TextBox = ({topic , supTopic, message}) => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="font-bold text-[#74C69D] text-[16px] leading-[20px] tracking-[5px] text-center">
          {topic}
        </h1>
      </div>
      <div className="pb-4">
        <h2
          className={`${crimsonText.className} font-bold text-black text-[40px] leading-[50px] text-center max-lg:text-[30px] max-lg:leading-[40px]`}
        >
          {supTopic}
        </h2>
      </div>
      <div>
        <p className="font-normal text-black text-[20px] leading-[25px] text-center max-xl:text-[16px] max-xl:leading-[20px]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default TextBox;

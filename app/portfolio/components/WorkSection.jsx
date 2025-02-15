import React from "react";
import TextBox from "@/components/ui/TextBox";

const WorkSection = () => {
  return (
    <div className="pt-[60px] pb-[73px] px-[140px] max-md:px-[40px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center items-center px-[379px] max-xl:px-10">
        <TextBox
          topic="WORKS"
          supTopic="Portfolio"
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};

export default WorkSection;

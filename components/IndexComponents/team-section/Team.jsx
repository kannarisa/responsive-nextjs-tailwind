import React from "react";
import CardSection from "./CardSection";
import TextBox from "@/components/ui/TextBox";
const Team = () => {
  return (
    <div className="pb-[54px] px-[140px] max-md:px-[40px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center items-center px-[379px] max-xl:px-10">
        <TextBox
          topic="TEAM"
          supTopic="Our Talents"
          message="Lorem ipsum, dolor sit amet consectetur
            Suscipit nemo hic quos, ab,"
        />
      </div>
      <CardSection />
    </div>
  );
};

export default Team;

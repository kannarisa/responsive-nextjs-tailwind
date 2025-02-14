import React from "react";
import Welcome from "@/components/IndexComponents/welcome-section/Welcome";
import { Partner } from "@/components/IndexComponents/partner-section/Partner";
import Team from "@/components/IndexComponents/team-section/Team";

const Homepage = () => {
  return (
    <div>
      <div className="bg-[#74C69D] max-h-[500px] max-md:max-h-full">
        <Welcome></Welcome>
      </div>
      <Partner />
      <Team />
    </div>
  );
};

export default Homepage;

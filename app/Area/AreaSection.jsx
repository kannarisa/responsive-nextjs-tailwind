import React from "react";
import Navbar from "../components/navbar/Navbar";
import Welcome from "../components/welcome-section/Welcome";

const AreaSection = () => {
  return (
    <div className="bg-[#74C69D] h-[586px]">
      <Navbar></Navbar>
      <Welcome></Welcome>
    </div>
  );
};

export default AreaSection;

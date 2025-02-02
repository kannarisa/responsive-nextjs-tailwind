import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Welcome from "@/components/welcome-section/Welcome";
import { Partner } from "@/components/partner-section/Partner";
import FooterSection from "@/components/footer-section/FooterSection";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#74C69D] h-[500px]">
        <Welcome></Welcome>
      </div>
      <Partner />
      <FooterSection />
    </div>
  );
};

export default Homepage;

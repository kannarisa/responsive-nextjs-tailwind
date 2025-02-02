import React from "react";
import Navbar from "@/components/IndexComponents/navbar/Navbar";
import Welcome from "@/components/IndexComponents/welcome-section/Welcome";
import { Partner } from "@/components/IndexComponents/partner-section/Partner";
import FooterSection from "@/components/IndexComponents/footer-section/FooterSection";
import Team from "@/components/IndexComponents/team-section/Team";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#74C69D] max-h-[500px] max-md:max-h-full">
        <Welcome></Welcome>
      </div>
      <Partner />
      <Team />
      <FooterSection />
    </div>
  );
};

export default Homepage;

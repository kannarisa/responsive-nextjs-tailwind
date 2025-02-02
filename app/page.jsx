import React from "react";
import Navbar from "@/components/IndexComponents/navbar/Navbar";
import Welcome from "@/components/IndexComponents/welcome-section/Welcome";
import { Partner } from "@/components/IndexComponents/partner-section/Partner";
import FooterSection from "@/components/IndexComponents/footer-section/FooterSection";

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

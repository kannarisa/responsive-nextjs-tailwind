import Navbar from "@/components/IndexComponents/navbar/Navbar";
import React from "react";
import WorkSection from "./components/WorkSection";
import { WorkImages } from "./components/WorkImages";
import FooterSection from "@/components/IndexComponents/footer-section/FooterSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <WorkSection />
      <WorkImages />
      <FooterSection />
    </div>
  );
};

export default page;

import FooterSection from "@/components/IndexComponents/footer-section/FooterSection";
import Navbar from "@/components/IndexComponents/navbar/Navbar";
import React from "react";
import ContactUs from "./components/ContactUs";
import Inform from "./components/Inform";

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <Inform />
      <FooterSection />
    </div>
  );
};

export default page;

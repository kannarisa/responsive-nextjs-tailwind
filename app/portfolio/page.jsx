import React from "react";
import WorkSection from "./components/WorkSection";
import { WorkImages } from "./components/WorkImages";
export const metadata = {
  title: "Responsive Web | Portfolio",
};
const page = () => {
  return (
    <div>
      <WorkSection />
      <WorkImages />
    </div>
  );
};

export default page;

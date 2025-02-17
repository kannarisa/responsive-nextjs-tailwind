import React from "react";
import ContactUs from "./components/ContactUs";
import Inform from "./components/Inform";
export const metadata = {
  title: "Responsive Web | Contact",
};
const page = () => {
  return (
    <div>
      <ContactUs />
      <Inform />
    </div>
  );
};

export default page;

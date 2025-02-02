"use client";

import Image from "next/image";
import React, { useState } from "react";
import { workSans } from "@/app/font/FontCall";
import Link from "next/link";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#74C69D]">
      <div className="py-[35px] ml-[135px] mr-[130px] flex justify-between items-center ">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/assets/logo/logo-start.svg"
            width={70}
            height={48.31}
            alt="logo"
          />
          <h1
            className={`${workSans.className} font-medium text-white text-[40px] leading-[50px] pl-[18px]`}
          >
            <Link href="/">Start</Link>
          </h1>
        </div>

        {/* Desktop Navbar (แสดงเมื่อจอใหญ่กว่า 768px) */}
        <nav className="hidden md:flex gap-[30px]">
          <ul className="flex gap-[30px] bg-[#74C69D]">
            <li
              className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
            >
              <Link href="/home">Home</Link>
            </li>
            <li
              className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
              className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
            >
              <Link href="/contact-us">Contract</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu (แสดงเมื่อจอน้อยกว่า 768px) */}
        <nav className="md:hidden">
          <MenuIcon
            className="text-white"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </nav>
      </div>
      <nav className="md:hidden">
        <Accordion className="bg-transparent shadow-none" expanded={open}>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              display: "none",
            }}
          ></AccordionSummary>
          <AccordionDetails>
            <ul className="flex flex-col gap-[10px] items-center">
              <li
                className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
              >
                <Link href="/home">Home</Link>
              </li>
              <li
                className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
              >
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li
                className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`${workSans.className} font-normal text-white text-[20px] leading-[25px]`}
              >
                <Link href="/contact-us">Contract</Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </nav>
    </div>
  );
};

export default Navbar;

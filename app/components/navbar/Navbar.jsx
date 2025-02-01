"use client";
import Image from "next/image";
import React from "react";
import { workSans } from "../font/FontCall";
import Link from "next/link";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="py-[35px] ml-[135px] mr-[130px] flex justify-between items-center">
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
        <ul className="flex gap-[30px]">
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
        <Accordion className="bg-transparent shadow-none">
          <AccordionSummary
            expandIcon={<MenuIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
          ></AccordionSummary>
          <AccordionDetails>
            <ul className="flex flex-col gap-[10px]">
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

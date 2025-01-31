import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar-section/navbar";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Responsive Web",
  description: "This is for practice with Next.js and tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable}`}>
        <Navbar></Navbar>
        
        {children}</body>
    </html>
  );
}

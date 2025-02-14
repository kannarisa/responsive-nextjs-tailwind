import { Work_Sans } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/IndexComponents/footer-section/FooterSection";
import Navbar from "@/components/IndexComponents/navbar/Navbar";

export const metadata = {
  title: "Responsive Web",
  description: "This is for practice with Next.js and tailwindcss",
  icons: "/favicon/Start.ico",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable}`}>
        <Navbar />
        {children}
        <FooterSection />
        </body>
    </html>
  );
}

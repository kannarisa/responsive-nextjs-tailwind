import { Work_Sans } from "next/font/google";
import "./globals.css";
import AreaSection from "./Area/AreaSection";
import { Partner } from "./partner-section/Partner";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Responsive Web",
  description: "This is for practice with Next.js and tailwindcss",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${workSans.variable}`}>
        <AreaSection></AreaSection>
        <Partner />
      </body>
    </html>
  );
}

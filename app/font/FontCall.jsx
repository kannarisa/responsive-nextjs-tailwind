import { Work_Sans, Crimson_Text } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
});

export const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson-text",
});

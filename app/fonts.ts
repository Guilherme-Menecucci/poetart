import { Cedarville_Cursive, Syne } from "next/font/google";

export const syneFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const cedarvilleFont = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cedarville",
  display: "swap",
});

import {
  Inter,
  Roboto_Mono,
  Righteous,
  Rowdies,
  Poppins,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const righteous = Righteous({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-righteous",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export const rowdies = Rowdies({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-rowdies",
});

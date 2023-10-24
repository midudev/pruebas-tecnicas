import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Raleway } from "@next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-raleway",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

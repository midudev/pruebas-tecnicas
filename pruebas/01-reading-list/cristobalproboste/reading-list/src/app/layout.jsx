import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Reading List",
  description: "Prueba tecnica de Frontend Developer",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-r from-yellow-100 to-amber-300`}
      >
        {children}
      </body>
    </html>
  );
}

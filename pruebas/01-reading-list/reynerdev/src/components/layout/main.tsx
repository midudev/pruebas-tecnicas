import { Raleway } from "@next/font/google";

interface IMainLayout {
  children: React.ReactNode;
  splitPercentage: number;
}

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-raleway",
});

export const MainLayout = ({ children, splitPercentage }: IMainLayout) => {
  return (
    <main
      className={`${raleway.variable}  w-full  bg-gradient-to-r from-primary-300 font-sans  from-${splitPercentage}%  to-primary-300  to-70%`}
    >
      {children}
    </main>
  );
};

import { Button } from "./ui/button";
import "./Header.css";
import { GradientGrillBg } from "./microComponents/GradientGrillBg";

export const Header = () => {
  const handleButtonSmooth = () => {
    const booksList = document.getElementById("main");
    if (booksList) {
      window.scrollTo({ top: booksList.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div
      id="header"
      className="min-w-screen overflow-hidden min-h-screen z-0 flex relative bg-gray-100 text-gray-900 justify-center items-center box-border font-serif"
    >
      <GradientGrillBg />

      <div className="header_wrapper container p-0 pt-4 sm:pt-0 px-6 2xl:px-0 flex flex-col-reverse lg:flex-row justify-between gap-2 xl:gap-8">
        <div className="header_info border-6 grow flex flex-col lg:justify-center gap-2 md:gap-6">
          <h1 className="font-bold font-[titles] tracking-tighter text-4xl sm:text-5xl xl:text-6xl">
            Discover Your Next Great Read
          </h1>
          <p className="text-gray-500 md:text-xl max-w-[600px]">
            Explore our curated collection of books across a wide range of
            genres and find your perfect read.
          </p>

          <Button
            onClick={handleButtonSmooth}
            className="bg-green-600 hover:bg-green-700 flex w-full justify-center items-center gap-2 hover:scale-105 transition-all duration-200 ease-in-out active:scale-95 active:bg-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
            </svg>
            <span>Find out amazing Books</span>
          </Button>
        </div>

        <div className="header_img flex items-center max-h-[450px] sm:max-h-[650px]  md:max-h-[750px] justify-center lg:justify-end overflow-hidden rounded-md">
          <img
            className="object-cover rounded-md relative w-full lg:max-w-[600px] md:max-h-[85%]"
            src="/assets/imagen-in-WEBP.webp"
            alt="Imagen de portada"
          />
        </div>
      </div>
    </div>
  );
};

import { GitHubIcon, LinkedinIcon, UpIcon } from "@/components/utils/Icons";
import LogoTipo from "@/components/utils/LogoTipo";

export default function Footer() {
  function handlerUp() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <button
          onClick={handlerUp}
          className="inline-block rounded-full bg-white p-2 text-white shadow transition hover:bg-gray-200/60 sm:p-3 lg:p-4 hover:shadow-lg"
        >
          <UpIcon />
        </button>
      </div>

      <div className="space-y-7 lg:space-y-0 lg:flex lg:items-end lg:justify-between">
        <div>
          <div className="flex justify-center text-teal-600 lg:justify-start">
            <LogoTipo className="scale-75" />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
            Explora y comparte tus opiniones en nuestra biblioteca virtual.
          </p>
          <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
            {" "}
            ¡Vota por tus libros favoritos ahora!,
          </p>
        </div>

        <ul className="flex justify-center items-center gap-x-6 md:gap-x-8">
          <li className="transition hover:scale-105">
            <a href="https://github.com/nicomelendez" className="text-gray-700">
              <GitHubIcon />
            </a>
          </li>

          <li className="transition hover:scale-105">
            <a
              href="https://www.linkedin.com/in/nicolas-melendez/"
              className="text-gray-700"
            >
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

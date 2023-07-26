import { GithubIcon } from "./icons/index";

export const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
          <span class="text-md text-white sm:text-xl">
            Hecho para{" "}
            <a href="https://pruebastecnicas.com/" target="_blank">
              <span className="underline font-semibold">
                pruebastecnicas.com
              </span>
            </a>
          </span>

          <a
            class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="https://github.com/lucasangelino/pruebas-tecnicas"
            target="_blank"
          >
            <span class="text-sm font-medium flex flex-row gap-4 items-center">
              Ver repo <GithubIcon />{" "}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

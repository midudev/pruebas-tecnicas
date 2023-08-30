import React from "react";
import { ExternalLink } from "./Icons";

export default function StoreInfo() {
  return (
      <div className="fixed bottom-4 w-full max-w-[235px] min-h-[110px] outline-1 outline-background-snd outline-double px-4 py-3 flex justify-between flex-col rounded-md">
        <header className="flex justify-between items-center">
          <div className="">
            <span className="text-sm opacity-70">Desarrollador</span>
            <h2 className="text-base leading-4 font-medium">Alexander Pérez</h2>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/55007470?v=4"
            alt="Imagen del desarrollador"
            className="w-14 rounded-full"
          />
        </header>
        <footer>
          <a
            href="https://github.com/th3alexdev"
            className="flex gap-1 items-center hover:underline text-links"
            target="_blank"
          >
            <span>
              <ExternalLink />
            </span>
            <span className="text-base">Visitar Perfil</span>
          </a>
        </footer>
      </div>
  );
}

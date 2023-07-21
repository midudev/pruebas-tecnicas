import React from "react";

const AsideMenu: React.FC = () => {
  return (
    <aside className="w-15vw bg-stone-100 text-stone-800">
      <div className="sticky top-0 left-0 flex flex-col gap-8 p-8">
        <h3 className="font-bold text-xl">Libroteca</h3>
        <div>
          <h4 className="font-medium text-lg">Catálogo</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm">
              <div className="font-medium">Disponibles</div>
            </li>
            <li className="text-sm">
              <div className="font-medium">Número de páginas</div>
              <ul className="flex flex-col gap-2">
                <li>hasta 200 páginas</li>
                <li>200 a 600 páginas</li>
                <li>más de 600 páginas</li>
                <li>
                  <input className="input w-full" placeholder="desde" />
                  <input className="input w-full" placeholder="hasta" />
                </li>
              </ul>
            </li>

            <li className="text-sm">
              <div className="font-medium">Géneros</div>
              <ul>
                <li>Romance (2)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <p>Mi lista</p>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;

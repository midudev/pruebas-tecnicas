import {
  GiPointyHat,
  GiBattleMech,
  GiRaiseZombie,
  GiScreaming,
} from "react-icons/gi";

const BOOKS_ICONS = {
  Fantasía: <GiPointyHat className="text-lg mx-auto text-white" />,
  "Ciencia ficción": <GiBattleMech className="text-lg mx-auto text-white" />,
  Zombies: <GiRaiseZombie className="text-lg mx-auto text-white" />,
  Terror: <GiScreaming className="text-lg mx-auto text-white" />,
};

export { BOOKS_ICONS };

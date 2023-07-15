import { FlyOut } from "./FlyOut";

export const FlyOutMenu = () => {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Agregar a lectura</FlyOut.Item>
        <FlyOut.Item>Remover de lectura</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
};

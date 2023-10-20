import { useState } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [active, setActive] = useState(initialState);

  const toggleActive = (): void => {
    setActive(!active);
  };

  return [active, toggleActive];
};

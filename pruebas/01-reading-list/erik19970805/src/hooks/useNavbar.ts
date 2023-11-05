import { useEffect, useRef, useState } from 'react';

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      } else {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  return { isOpen, elementRef };
};

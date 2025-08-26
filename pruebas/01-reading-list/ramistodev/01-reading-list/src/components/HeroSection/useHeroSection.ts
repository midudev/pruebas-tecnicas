import { useRef } from "react";

export function useHeroSection() {
  const booksSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToBooks = () => {
    booksSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { booksSectionRef, handleScrollToBooks };
}

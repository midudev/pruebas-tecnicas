import BooktopiaLogo from '@/assets/booktopia-logo.avif';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex gap-4 justify-center items-center fixed z-50 w-full top-0 left-0 p-4 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-black/70 flex-row shadow-lg shadow-gray-800/80 py-2'
          : 'flex-col backdrop-blur-none bg-transparent'
      }`}
    >
      <img
        src={BooktopiaLogo}
        alt="Booktopia logo"
        className={`transition-all duration-300 ${scrolled ? 'w-14' : 'w-32'}`}
      />
      <h1
        className={`font-bold transition-all duration-300 ${
          scrolled ? 'text-3xl leading-5 text-white' : 'text-5xl leading-10'
        }`}
      >
        Booktopia
      </h1>
    </header>
  );
}

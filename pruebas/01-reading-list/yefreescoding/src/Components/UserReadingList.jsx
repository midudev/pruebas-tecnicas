/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function UserReadingList({
  className,
  children,
  booksSelectedNum,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const regularClasses = 'flex flex-col gap-8 bg-[#f9f6f6cc] p-4  rounded-lg';
  const mobileClasses = 'top-[0]';
  const desktopClasses = 'top-0';

  return (
    <section
      className={
        windowWidth < 475
          ? `${className} ${regularClasses} ${mobileClasses}`
          : `${className} ${regularClasses} ${desktopClasses}`
      }
    >
      <header>
        {windowWidth < 475 ? (
          <>
            {/* <p>Here you can add all the books you want to read.</p> */}
            <h3 className="font-bold text-xl">
              Books selected: {booksSelectedNum}
            </h3>
          </>
        ) : (
          <>
            <h3 className="font-bold text-xl">
              Books selected: {booksSelectedNum}
            </h3>
            <p>Empieza a añadir libros en tu lista.</p>
          </>
        )}
      </header>
      <div
        id="user-library"
        className="rounded-lg grid grid-cols-3 gap-4 h-fit"
      >
        {children}
      </div>
    </section>
  );
}

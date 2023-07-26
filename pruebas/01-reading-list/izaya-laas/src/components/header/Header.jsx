import { Link } from 'wouter';
import DarkMode from './DarkMode';

export const Header = () => {
  return (
    <header
      className={`sticky top-0 z-10  rounded-bl-[800px_5px] rounded-br-[800px_5px] border-b-2 border-black bg-white pb-2 pl-4 pr-8 pt-4 font-mystery text-black sm:pl-8 `}
    >
      <div className="flex max-w-5xl items-center gap-x-20 sm:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl font-thin ">
            <a className="h-full w-full font-normal" href="/">
              Goodreads
            </a>
          </h1>
        </Link>
        <div className="flex w-full max-w-5xl justify-end sm:pr-4">
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

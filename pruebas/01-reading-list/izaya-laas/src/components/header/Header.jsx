import { isDark } from '../../signals/store';

const handleIsDark = () => {
  isDark.value = !isDark.value;
};

export const Header = () => {
  return (
    <header
      className={`sticky top-0 z-10 flex items-center gap-x-20 rounded-bl-[800px_5px] rounded-br-[800px_5px] border-b-2 border-black bg-white px-8 pb-2 pt-4 font-mystery text-black ${
        isDark.value ? 'invert' : ''
      }`}
    >
      <h1 className="text-2xl font-thin ">
        Good<span className="font-normal">reads</span>
      </h1>
      <div className="flex w-full max-w-5xl justify-end sm:pr-4">
        <img
          onClick={handleIsDark}
          src="/public/dark-mode.svg"
          className="w-8 transition-transform duration-300 hover:scale-90 hover:animate-pulse"
        />
      </div>
    </header>
  );
};

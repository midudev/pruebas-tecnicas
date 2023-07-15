const ButtonBar = () => {
  return (
    <footer className="bottom-0 mt-10 flex w-full flex-row items-center justify-around">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 stroke-2 text-amber-400"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 14l-4 -4l4 -4"></path>
          <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
        </svg>
      </div>
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 stroke-2 text-red-400"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </div>

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 stroke-2 text-green-400"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l5 5l10 -10"></path>
        </svg>
      </div>
    </footer>
  );
};

export default ButtonBar;

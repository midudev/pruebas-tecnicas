import { LinIcon } from '../utils/Icons';

export default function Footer() {
  return (
    <footer className="flex justify-center w-full max-w-screen-xl p-3 mx-auto md:py-2 ">
      <a
        href="https://www.linkedin.com/in/gaspar-tabora-823709283/"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        target="_blank"
      >
        <span className="flex col-span-2 gap-2 text-sm text-justify text-gray-500 sm:text-center dark:text-gray-400">
          © Gasperdev
          <LinIcon />
        </span>
      </a>
    </footer>
  );
}

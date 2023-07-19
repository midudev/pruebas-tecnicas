import { ListIcon } from "../utils/Icons";
export default function ButtonAdd(props) {
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer flex gap-3 text-white dark:text-gray-200 items-center lg:order-2text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      <span>
        <ListIcon />
      </span>
      <span className="flex-grow text-center">{props.title}</span>
    </button>
  );
}

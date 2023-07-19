import { BookIcon } from '../utils/Icons';

export default function OtherBooks({ author }) {
  return (
    <ul className="px-2 space-y-4 text-left text-gray-500 dark:text-gray-400">
      {author.otherBooks.map((res) => (
        <li key={res} className="flex items-center space-x-3">
          <BookIcon />
          <span> {res}</span>
        </li>
      ))}
    </ul>
  );
}

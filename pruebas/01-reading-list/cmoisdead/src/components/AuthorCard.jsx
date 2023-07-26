import { useState } from "react";
import { authorsList } from "../utils/authors";

export const AuthorCard = ({ name }) => {
  const [author, setAuthor] = useState(
    authorsList.find((author) => author.name === name),
  );

  return (
    <div className="flex flex-col content-center items-center justify-center">
      <img
        src={author.photo}
        alt={author.name}
        className="h-28 w-28 rounded-lg object-contain"
      />
      <p className="truncate text-center text-neutral-500">{name}</p>
    </div>
  );
};
